<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">DY-NASTY BOIS LEAGUE CHARTER</h1>
    <p>It’s time to put on your big boi pants…</p>

    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" onclick={() => goToSection(one)}>Section 1: General Information</h3>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneOne)}>1.1 League Size</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneTwo)}>1.2 Buy-In</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoOne)}>1.2.1 Dues Deadline</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoTwo)}>1.2.2 Startup Cost</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoThree)}>1.2.3 Paying Ahead</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneThree)}>1.3 Payouts</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(twoOne)}>2.1 Start-Up</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(twoTwoOne)}>2.2.1 Format</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(twoTwoTwo)}>2.2.2 Seeding</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(twoTwoThree)}>2.2.3 Temporary Roster Expansion</h5>
    
    <h3 class="noUnderscore clickable" onclick={() => goToSection(three)}>Section 3: Team Construction</h3>

        <h4 class="noUnderscore clickable" onclick={() => goToSection(threeOne)}>3.1 Roster Breakdown</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneOne)}>3.1.1 Starting</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneTwo)}>3.1.2 Bench</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneThree)}>3.1.3 Taxi</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneFour)}>3.1.4 IR</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(threeOne)}>3.2 Weekly Lineups</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeTwoOne)}>3.2.1 Requirements</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeTwoTwo)}>3.2.2 Violations</h5>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(four)}>Section 4: Scoring</h3>

        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourOne)}>4.1 Passing</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourTwo)}>4.2 Rushing</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourThree)}>4.3 Recieving</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourFour)}>4.4 Misc</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourFive)}>4.5 Divisions</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourSix)}>4.6 Tiebreakers</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(five)}>Section 5: Waivers/Trades</h3>

        <h4 class="noUnderscore clickable" onclick={() => goToSection(fiveOne)}>5.1 Free Agents</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fiveTwo)}>5.2 Trades</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneOne)}>5.2.1 Collusion</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneTwo)}>5.2.2 Lending Players</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(threeOneThree)}>5.2.3 Restrictions</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fiveThree)}>5.3 Anti-Tanking</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(six)}>Section 6: Playoffs</h3>

        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixOne)}>6.1 Format</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixTwo)}>6.2 Tiebreakers</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(seven)}>Section 7: Rule Changes</h3>

        <h4 class="noUnderscore clickable" onclick={() => goToSection(sevenOne)}>7.1 Proposals</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(sevenOneOne)}>7.1.1 How to Submit</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sevenTwo)}>7.2 Voting Process</h4>

<h3 class="noUnderscore clickable" onclick={() => goToSection(eight)}>Section 8: Manager Turnover</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(eightOne)}>7.1 Removing</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(eightTwo)}>7.2 Replacing</h4>


    <hr />

    <h2 class="sectionHeading" bind:this={one}>Section 1 General Information</h2>

    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 League Size</h3>

    <p>10 Teams</p>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Buy-In</h3>

    <p>$50 Yearly</p>

    <h4 bind:this={oneTwoOne}>1.2.1 Dues Deadline</h4>
    <div class="subBlock">
        <p>League dues must be paid by the 1st of August each year. If a manager fails to pay before the deadline a 10% fee will be added to their dues that will go towards that season's payout.</p>
    </div>

    <h4 bind:this={oneTwoTwo}>1.2.2 Startup Costs</h4>
    <div class="subBlock">
        <p>For the first year, pay this year and next year's fee. Each year after that only pay next year's fee. This is to keep everyone invested and playing. You forfeit next year's fee if you drop out.</p>
    </div>

    <h4 bind:this={oneTwoThree}>1.2.3 Paying Ahead</h4>
    <div class="subBlock">
        <p>If any trades include future picks, the owner sending the picks has to have buy-ins paid at the time of the trade. (I.e. if the year is 2025 and someone wants to deal a 2028 pick they will have to pre-pay for the 2027 and 2028 season.)</p>
    </div>



    <h3 bind:this={oneThree}>1.3 Payouts</h3>

    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: ${dues * 8}</li>
        <li>2nd place: ${dues * 1}</li>
    </ul>
    <p>$50 goes into the league “pot” each season and is paid out to the first team to win three championships total. </p>


    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>

    <h3 bind:this={twoOne}>2.1 Start-Up</h3>
    <p>The original draft was done in auction format with 28 rounds including Veterans and Rookies with a $500 budget per team.</p>

    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Every year after the start up draft a rookie draft will be held, only incoming rookies to the NFL will be eligible.</p>

