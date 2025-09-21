/*   STEP 1   */
export const leagueID = "1180378014885785600"; // your league ID
export const leagueName = "Dy-Nasty Bois"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2024, Dy-Nasty Bois features a diverse group of managers assembled by Commish, Hipsters Do Sports. It was clear that each manager brought a unique strategy to the startup draft. 
  Some teams took a youth-centric approach, collecting many high-end rookies with hopes of dealing them later to address roster weaknesses. Others let the majority of the league spend early, then scooped up mid-range talent at a discount to build deep rosters. 
  The most common theme, however, was a win-now mentality—targeting a blend of high-end talent in their prime and still-productive, battle-tested veterans. Of course, a few managers dove in with little strategy, panic-buying their way through the draft.</p>
  <p>As rosters take shape in these early years, trades have become the primary way for managers to both build their teams and get to know one another. The inaugural season saw 21 trades, led by ZeroPoints and Fine Charbonnet, who each participated in seven. </p>
  <p>As Dy-Nasty Bois enters its second season, the league is already proving to be as dynamic and unpredictable as its name suggests. With rivalries forming, trade blocks heating up, and bold strategies beginning to pay off—or backfire—there’s no shortage of drama. 
  Whether you're rebuilding, reloading, or just along for the ride, one thing is certain: in this league, there’s never a dull moment.</p>
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  <p>All suggestions for edits to the league can be shared here *link TBD*, all submissions will be reviewed and put up for a vote by the league each offseason BEFORE the leagues rookie draft takes place.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "868271102986747904",
    "name": "Chase Ernste",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Duluth, MN", // (optional)
    "bio": "I’m a 26 y.o. Civil Engineer who’s in way too many fantasy leagues & the commish of 3. I watch YouTube videos about dynasty because of this league & like to remind Riley of how I defeated him in the championship last year!",
    "photo": "/managers/ChaseErnste.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "ZeroPoints", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/KyleMiddleton.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Take the vets nobody cares about on a discount & surround them with talent.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "458856254568132608",
    "name": "Jamie Hiner",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Maple Grove, MN", // (optional)
    "bio": "I am Jim and I like turtles.",
    "photo": "/managers/JamieHiner.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Trust the process.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "535896390002647040",
    "name": "Kyle Middleton",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Maple Grove, MN", // (optional)
    "bio": "Earn Name: Zero Points. -Philosophy: Winning is temporary. Draft picks are eternal. -Style: Go big, go broke, then trade the broken pieces for next year’s gold. Emerging from the ashes of a 0.00 fantasy week with nothing but hubris and a stack of conditional 4th-rounders, Zero Points is not here to play it safe. This manager doesn’t chase points—they chase futures, flipping players mid-game, mid-breath, mid-existential crisis. 📈 Accomplishments Include: • Traded away entire starting lineup for “a better draft board aesthetic.” • Pulled off a 9-team trade in Week 3 that left 14 managers emotionally compromised. • Refused to start a player unless they were acquired via trade AND had dramatic backstory.",
    "photo": "/managers/KyleMiddleton.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If your not first , you’re last.",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "453315591055339520",
    "name": "Jeremy Enzenauer",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Rochester, MN", // (optional)
    "bio": "Sports fella — worked for MLB for four years, based out of Target Field. Big disc golf guy. I’ve got a bunch of half-started, tech-related hobbies: coding, web design, PC building, 3D printing, Raspberry Pi projects, and way too many RPGs — you get the picture. Proud tree farmer. Football is watched in a Lovesac on a 90 inch projected screen — as it should be. Naz Reid.",
    "photo": "/managers/JeremyEnzenauer.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 9493, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Give me depth or give me death. Fantasy football is 60% skill and 40% luck. With that said, I cash out at a crazy rate so come at me. ",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "994351393186119680",
    "name": "Jake Losen",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Fairbault, MN", // (optional)
    "bio": "I like big butts and I cannot lie.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Fine Charbonnet", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/managers/JeremyEnzenauer.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Helter skelter.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "737397926405509120",
    "name": "Riley Kirkpatrick",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Prior Lake, MN", // (optional)
    "bio": "I started off in life as a packer fan living en enemy territory. Then one glorious day in the forth grade my family moved back to the promise land of Beer and Cheese. Somehow I ended back in the state of purple, and it's alright I guess. When not watching football I like to hike, camp, climb, snowboard and cross country ski. Favorite movie is Big Lebowski, TV show is The Office.  I currently work as a quality engineer for Medtronic with Kyle (Zero points). I know Chris (mudbutt) from middle school. Chase is my brother in law. And the everyone else is a friend or friend of a friend from my college years at UMD.",
    "photo": "/managers/RileyKirkpatrick.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chase's Chain Gang", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/ChaseErnste.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 2133, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "I want to know all the news and all the stats and use that to be the first to make a move.",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "997219085211500544",
    "name": "Garet Anderson-Lind",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Arlington, VA", // (optional)
    "bio": "Born and raised in Wisconsin, got my BA at UMD where I met folks like Jake and Riley. Moved to DC to get my MA. I've been working at various govt jobs since 2019, currently employed at the National Archives. Recently got married and that was pretty cool. Big fan of smoked brisket and gaming. ",
    "photo": "/managers/GaretAL.JPG", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Fine Charbonnet", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/managers/JeremyEnzenauer.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Play hard, party harder.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "1071950132188385280",
    "name": "Michael Teeters",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Maple Grove, MN", // (optional)
    "bio": "Love my Vikings and Cornhuskers. Just had a baby girl so just trying to survive!",
    "photo": "/managers/MikeTeeters.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "mudbutt93", // Can be anything (usually your rival's name)
      link: 9, // manager array number within this array, or null to link back to all managers page
      image: "/managers/ChrisLuebke.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Running backs, running backs, running backs.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "1070929006410739712",
    "name": "Will Charles",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Minneapolis, MN", // (optional)
    "bio": "MN sports fan born and raised in the Twin Cities. Went to UMD for college which is where I met Riley and got connected with this group.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Trust the process.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "1070921023953932288",
    "name": "Chris Luebke",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "New Lisbon, WI", // (optional)
    "bio": "Typical Wisconsin drinker.",
    "photo": "/managers/ChrisLuebke.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5850, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Consistency.",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
