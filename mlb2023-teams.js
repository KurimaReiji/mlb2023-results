/**
 * MLB 30 Teams Database for 2023 season.
 * @type {object[]} 
 * 
 * name: Official Team Name
 * league: AL or NL
 * division: East, Central, or West
 * alt[]: alternative names
 * alternatives index
 0: nickname
 1: nickname to uppercae
 2: code e.g. LAD, SF, SD, COL, or AZ
 3: code e.g. LAD, SFG, SDP, COL, or ARI. Baseball Reference
 4+ alternatives for each team. e.g. A's, D-backs
 */

class MlbTeams {
  static db = [
    {
      "name": "Baltimore Orioles",
      "league": "AL",
      "division": "East",
      "hashtag": "#Birdland",
      "alt": [
        "Orioles",
        "ORIOLES",
        "BAL",
        "BAL"
      ]
    },
    {
      "name": "Boston Red Sox",
      "league": "AL",
      "division": "East",
      "hashtag": "#DirtyWater",
      "alt": [
        "Red Sox",
        "RED SOX",
        "BOS",
        "BOS"
      ]
    },
    {
      "name": "New York Yankees",
      "league": "AL",
      "division": "East",
      "hashtag": "#RepBX",
      "alt": [
        "Yankees",
        "YANKEES",
        "NYY",
        "NYY"
      ]
    },
    {
      "name": "Tampa Bay Rays",
      "league": "AL",
      "division": "East",
      "hashtag": "#RaysUp",
      "alt": [
        "Rays",
        "RAYS",
        "TB",
        "TBR"
      ]
    },
    {
      "name": "Toronto Blue Jays",
      "league": "AL",
      "division": "East",
      "hashtag": "#NextLevel",
      "alt": [
        "Blue Jays",
        "BLUE JAYS",
        "TOR",
        "TOR"
      ]
    },
    {
      "name": "Chicago White Sox",
      "league": "AL",
      "division": "Central",
      "hashtag": "#WhiteSox",
      "alt": [
        "White Sox",
        "WHITE SOX",
        "CWS",
        "CWS"
      ]
    },
    {
      "name": "Cleveland Guardians",
      "league": "AL",
      "division": "Central",
      "hashtag": "#ForTheLand",
      "alt": [
        "Guardians",
        "GUARDIANS",
        "CLE",
        "CLE"
      ]
    },
    {
      "name": "Detroit Tigers",
      "league": "AL",
      "division": "Central",
      "hashtag": "#RepDetroit",
      "alt": [
        "Tigers",
        "TIGERS",
        "DET",
        "DET"
      ]
    },
    {
      "name": "Kansas City Royals",
      "league": "AL",
      "division": "Central",
      "hashtag": "#WelcomeToTheCity",
      "alt": [
        "Royals",
        "ROYALS",
        "KC",
        "KCR"
      ]
    },
    {
      "name": "Minnesota Twins",
      "league": "AL",
      "division": "Central",
      "hashtag": "#MNTwins",
      "alt": [
        "Twins",
        "TWINS",
        "MIN",
        "MIN"
      ]
    },
    {
      "name": "Houston Astros",
      "league": "AL",
      "division": "West",
      "hashtag": "#Ready2Reign",
      "alt": [
        "Astros",
        "ASTROS",
        "HOU",
        "HOU"
      ]
    },
    {
      "name": "Los Angeles Angels",
      "league": "AL",
      "division": "West",
      "hashtag": "#GoHalos",
      "alt": [
        "Angels",
        "ANGELS",
        "LAA",
        "LAA"
      ]
    },
    {
      "name": "Oakland Athletics",
      "league": "AL",
      "division": "West",
      "hashtag": "#Athletics",
      "alt": [
        "Athletics",
        "ATHLETICS",
        "OAK",
        "OAK",
        "A's"
      ]
    },
    {
      "name": "Seattle Mariners",
      "league": "AL",
      "division": "West",
      "hashtag": "#SeaUsRise",
      "alt": [
        "Mariners",
        "MARINERS",
        "SEA",
        "SEA"
      ]
    },
    {
      "name": "Texas Rangers",
      "league": "AL",
      "division": "West",
      "hashtag": "#StraightUpTX",
      "alt": [
        "Rangers",
        "RANGERS",
        "TEX",
        "TEX"
      ]
    },
    {
      "name": "Atlanta Braves",
      "league": "NL",
      "division": "East",
      "hashtag": "#ForTheA",
      "alt": [
        "Braves",
        "BRAVES",
        "ATL",
        "ATL"
      ]
    },
    {
      "name": "Miami Marlins",
      "league": "NL",
      "division": "East",
      "hashtag": "#MakeItMiami",
      "alt": [
        "Marlins",
        "MARLINS",
        "MIA",
        "MIA"
      ]
    },
    {
      "name": "New York Mets",
      "league": "NL",
      "division": "East",
      "hashtag": "#LGM",
      "alt": [
        "Mets",
        "METS",
        "NYM",
        "NYM"
      ]
    },
    {
      "name": "Philadelphia Phillies",
      "league": "NL",
      "division": "East",
      "hashtag": "#RingTheBell",
      "alt": [
        "Phillies",
        "PHILLIES",
        "PHI",
        "PHI"
      ]
    },
    {
      "name": "Washington Nationals",
      "league": "NL",
      "division": "East",
      "hashtag": "#NATITUDE",
      "alt": [
        "Nationals",
        "NATIONALS",
        "WSH",
        "WSH"
      ]
    },
    {
      "name": "Chicago Cubs",
      "league": "NL",
      "division": "Central",
      "hashtag": "#NextStartsHere",
      "alt": [
        "Cubs",
        "CUBS",
        "CHC",
        "CHC"
      ]
    },
    {
      "name": "Cincinnati Reds",
      "league": "NL",
      "division": "Central",
      "hashtag": "#ATOBTTR",
      "alt": [
        "Reds",
        "REDS",
        "CIN",
        "CIN"
      ]
    },
    {
      "name": "Milwaukee Brewers",
      "league": "NL",
      "division": "Central",
      "hashtag": "#ThisIsMyCrew",
      "alt": [
        "Brewers",
        "BREWERS",
        "MIL",
        "MIL"
      ]
    },
    {
      "name": "Pittsburgh Pirates",
      "league": "NL",
      "division": "Central",
      "hashtag": "#LetsGoBucs",
      "alt": [
        "Pirates",
        "PIRATES",
        "PIT",
        "PIT"
      ]
    },
    {
      "name": "St. Louis Cardinals",
      "league": "NL",
      "division": "Central",
      "hashtag": "#STLCards",
      "alt": [
        "Cardinals",
        "CARDINALS",
        "STL",
        "STL"
      ]
    },
    {
      "name": "Arizona Diamondbacks",
      "league": "NL",
      "division": "West",
      "hashtag": "#ArizonaBorn",
      "alt": [
        "Diamondbacks",
        "DIAMONDBACKS",
        "AZ",
        "ARI",
        "D-backs",
      ]
    },
    {
      "name": "Colorado Rockies",
      "league": "NL",
      "division": "West",
      "hashtag": "#Rockies",
      "alt": [
        "Rockies",
        "ROCKIES",
        "COL",
        "COL"
      ]
    },
    {
      "name": "Los Angeles Dodgers",
      "league": "NL",
      "division": "West",
      "hashtag": "#HereToPlay",
      "alt": [
        "Dodgers",
        "DODGERS",
        "LAD",
        "LAD"
      ]
    },
    {
      "name": "San Diego Padres",
      "league": "NL",
      "division": "West",
      "hashtag": "#BringTheGold",
      "alt": [
        "Padres",
        "PADRES",
        "SD",
        "SDP"
      ]
    },
    {
      "name": "San Francisco Giants",
      "league": "NL",
      "division": "West",
      "hashtag": "#SFGiants",
      "alt": [
        "Giants",
        "GIANTS",
        "SF",
        "SFG"
      ]
    }
  ];

  static find(name) {
    return this.db.find(obj => [obj.name, ...obj.alt].includes(name));
  }

  static nickname(name) {
    return this.find(name)?.alt.at(0);
  }

  static league(name) {
    return this.find(name)?.league;
  }

  static division(name) {
    return this.find(name)?.division;
  }

  static code(name) {
    return this.find(name)?.alt.at(2);
  }

  static hashtag(name) {
    return this.find(name)?.hashtag;
  }

  static all() {
    return this.db.map((obj) => this.nickname(obj.name));
  }

  static al() {
    return this.db
      .filter((obj) => obj.league === "AL")
      .map((obj) => this.nickname(obj.name));
  }

  static nl() {
    return this.db
      .filter((obj) => obj.league === "NL")
      .map((obj) => this.nickname(obj.name));
  }
}

const toNicknames = (obj) => {
  const [home, road] = [MlbTeams.nickname(obj.home), MlbTeams.nickname(obj.road)];
  return Object.assign(obj, { home, road });
}

export {
  MlbTeams,
  toNicknames
};