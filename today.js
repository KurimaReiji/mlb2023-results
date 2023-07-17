import { MlbTeams as Teams } from "./mlb2023-teams.js";
import { writeFileSync } from "fs";

const responseToJson = (res) => {
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

fetch("https://statsapi.mlb.com/api/v1/schedule?sportId=1")
  .then(responseToJson)
  .then((input) => {
    const date = input.dates[0].date;
    const data = input.dates[0].games
      .filter((g) => !g.resumeGameDate)
      .map((g) => ({
        gamePk: g.gamePk,
        date,
        road: Teams.nickname(g.teams.away.team.name),
        home: Teams.nickname(g.teams.home.team.name),
        score: [g.teams.away.score, g.teams.home.score].join(" - "),
        status: g.status.detailedState,
      }))
      .filter(({ status }) => ["Final", "Completed Early"].includes(status))
      ;

    const outfile = `./mlb-${date}.json`;
    const output = JSON.stringify(data, null, 2);
    writeFileSync(outfile, output);
    console.log(output);
  });