<h4 bind:this={twoTwoOne}>2.2.1 Format</h4>
    <div class="subBlock">
        <p>The draft will be four rounds, in reverse order of team finishes from the previous season (lowest rank picks first, highest rank picks last). This is not a snake draft, the team who holds the first pick in the first round will hold the first pick in the second round (unless traded).</p>
    </div>

    <h4 bind:this={twoTwoTwo}>2.2.2 Seeding</h4>
    <div class="subBlock">
    <p>Determining the seeding for the teams eliminated from the playoffs will be as follows:</p>

    <ul>
        <li>After week one of the playoffs, two teams will be eliminated. The team with the lowest points in that week will be the 5th draft pick in  next year's draft. The eliminated team with the higher points for will be the 6th seed in the next year's draft.</li>
        <li>The same concept will apply to teams eliminated from the semi-final round. The eliminated team with the lower score will receive the 7th pick in the draft, and the eliminated team with the higher score will receive the 8th pick in the following year’s draft.</li>
        <li>The lowest 4 teams (teams who didn’t make the playoffs) will be put in a lottery for the first pick. This is to disincentivize tanking.</li>
    </ul>
    </div>

    <h4 bind:this={twoTwoThree}>2.2.3 Temporary Roster Expansion</h4>
    <div class="subBlock">
        <p>Team sizes will be expanded by 4 players prior to the draft and dropped back down to 28 one week before the NFL season.</p>
    </div>

    <h2 class="sectionHeading" bind:this={three}>Section 3 Team Construction</h2>

    <h3 bind:this={threeOne}>3.1 Roster Breakdown</h3>
    <p>Teams have 32 total roster spaces plus 2 IR slots.</p>

    <h4 bind:this={threeOneOne}>3.1.1 Starters</h4>
    <div class="subBlock">
        <p>9 total players. 1 QB, 2 RB, 2 WR, 1 TE, 2 Flex (RB/WR/TE), 1 Super Flex (RB/WR/TE/QB)</p>
    </div>

    <h4 bind:this={threeOneTwo}>3.1.2 Bench</h4>
    <div class="subBlock">
        <p>19 players.</p>
    </div>

    <h4 bind:this={threeOneThree}>3.1.3 Taxi</h4>
    <div class="subBlock">
        <p>A taxi squad is a set number of players on your roster who do not count toward your overall roster limit. A maximum of 4 rookies can be added to your taxi prior to the start of the regular season. Players with more than 2 years of experience must be removed from the taxi. Once a players is activiated they cannot be re-added to the taxi squad.</p>
    </div>

    <h4 bind:this={threeOneFour}>3.1.4 IR</h4>
    <div class="subBlock">
        <p>2 players maximum that are ruled "out" or "IR" any given week.</p>
    </div>

    <h2 class="sectionHeading" bind:this={four}>Section 4 Scoring</h2>

       <h3 bind:this={fourOne}>4.1 Passing</h3>
    <ul>
        <li>1 point per every 20 yards (changed from 25 yards in most standard formats)</li>
        <li>4 points per passing TD</li>
        <li>2 points per 2-point conversion</li>
        <li>-2 points per interception</li>
        <li>1 point per 40+ yard touchdown thrown bonus</li>
    </ul>

    <h3 bind:this={fourTwo}>4.2 Rushing</h3>
    <ul>
        <li>1 point per every 10 yards</li>
        <li>6 points per rushing TD</li>
        <li>2 points per 2-point conversion</li>
        <li>1 point per 40+ yard rushing TD bonus</li>
    </ul>

    <h3 bind:this={fourThree}>4.3 Recieving</h3>
    <ul>
        <li>0.5 points per reception</li>
        <li>1 point per every 10 yards receiving</li>
        <li>6 points per receiving TD</li>
        <li>2 points per 2-point conversion</li>
        <li>1 point per 40+ yard receiving TD bonus</li>
    </ul>

    <h3 bind:this={fourFour}>4.4 Misc</h3>
    <ul>
        <li>-1 point per fumble</li>
        <li>-1 point per fumble lost</li>
        <li>6 points per punt or kick return TD</li>
    </ul>

    <h3 bind:this={fourFive}>4.5 Divisions</h3>
    <p>Each week players will go head to head, matchups randomly determined at the beginning of the season. Each team will play for an additional win by comparing their score against the league scoring average for the week.</p>

    <h3 bind:this={fourSix}>4.6 Tiebreakers</h3>
    <p>Matchup Tiebreaker rules will be as follows: Highest total points for (including all bench players), then a coin flip.</p>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Waivers/Trades</h2>
    
    <h3 bind:this={fiveOne}>5.1 Free Agents</h3>
    <p>Free agency will be handled with FAAB (free agency acquisition budget). Each team will have $100 for in-season free agency acquisitions, this budget is season-long and will not reset each week. The team who bids the most on each free agent will win the bid. FAAB will reset for the off-season and each team will have $100 that expires at the start of the league year.</p>

    <h3 bind:this={fiveTwo}>5.2 Trades</h3>
    <p>Trades will be open during the off season as soon as the new league starts with a deadline of week 10.</p>

    <h4 bind:this={fiveTwoOne}>5.2.1 Collusion</h4>
    <div class="subBlock">
        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be revised.</p>
        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and at the very least assess the thinking of any team involved in a heavily lop-sided trade.</p>
    </div>

    <h4 bind:this={fiveTwoTwo}>5.2.2 Lending Players</h4>
    <div class="subBlock">
        <p>Any player traded from a team may not be re-acquired via trade within 6 weeks of the original trade. Any teams involved in this behavior will be subject to the aforementioned collusion punishments.</p>
    </div>

    <h4 bind:this={fiveTwoThree}>5.2.3 Restrictions</h4>
    <div class="subBlock">
        <p>You will not be able to trade draft picks that are more than 3 drafts away. For example, during the 2025 season you cannot trade any picks in or after the 2029 draft. You may only trade FAAB $ from the current season.</p>
        <p>After the rookie draft has been completed for the current year, draft picks for the draft three years in the future will be added to all manager’s rosters. (For example after the 2026 rookie draft, the 2029 draft picks will be added.)</p>
    </div>

    <h3 bind:this={fiveThree}>5.3 Anti-Tanking</h3>
    <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players, draft picks, FAAB $, or otherwise found guilty of engaging in any form of collusion, all parties involved in the trade will be susceptible to punishment. The punishments will go as followed:</p>
    <ul>
        <li>First Offense – Immediate reduction of FAAB budget by 80%</li>
        <li>Second Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids</li>
        <li>Third Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
    </ul>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Playoffs</h2>
    
    <h3 bind:this={sixOne}>6.1 Format</h3>
    <p>The top 6 teams by record will compete in the single elmination playoffs, running from week 15 through week 17.</p>
    
    <h3 bind:this={sixTwo}>6.2 Tiebreakers</h3>
    <p>Who makes the playoffs in the result of a tie is total points for, then head to head record, then max points for, then a coin flip.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at ${dues}. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a> and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be addd to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: ${dues * 8}</li>
        <li>2nd place: ${dues * 1}</li>
    </ul>
    <p>$50 goes into the league “pot” each season and is paid out to the first team to win three championships total. Each season you are paying for next years fee. You forfeit next years fee if you drop out.</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

</div>
