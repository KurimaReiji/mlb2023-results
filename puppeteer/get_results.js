import { writeFileSync } from "fs";
import puppeteer from 'puppeteer';

const scraper = (date) => {
  const singleGameContainers = [...document.querySelectorAll(`[data-test-mlb="singleGameContainer"]`)];
  return singleGameContainers
    .map((game) => {
      const status = game.querySelector(`[data-mlb-test="gameStartTimesStateLabel"]`).textContent.trim();
      const teams = [...game.querySelectorAll(`[data-mlb-test="teamRecordWrapper"]`)].slice(0, 2);
      const [road, home] = teams.map((team) => [...team.querySelectorAll(`[data-mlb-test="teamNameLabel"] div:nth-of-type(1)`)].map((label) => label.textContent.trim())).flat();
      const scores = [...game.querySelectorAll(`[data-col="0"][data-row]`)].slice(0, 2).map(d => Number(d.textContent.trim()));
      return {
        date,
        road,
        home,
        score: scores.join(" - "),
        status
      }
    })
    .filter((obj) => obj.status.includes("Final"))
    ;
};

const dates = process.argv.slice(2);
if (dates.length > 0 && dates.every((d) => /^202\d-[012]\d-[0-3]\d$/.test(d))) {
  console.log(dates);
} else {
  console.error("Usage: node mlbcomscore.js YYYY-MM-DD");
  process.exit(1);
}

const browser = await puppeteer.launch({
  defaultViewport: {
    width: 1200,
    height: 1100,
  },
  headless: "new",
});

const page = await browser.newPage();
for (const date of dates) {
  const targetURL = `https://www.mlb.com/scores/${date}`;
  await page.goto(targetURL);

  let data;
  try {
    await page.waitForSelector(`[data-test-mlb="singleGameContainer"]`, { timeout: 4000 });
    data = await page.evaluate(scraper, date);
  } catch (err) {
    data = [];
    console.error(err);
  }
  const output = JSON.stringify(data, null, 2);
  console.log(output);
  const outfile = `./mlb-${date}.json`;
  writeFileSync(outfile, output, "utf8");
}

await browser.close();