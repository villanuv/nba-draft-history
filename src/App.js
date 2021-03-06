import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

const Overview = () => {
  return (
    <div>
    <h1>Overview (1990-2008)</h1>
 
    <p>
      Total Seasons: 19<br />
      Total Number Players Drafted: 1088<br />
      Total Contributors: 394 (36.2%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>33.5%<br />364</td>{/* 10+ seasons */}
        <td>11.7%<br />127</td>{/* 7-9 seasons */}
        <td>7.3%<br />79</td>{/* 5-6 seasons */}
        <td>14.1%<br />154</td>{/* 3-4 seasons */}
        <td>33.5%<br />364</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">30 Hall of Famers<br />2.7%</th>
        <th colSpan="2">111 All-Stars<br />10.2%</th>
        <th colSpan="2">240 Impact Players<br />22%</th>
        <th colSpan="2">154 Role Players<br />14.1%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.1%<br />12</td>{/* Hall of Famers: Top 3 */}
        <td>2.3%<br />25</td>{/* Hall of Famers: Lottery */}
        <td>0.4%<br />5</td>{/* Hall of Famers: Not Lottery */}
        <td>6.6%<br />72</td>{/* All-Stars: Lottery */}
        <td>3.6%<br />39</td>{/* All-Stars: Not Lottery */}
        <td>12.3%<br />134</td>{/* Impact Players: Lottery */}
        <td>9.7%<br />106</td>{/* Impact Players: Not Lottery */}
        <td>3.6%<br />39</td>{/* Role Players: Lottery */}
        <td>10.6%<br />115</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <h3>Analysis</h3>

    <p>Over the course of 19 seasons, there’s a roughly even distribution between players with 10 seasons or more, those that play 3-9 seasons, and those that don’t last for more than 2 seasons (a.k.a. busts). I’m concentrating on players that last at least 10 years, noted as Contributing Players, with some notable exceptions.</p>

    <h3>“Should a bottom-dwelling NBA team really tank?”</h3>

    <p>Well, there’s roughly a 33% chance that they end up with a Contributing Player that’s worth the pick. Of those that don’t tank, there’s about the same probability that they end up with an Impact or Role Player. Of the Impact Players, it’s about a third they end up with an All-Star. It’s near impossible they end up with a Hall of Famer at 0.5%.</p>

    <p>Compare this with those that purposely tank. Still a 33% chance to land a Contributing Player. The chances of them landing an Impact Player is 3.5x getting a Role Player. If an Impact Player, more than half have been an All-Star. Of those Impact Players, 19% (25/134) have become Hall of Famers (or All-Time greats).</p>

    <p>Winning the lottery to get one of the first three picks is a long-shot to land a Hall of Famer. It’s only 7% (12/173) of Contributing Players. You may as well just not make the playoffs and be hopeful that your player is a Hall of Famer. Because it’s historically been the same probability (13/173).</p>

    <h3>Conclusion</h3>
  
    <p>Overall, it’s probably better to purposefully miss the playoffs. But to suck for the purpose of winning a Top 3 pick in the draft lottery isn’t really worth it. Teams that have drooled over drafting top picks like Shaquille O’Neal, Tim Duncan and LeBron James may disagree with that statement. But for every one of them, there are also guys like Kobe Bryant (13th in 1996), Dirk Nowitzki (9th in 1998) and Russell Westbrook (4th in 2008).</p>
    </div>
  )
}

const Draft90 = () => {
  return (
    <div>
    <h1>1990 NBA Draft</h1>

    <p>
      Number Players Drafted: 54<br />
      Contributors: 21 (38.9%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>35.2%<br />19</td>{/* 10+ seasons */}
        <td>16.7%<br />9</td>{/* 7-9 seasons */}
        <td>9.3%<br />5</td>{/* 5-6 seasons */}
        <td>25.9%<br />14</td>{/* 3-4 seasons */}
        <td>13%<br />7</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.9%</th>
        <th colSpan="2">5 All-Stars<br />9.2%</th>
        <th colSpan="2">10 Impact Players<br />18.5%</th>
        <th colSpan="2">11 Role Players<br />20.4%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.9%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>1.9%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>5.5%<br />3</td>{/* All-Stars: Lottery */}
        <td>3.7%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>9.2%<br />5</td>{/* Impact Players: Lottery */}
        <td>9.2%<br />5</td>{/* Impact Players: Not Lottery */}
        <td>3.7%<br />2</td>{/* Role Players: Lottery */}
        <td>16.7%<br />9</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Gary Payton (2)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Derrick Coleman (1)<br />
          Tyrone Hill (11)<br />
          Jayson Williams (21)*<br />
          Antonio Davis (45)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Mahmoud Abdul-Rauf (3)*<br />
          Kendall Gill (5)<br />
          Elden Campbell (27)<br />
          Toni Kukoc (29)<br />
          Cedric Ceballos (48)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Dennis Scott (4)<br />
          Felton Spencer (6)<br />
          Loy Vaught (13)<br />
          Terry Mills (16)<br />
          Duane Causwell (18)<br />
          Dee Brown (19)<br />
          Greg Foster (35)<br />
          Jud Buechler (38)<br />
          Bimbo Coles (40)<br />
          Tony Massenburg (43)<br />
          Derek Strong (47)    
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft91 = () => {
  return (
    <div>
    <h1>1991 NBA Draft</h1>

    <p>
      Number Players Drafted: 54<br />
      Contributors: 20 (37%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>27.8%<br />15</td>{/* 10+ seasons */}
        <td>11.1%<br />6</td>{/* 7-9 seasons */}
        <td>12.9%<br />7</td>{/* 5-6 seasons */}
        <td>16.7%<br />9</td>{/* 3-4 seasons */}
        <td>31.5%<br />17</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.8%</th>
        <th colSpan="2">7 All-Stars<br />13%</th>
        <th colSpan="2">12 Impact Players<br />22.2%</th>
        <th colSpan="2">8 Role Players<br />14.8%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>1.8%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>9.2%<br />5</td>{/* All-Stars: Lottery */}
        <td>3.7%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>11.1%<br />6</td>{/* Impact Players: Lottery */}
        <td>11.1%<br />6</td>{/* Impact Players: Not Lottery */}
        <td>5.6%<br />3</td>{/* Role Players: Lottery */}
        <td>9.2%<br />5</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Dikembe Mutombo (4)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Larry Johnson (1)<br />
          Kenny Anderson (2)<br />
          Steve Smith (5)<br />
          Terrell Brandon (11)<br />
          Dale Davis (13)<br />
          Chris Gatling (16)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Bison Dele (10)*<br />
          Eric Murdock (21)*<br />
          Rick Fox (24)<br />
          Bobby Phills (45)*<br />
          Isaac Austin (48)*
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Billy Owens (3)<br />
          Luc Longley (7)<br />
          Stacey Augmon (9)<br />
          Greg Anthony (12)<br />
          Stanley Roberts (23)<br />
          Randy Brown (31)<br />
          Elliot Perry (37)<br />
          Doug Overton (40)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft92 = () => {
  return (
    <div>
    <h1>1992 NBA Draft</h1>

    <p>
      Number Players Drafted: 54<br />
      Contributors: 23 (42.6%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>37%<br />20</td>{/* 10+ seasons */}
        <td>13%<br />7</td>{/* 7-9 seasons */}
        <td>3.7%<br />2</td>{/* 5-6 seasons */}
        <td>16.7%<br />9</td>{/* 3-4 seasons */}
        <td>29.6%<br />16</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">2 Hall of Famers<br />8.7%</th>
        <th colSpan="2">5 All-Stars<br />9.2%</th>
        <th colSpan="2">12 Impact Players<br />22.2%</th>
        <th colSpan="2">11 Role Players<br />20.4%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>3.7%<br />2</td>{/* Hall of Famers: Top 3 */}
        <td>3.7%<br />2</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>7.4%<br />4</td>{/* All-Stars: Lottery */}
        <td>1.8%<br />1</td>{/* All-Stars: Not Lottery */}
        <td>14.8%<br />8</td>{/* Impact Players: Lottery */}
        <td>7.4%<br />4</td>{/* Impact Players: Not Lottery */}
        <td>3.7%<br />2</td>{/* Role Players: Lottery */}
        <td>16.7%<br />9</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Shaquille O’Neal (1)<br />
          Alonzo Mourning (2)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Christian Laettner (3)<br />
          Tom Gugliotta (6)<br />
          Latrell Sprewell (24)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Jim Jackson (4)<br />
          LaPhonso Ellis (5)<br />
          Clarence Weatherspoon (9)<br />
          Robert Horry (11)<br />
          Doug Christie (17)<br />
          Jon Barry (21)<br />
          PJ Brown (29)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Walt Williams (7)<br />
          Todd Day (8)<br />
          Bryant Stith (13)<br />
          Anthony Peeler (15)<br />
          Tracy Murray (18)<br />
          Don MacLean (19)*<br />
          Hubert Davis (20)<br />
          Oliver Miller (22)*<br />
          Brent Price (32)*<br />
          Popeye Jones (41)<br />
          Matt Geiger (42)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft93 = () => {
  return (
    <div>
    <h1>1993 NBA Draft</h1>

    <p>
      Number Players Drafted: 54<br />
      Contributors: 19 (35.2%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>33.3%<br />18</td>{/* 10+ seasons */}
        <td>7.4%<br />4</td>{/* 7-9 seasons */}
        <td>9.3%<br />5</td>{/* 5-6 seasons */}
        <td>7.4%<br />4</td>{/* 3-4 seasons */}
        <td>42.6%<br />23</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.9%</th>
        <th colSpan="2">7 All-Stars<br />13%</th>
        <th colSpan="2">12 Impact Players<br />22.2%</th>
        <th colSpan="2">7 Role Players<br />13%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.9%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>1.9%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>9.2%<br />5</td>{/* All-Stars: Lottery */}
        <td>3.7%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>16.7%<br />9</td>{/* Impact Players: Lottery */}
        <td>5.5%<br />3</td>{/* Impact Players: Not Lottery */}
        <td>1.9%<br />1</td>{/* Role Players: Lottery */}
        <td>11.1%<br />6</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Chris Webber (1)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Anfernee Hardaway (3)*<br />
          Jamal Mashburn (4)<br />
          Vin Baker (8)<br />
          Allan Houston (11)<br />
          Sam Cassell (24)<br />
          Nick Van Exel (37)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Isaiah Rider (5)<br />
          Calbert Cheaney (6)<br />
          Rodney Rogers (9)<br />
          Lindsey Hunter (10)<br />
          Bryon Russell (45)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Shawn Bradley (2)<br />
          George Lynch (12)<br />
          Chris Mills (22)<br />
          Ervin Johnson (23)<br />
          Corey Blount (25)<br />
          Lucious Harris (28)<br />
          Chris Whitney (47)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft94 = () => {
  return (
    <div>
    <h1>1994 NBA Draft</h1>

    <p>
      Number Players Drafted: 54<br />
      Contributors: 16 (29.6%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>27.8%<br />15</td>{/* 10+ seasons */}
        <td>16.7%<br />9</td>{/* 7-9 seasons */}
        <td>9.2%<br />5</td>{/* 5-6 seasons */}
        <td>20.4%<br />11</td>{/* 3-4 seasons */}
        <td>25.9%<br />14</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.9%</th>
        <th colSpan="2">5 All-Stars<br />9.2%</th>
        <th colSpan="2">11 Impact Players<br />20.4%</th>
        <th colSpan="2">5 Role Players<br />9.2%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.9%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>1.9%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>9.2%<br />5</td>{/* All-Stars: Lottery */}
        <td>0%<br />0</td>{/* All-Stars: Not Lottery */}
        <td>14.8%<br />8</td>{/* Impact Players: Lottery */}
        <td>5.6%<br />3</td>{/* Impact Players: Not Lottery */}
        <td>0%<br />0</td>{/* Role Players: Lottery */}
        <td>9.2%<br />5</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Jason Kidd (2)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Glenn Robinson (1)<br />
          Grant Hill (3)<br />
          Juwan Howard (5)<br />
          Eddie Jones (10)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Donyell Marshall (4)<br />
          Lamond Murray (7)<br />
          Brian Grant (8)<br />
          Jalen Rose (13)<br />
          Wesley Person (23)<br />
          Voshon Leonard (46)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Eric Piatkowski (15)<br />
          Aaron McKie (17)<br />
          Monty Williams (24)*<br />
          Charlie Ward (26)<br />
          Howard Eisley (30)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft95 = () => {
  return (
    <div>
    <h1>1995 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 19 (32.7%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>32.7%<br />19</td>{/* 10+ seasons */}
        <td>8.6%<br />5</td>{/* 7-9 seasons */}
        <td>6.9%<br />4</td>{/* 5-6 seasons */}
        <td>12.1%<br />7</td>{/* 3-4 seasons */}
        <td>39.6%<br />23</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.7%</th>
        <th colSpan="2">6 All-Stars<br />10.3%</th>
        <th colSpan="2">11 Impact Players<br />19%</th>
        <th colSpan="2">8 Role Players<br />13.8%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>6.9%<br />4</td>{/* All-Stars: Lottery */}
        <td>3.4%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>12.1%<br />7</td>{/* Impact Players: Lottery */}
        <td>6.9%<br />4</td>{/* Impact Players: Not Lottery */}
        <td>1.7%<br />1</td>{/* Role Players: Lottery */}
        <td>12.1%<br />7</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Kevin Garnett (5)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Antonio McDyess (2)<br />
          Jerry Stackhouse (3)<br />
          Rasheed Wallace (4)<br />
          Theo Ratliff (18)<br />
          Michael Finley (21)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Joe Smith (1)<br />
          Damon Stoudamire (7)<br />
          Kurt Thomas (10)<br />
          Travis Best (23)<br />
          Eric Snow (43)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Corliss Williamson (13)<br />
          Eric Williams (14)<br />
          Brent Barry (15)<br />
          Alan Henderson (16)<br />
          Bob Sura (17)<br />
          Greg Ostertag (28)<br />
          Andrew DeClercq (34)<br />
          Fred Holberg (52)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft96 = () => {
  return (
    <div>
    <h1>1996 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 25 (43.1%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>39.6%<br />23</td>{/* 10+ seasons */}
        <td>8.6%<br />5</td>{/* 7-9 seasons */}
        <td>5.2%<br />3</td>{/* 5-6 seasons */}
        <td>10.3%<br />6</td>{/* 3-4 seasons */}
        <td>36.2%<br />21</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">4 Hall of Famers<br />6.9%</th>
        <th colSpan="2">10 All-Stars<br />17.2%</th>
        <th colSpan="2">12 Impact Players<br />20.7%</th>
        <th colSpan="2">13 Role Players<br />22.4%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.7%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>5.2%<br />3</td>{/* Hall of Famers: Lottery */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Not Lottery */}
        <td>10.3%<br />6</td>{/* All-Stars: Lottery */}
        <td>6.9%<br />4</td>{/* All-Stars: Not Lottery */}
        <td>12.1%<br />7</td>{/* Impact Players: Lottery */}
        <td>8.6%<br />5</td>{/* Impact Players: Not Lottery */}
        <td>8.6%<br />5</td>{/* Role Players: Lottery */}
        <td>13.8%<br />8</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Allen Iverson (1)<br />
          Ray Allen (5)<br />
          Kobe Bryant (13)<br />
          Steve Nash (15)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Shareef Abdur-Rahim (3)<br />
          Stephon Marbury (4)<br />
          Antoine Walker (6)<br />
          Peja Stojakovic (14)<br />
          Jermaine O’Neal (17)<br />
          Zydrunas Ilgauskas (20)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Marcus Camby (2)<br />
          Derek Fisher (24)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Lorenzen Wright (7)<br />
          Kerry Kittles (8)<br />
          Samaki Walker (9)<br />
          Erick Dampier (10)<br />
          Vitaly Potapenko (12)<br />
          Tony Delk (16)<br />
          Walter McCarty (19)<br />
          Jerome Williams (26)<br />
          Othella Harrington (30)<br />
          Jeff Mcinnes (37)<br />
          Randy Livingstron (42)<br />
          Malik Rose (44)<br />
          Shannon Anderson (54)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft97 = () => {
  return (
    <div>
    <h1>1997 NBA Draft</h1>

    <p>
      Number Players Drafted: 57<br />
      Contributors: 20 (35.1%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>29.8%<br />17</td>{/* 10+ seasons */}
        <td>14%<br />8</td>{/* 7-9 seasons */}
        <td>7%<br />4</td>{/* 5-6 seasons */}
        <td>7%<br />4</td>{/* 3-4 seasons */}
        <td>42.1%<br />24</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">2 Hall of Famers<br />3.5%</th>
        <th colSpan="2">3 All-Stars<br />5.3%</th>
        <th colSpan="2">11 Impact Players<br />19.3%</th>
        <th colSpan="2">9 Role Players<br />15.8%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.7%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>3.5%<br />2</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>5.3%<br />3</td>{/* All-Stars: Lottery */}
        <td>0%<br />0</td>{/* All-Stars: Not Lottery */}
        <td>14%<br />8</td>{/* Impact Players: Lottery */}
        <td>5.3<br />3</td>{/* Impact Players: Not Lottery */}
        <td>7%<br />4</td>{/* Role Players: Lottery */}
        <td>8.8%<br />5</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Tim Duncan (1)<br />
          Tracy McGrady (9)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Chauncey Billups (3)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Keith Van Horn (2)*<br />
          Tim Thomas (7)<br />
          Danny Fortson (10)<br />
          Austin Croshere (12)<br />
          Derek Anderson (13)<br />
          Brevin Knight (16)<br />
          Stephen Jackson (42)<br />
          Bobby Jackson (23)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Antonio Daniels (4)<br />
          Tony Battie (5)<br />
          Ron Mercer (6)<br />
          Adonal Foyle (8)<br />
          Kelvin Cato (15)<br />
          Scot Pollard (19)<br />
          Jacque Vaughn (27)<br />
          Anthony Johnson (39)<br />
          Alvin Williams (47)*
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft98 = () => {
  return (
    <div>
    <h1>1998 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 26 (44.8%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>43.1%<br />25</td>{/* 10+ seasons */}
        <td>12.1%<br />7</td>{/* 7-9 seasons */}
        <td>6.9%<br />4</td>{/* 5-6 seasons */}
        <td>13.8%<br />8</td>{/* 3-4 seasons */}
        <td>24.1%<br />14</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">3 Hall of Famers<br />5.2%</th>
        <th colSpan="2">5 All-Stars<br />8.6%</th>
        <th colSpan="2">18 Impact Players<br />31%</th>
        <th colSpan="2">8 Role Players<br />13.8%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>5.2%<br />3</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>6.9%<br />4</td>{/* All-Stars: Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Not Lottery */}
        <td>15.5%<br />9</td>{/* Impact Players: Lottery */}
        <td>15.5%<br />9</td>{/* Impact Players: Not Lottery */}
        <td>3.4%<br />2</td>{/* Role Players: Lottery */}
        <td>10.3%<br />6</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Vince Carter (5)<br />
          Dirk Nowitzki (9)<br />
          Paul Pierce (10)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Antawn Jamison (4)<br />
          Rashard Lewis (32)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Mike Bibby (2)<br />
          Raef LaFrentz (3)<br />
          Jason Williams (7)<br />
          Larry Hughes (8)<br />
          Bonzi Wells (11)<br />
          Matt Harpring (15)<br />
          Rasho Nesterovic (17)<br />
          Ricky Davis (21)<br />
          Al Harrington (25)<br />
          Nazr Mohammed (29)<br />
          Ruben Patterson (31)<br />
          Rafer Alston (39)<br />
          Cuttino Mobley (41)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Michael Olowokandi (1)*<br />
          Michael Doleac (12)<br />
          Pat Garrity (19)<br />
          Brian Skinner (22)<br />
          Tyronn Lue (23)<br />
          Sean Marks (44)<br />
          Greg Buckner (53)<br />
          Ryan Bowen (55)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft99 = () => {
  return (
    <div>
    <h1>1999 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 18 (31%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>29.3%<br />17</td>{/* 10+ seasons */}
        <td>10.3%<br />6</td>{/* 7-9 seasons */}
        <td>8.6%<br />5</td>{/* 5-6 seasons */}
        <td>17.2%<br />10</td>{/* 3-4 seasons */}
        <td>34.5%<br />20</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.7%</th>
        <th colSpan="2">9 All-Stars<br />15.5%</th>
        <th colSpan="2">15 Impact Players<br />25.9%</th>
        <th colSpan="2">3 Role Players<br />5.2%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>0%<br />0</td>{/* Hall of Famers: Lottery */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Not Lottery */}
        <td>10.3%<br />6</td>{/* All-Stars: Lottery */}
        <td>5.2%<br />3</td>{/* All-Stars: Not Lottery */}
        <td>17.2%<br />10</td>{/* Impact Players: Lottery */}
        <td>8.6%<br />5</td>{/* Impact Players: Not Lottery */}
        <td>0%<br />0</td>{/* Role Players: Lottery */}
        <td>5.2%<br />3</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Manu Ginobili (57)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Elton Brand (1)<br />
          Steve Francis (2)<br />
          Baron Davis (3)<br />
          Wally Szczerbiak (6)<br />
          Richard Hamilton (7)<br />
          Shawn Marion (9)<br />
          Ron Artest (16)<br />
          Andrei Kirilenko (24)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Lamar Odom (4)<br />
          Andre Miller (8)<br />
          Jason Terry (10)<br />
          Corey Maggette (13)<br />
          James Posey (18)<br />
          Kenny Thomas (22)<br />
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Jeff Foster (21)<br />
          Devean George (23)<br />
          Calvin Booth (35)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft00 = () => {
  return (
    <div>
    <h1>2000 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 15 (25.9%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>25.9%<br />15</td>{/* 10+ seasons */}
        <td>20.7%<br />12</td>{/* 7-9 seasons */}
        <td>10.3%<br />6</td>{/* 5-6 seasons */}
        <td>13.8%<br />8</td>{/* 3-4 seasons */}
        <td>29.3%<br />17</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">0 Hall of Famers<br />0%</th>
        <th colSpan="2">3 All-Stars<br />5.2%</th>
        <th colSpan="2">9 Impact Players<br />15.5%</th>
        <th colSpan="2">6 Role Players<br />10.3%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>0%<br />0</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Lottery */}
        <td>3.4%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>5.2%<br />3</td>{/* Impact Players: Lottery */}
        <td>10.3%<br />6</td>{/* Impact Players: Not Lottery */}
        <td>3.4%<br />2</td>{/* Role Players: Lottery */}
        <td>6.9%<br />4</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          N/A
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Kenyon Martin (1)<br />
          Jamaal Magloire (19)<br />
          Michael Redd (43)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Mike Miller (5)<br />
          Jamal Crawford (8)<br />
          Hedo Turkoglu (16)<br />
          Desmond Mason (17)<br />
          Quentin Richardson (18)<br />
          Morris Peterson (21)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Joel Pryzbilla (9)<br />
          Keyon Dooling (10)<br />
          DeShawn Stevenson (23)<br />
          Eddie House (37)<br />
          Eduardo Najera (38)<br />
          Brian Cardinal (44)    
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft01 = () => {
  return (
    <div>
    <h1>2001 NBA Draft</h1>

    <p>
      Number Players Drafted: 57<br />
      Contributors: 23 (40.3%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>42.1%<br />24</td>{/* 10+ seasons */}
        <td>3.5%<br />2</td>{/* 7-9 seasons */}
        <td>5.3%<br />3</td>{/* 5-6 seasons */}
        <td>15.8%<br />9</td>{/* 3-4 seasons */}
        <td>33.3%<br />19</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">3 Hall of Famers<br />5.3%</th>
        <th colSpan="2">8 All-Stars<br />14%</th>
        <th colSpan="2">14 Impact Players<br />24.6%</th>
        <th colSpan="2">9 Role Players<br />15.8%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.7%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>3.5%<br />2</td>{/* Hall of Famers: Not Lottery */}
        <td>5.3%<br />3</td>{/* All-Stars: Lottery */}
        <td>8.7%<br />5</td>{/* All-Stars: Not Lottery */}
        <td>10.5%<br />6</td>{/* Impact Players: Lottery */}
        <td>14%<br />8</td>{/* Impact Players: Not Lottery */}
        <td>5.3%<br />3</td>{/* Role Players: Lottery */}
        <td>10.5%<br />6</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Pau Gasol (3)<br />
          Zach Randolph (19)<br />
          Tony Parker (28)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Tyson Chandler (2)<br />
          Joe Johnson (10)<br />
          Gerald Wallace (25)<br />
          Gilbert Arenas (31)<br />
          Mehmet Okur (38)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Eddy Curry (4)<br />
          Jason Richardson (5)<br />
          Richard Jefferson (13)<br />
          Troy Murphy (14)<br />
          Samuel Dalembert (26)<br />
          Bobby Simmons (42)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Shane Battier (6)<br />
          DeSagana Diop (8)<br />
          Vladimir Radmanovic (12)<br />
          Jason Collins (18)<br />
          Brendan Haywood (20)<br />
          Jamaal Tinsley (27)<br />
          Brian Scalabrine (35)<br />
          Earl Watson (40)<br />
          Jaron Collins (53)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft02 = () => {
  return (
    <div>
    <h1>2002 NBA Draft</h1>

    <p>
      Number Players Drafted: 57<br />
      Contributors: 17 (29.8%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>26.3%<br />15</td>{/* 10+ seasons */}
        <td>14%<br />8</td>{/* 7-9 seasons */}
        <td>5.3%<br />3</td>{/* 5-6 seasons */}
        <td>17.5%<br />10</td>{/* 3-4 seasons */}
        <td>36.8%<br />21</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">2 Hall of Famers<br />3.5%</th>
        <th colSpan="2">4 All-Stars<br />7%</th>
        <th colSpan="2">13 Impact Players<br />22.8%</th>
        <th colSpan="2">4 Role Players<br />7%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.7%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>3.5%<br />2</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>5.3%<br />3</td>{/* All-Stars: Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Not Lottery */}
        <td>14%<br />8</td>{/* Impact Players: Lottery */}
        <td>8.8%<br />5</td>{/* Impact Players: Not Lottery */}
        <td>1.7%<br />1</td>{/* Role Players: Lottery */}
        <td>5.3%<br />3</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Yao Ming (1)*<br />
          Amar’e Stoudemire (9)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Caron Butler (10)<br />
          Carlos Boozer (35)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Jay Williams (2)*<br />
          Mike Dunleavy (3)<br />
          Drew Gooden (4)<br />
          Nene Hilario (7)<br />
          Chris Wilcox (8)<br />
          Tayshaun Prince (23)<br />
          John Salmons (26)<br />
          Matt Barnes (46)<br />
          Luis Scola (56)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Jared Jeffries (11)<br />
          Roger Mason (31)<br />
          Dan Gadzuric (34)<br />
          Rasual Butler (53)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft03 = () => {
  return (
    <div>
    <h1>2003 NBA Draft</h1>

    <p>
      Number Players Drafted: 58<br />
      Contributors: 27 (46.5%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>46.5%<br />27</td>{/* 10+ seasons */}
        <td>10.3%<br />6</td>{/* 7-9 seasons */}
        <td>0%<br />0</td>{/* 5-6 seasons */}
        <td>8.6%<br />5</td>{/* 3-4 seasons */}
        <td>34.5%<br />20</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">3 Hall of Famers<br />5.2%</th>
        <th colSpan="2">9 All-Stars<br />15.5%</th>
        <th colSpan="2">12 Impact Players<br />20.7%</th>
        <th colSpan="2">15 Role Players<br />25.9%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>3.4%<br />2</td>{/* Hall of Famers: Top 3 */}
        <td>5.2%<br />3</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>8.6%<br />5</td>{/* All-Stars: Lottery */}
        <td>6.9%<br />4</td>{/* All-Stars: Not Lottery */}
        <td>10.3%<br />6</td>{/* Impact Players: Lottery */}
        <td>10.3%<br />6</td>{/* Impact Players: Not Lottery */}
        <td>5.2%<br />3</td>{/* Role Players: Lottery */}
        <td>20.7%<br />12</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          LeBron James (1)<br />
          Carmelo Anthony (3)<br />
          Dwyane Wade (5)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Chris Bosh (4)<br />
          Chris Kaman (6)<br />
          David West (18)<br />
          Josh Howard (29)<br />
          Mo Williams (47)<br />
          Kyle Korver (51)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Kirk Hinrich (7)<br />
          Boris Diaw (21)<br />
          Leandro Barbosa (28)<br />
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Darko Milicic (2)<br />
          Michael Pietrus (11)<br />
          Nick Collison (12)<br />
          Luke Ridnour (14)<br />
          Sasha Pavlovic (19)<br />
          Dahntay Jones (20)<br />
          Travis Outlaw (23)<br />
          Kendrick Perkins (27)<br />
          Luke Walton (32)<br />
          Steve Blake (38)<br />
          Willie Green (41)<br />
          Zaza Pachulia (42)<br />
          Keith Bogans (43)<br />
          Matt Bonner (45)<br />
          James Jones (49)    
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft04 = () => {
  return (
    <div>
    <h1>2004 NBA Draft</h1>

    <p>
      Number Players Drafted: 59<br />
      Contributors: 22 (37.3%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>35.6%<br />21</td>{/* 10+ seasons */}
        <td>6.8%<br />4</td>{/* 7-9 seasons */}
        <td>0%<br />0</td>{/* 5-6 seasons */}
        <td>15.2%<br />9</td>{/* 3-4 seasons */}
        <td>42.4%<br />25</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">0 Hall of Famers<br />0%</th>
        <th colSpan="2">5 All-Stars<br />8.5%</th>
        <th colSpan="2">17 Impact Players<br />28.8%</th>
        <th colSpan="2">5 Role Players<br />8.5%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>0%<br />0</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>6.8%<br />4</td>{/* All-Stars: Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Not Lottery */}
        <td>15.2%<br />9</td>{/* Impact Players: Lottery */}
        <td>13.5%<br />8</td>{/* Impact Players: Not Lottery */}
        <td>1.7%<br />1</td>{/* Role Players: Lottery */}
        <td>6.8%<br />4</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          N/A
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Dwight Howard (1)<br />
          Devin Harris (5)<br />
          Luol Deng (7)<br />
          Andre Iguodala (9)<br />
          Jameer Nelson (20)<br />
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Emeka Okafor (2)<br />
          Ben Gordon (3)<br />
          Shaun Livingston (4)<br />
          Andris Biedrins (11)<br />
          Kris Humphries (14)<br />
          Al Jefferson (15)<br />
          Josh Smith (17)<br />
          JR Smith (18)<br />
          Tony Allen (25)<br />
          Kevin Martin (26)<br />
          Anderson Varejao (30)<br />
          Trevor Ariza (43)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Sebastian Telfair (13)<br />
          Dorell Wright (19)<br />
          Sasha Vujacic (27)<br />
          Beno Udrih (28)<br />
          Royal Ivey (37)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft05 = () => {
  return (
    <div>
    <h1>2005 NBA Draft</h1>

    <p>
      Number Players Drafted: 60<br />
      Contributors: 24 (40%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>40%<br />24</td>{/* 10+ seasons */}
        <td>10%<br />6</td>{/* 7-9 seasons */}
        <td>10%<br />6</td>{/* 5-6 seasons */}
        <td>8.3%<br />5</td>{/* 3-4 seasons */}
        <td>31.7%<br />19</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">1 Hall of Famers<br />1.7%</th>
        <th colSpan="2">5 All-Stars<br />8.3%</th>
        <th colSpan="2">14 Impact Players<br />23.3%</th>
        <th colSpan="2">10 Role Players<br />16.7%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>5%<br />3</td>{/* All-Stars: Lottery */}
        <td>3.3%<br />2</td>{/* All-Stars: Not Lottery */}
        <td>10%<br />6</td>{/* Impact Players: Lottery */}
        <td>13.3%<br />8</td>{/* Impact Players: Not Lottery */}
        <td>3.3%<br />2</td>{/* Role Players: Lottery */}
        <td>13.3%<br />8</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Chris Paul (4)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Deron Williams (3)<br />
          Andrew Bynum (10)<br />
          Danny Granger (17)<br />
          David Lee (30)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Andrew Bogut (1)<br />
          Raymond Felton (5)<br />
          Charlie Villanueva (7)<br />
          Nate Robinson (21)<br />
          Jarrett Jack (22)<br />
          Ersan Ilyasova (36)<br />
          Monta Ellis (40)<br />
          Louis Williams (45)<br />
          Marcin Gortat (57)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Martell Webster (6)<br />
          Channing Frye (8)<br />
          Gerald Green (18)<br />
          Francisco Garcia (23)<br />
          Jason Maxiell (26)<br />
          Ian Mahinmi (28)<br />
          Brandon Bass (33)<br />
          CJ Miles (34)<br />
          Ronny Turiaf (37)<br />
          Amir Johnson (56)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft06 = () => {
  return (
    <div>
    <h1>2006 NBA Draft</h1>

    <p>
      Number Players Drafted: 60<br />
      Contributors: 13 (21.7%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>20%<br />12</td>{/* 10+ seasons */}
        <td>11.7%<br />7</td>{/* 7-9 seasons */}
        <td>13.3%<br />8</td>{/* 5-6 seasons */}
        <td>21.7%<br />13</td>{/* 3-4 seasons */}
        <td>33.3%<br />20</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">0 Hall of Famers<br />0%</th>
        <th colSpan="2">4 All-Stars<br />6.7%</th>
        <th colSpan="2">8 Impact Players<br />13.3%</th>
        <th colSpan="2">5 Role Players<br />8.3%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>0%<br />0</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Lottery */}
        <td>5%<br />3</td>{/* All-Stars: Not Lottery */}
        <td>8.3%<br />5</td>{/* Impact Players: Lottery */}
        <td>5%<br />3</td>{/* Impact Players: Not Lottery */}
        <td>3.3%<br />2</td>{/* Role Players: Lottery */}
        <td>5%<br />3</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          N/A
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          LaMarcus Aldridge (2)<br />
          Rajon Rondo (21)<br />
          Kyle Lowry (24)<br />
          Paul Millsap (47)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Andrea Bargnani (1)<br />
          Brandon Roy (6)*<br />
          Rudy Gay (8)<br />
          JJ Redick (11)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Randy Foye (7)<br />
          Thabo Sefolosha (13)<br />
          Jordan Farmar (26)<br />
          Steve Novak (32)<br />
          Ryan Hollins (50)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft07 = () => {
  return (
    <div>
    <h1>2007 NBA Draft</h1>

    <p>
      Number Players Drafted: 60<br />
      Contributors: 21 (35%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>33.3%<br />20</td>{/* 10+ seasons */}
        <td>6.7%<br />4</td>{/* 7-9 seasons */}
        <td>6.7%<br />4</td>{/* 5-6 seasons */}
        <td>13.3%<br />8</td>{/* 3-4 seasons */}
        <td>40%<br />24</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">2 Hall of Famers<br />3.3%</th>
        <th colSpan="2">4 All-Stars<br />6.7%</th>
        <th colSpan="2">10 Impact Players<br />16.7%</th>
        <th colSpan="2">11 Role Players<br />18.3%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>1.7%<br />1</td>{/* Hall of Famers: Top 3 */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Lottery */}
        <td>1.7%<br />1</td>{/* Hall of Famers: Not Lottery */}
        <td>5%<br />3</td>{/* All-Stars: Lottery */}
        <td>1.7%<br />1</td>{/* All-Stars: Not Lottery */}
        <td>10%<br />6</td>{/* Impact Players: Lottery */}
        <td>6.7%<br />4</td>{/* Impact Players: Not Lottery */}
        <td>5%<br />3</td>{/* Role Players: Lottery */}
        <td>13.3%<br />8</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Kevin Durant (2)<br />
          Marc Gasol (48)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Al Horford (3)<br />
          Joakim Noah (9)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Mike Conley (4)<br />
          Spencer Hawes (10)<br />
          Thaddeus Young (12)<br />
          Rodney Stuckey (15)<br />
          Nick Young (16)<br />
          Arron Afflalo (27)
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          Jeff Green (5)<br />
          Corey Brewer (7)<br />
          Brandan Wright (8)<br />
          Marco Belinelli (18)<br />
          Jason Smith (20)<br />
          Jared Dudley (22)<br />
          Wilson Chandler (23)<br />
          Aaron Brooks (26)<br />
          Tiago Splitter (28)*<br />
          Josh McRoberts (37)<br />
          Ramon Sessions (56)
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Draft08 = () => {
  return (
    <div>
    <h1>2008 NBA Draft</h1>

    <p>
      Number Players Drafted: 60<br />
      Contributors: 25 (41.7%)
    </p>

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="5">Played Seasons</th>
      </tr>
      <tr>
        <th>10+</th>
        <th>7-9</th>
        <th>5-6</th>
        <th>3-4</th>
        <th>&lt; 2</th>
      </tr>
      <tr>
        <td>30%<br />18</td>{/* 10+ seasons */}
        <td>20%<br />12</td>{/* 7-9 seasons */}
        <td>8.3%<br />5</td>{/* 5-6 seasons */}
        <td>8.3%<br />5</td>{/* 3-4 seasons */}
        <td>33.3%<br />20</td>{/* >2 seasons */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="stats" border="1">
      <tbody>
      <tr>
        <th colSpan="3">2 Hall of Famers<br />3.3%</th>
        <th colSpan="2">7 All-Stars<br />11.7%</th>
        <th colSpan="2">19 Impact Players<br />31.7%</th>
        <th colSpan="2">6 Role Players<br />10%</th>
      </tr>
      <tr>
        <th>in Top 3</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
        <th>Lottery</th>
        <th>Not Lottery</th>
      </tr>
      <tr>
        <td>0%<br />0</td>{/* Hall of Famers: Top 3 */}
        <td>3.3%<br />2</td>{/* Hall of Famers: Lottery */}
        <td>0%<br />0</td>{/* Hall of Famers: Not Lottery */}
        <td>6.7%<br />4</td>{/* All-Stars: Lottery */}
        <td>5%<br />3</td>{/* All-Stars: Not Lottery */}
        <td>13.3%<br />8</td>{/* Impact Players: Lottery */}
        <td>18.3%<br />11</td>{/* Impact Players: Not Lottery */}
        <td>3.3%<br />2</td>{/* Role Players: Lottery */}
        <td>6.7%<br />4</td>{/* Role Players: Not Lottery */}
      </tr>
      </tbody>
    </table>

    <br />

    <table className="player-list">
      <tbody>
      <tr>
        <td>Hall of Famers</td>
        <td>
          Russell Westbrook (4)<br />
          Kevin Love (5)
        </td>
      </tr>
      <tr>
        <td>All-Stars</td>
        <td>
          Derrick Rose (1)*<br />
          Brook Lopez (10)<br />
          Roy Hibbert (17)*<br />
          DeAndre Jordan (35)<br />
          Goran Dragic (45)
        </td>
      </tr>
      <tr>
        <td>Impact Players</td>
        <td>
          Michael Beasley (2)<br />
          OJ Mayo (3)*<br />
          Danilo Gallinari (6)*<br />
          Eric Gordon (7)<br />
          Robin Lopez (15)<br />
          JaVale McGee (18)<br />
          Ryan Anderson (21)<br />
          Courtney Lee (22)<br />
          Serge Ibaka (24)*<br />
          Nicolas Batum (25)<br />
          George Hill (26)<br />
          Omer Asik (36)*
        </td>
      </tr>
      <tr>
        <td>Role Players</td>
        <td>
          DJ Augustin (9)<br />
          Jerryd Bayless (11)<br />
          Marreese Speights (16)<br />
          Kosta Koufos (23)<br />
          Mario Chalmers (34)*<br />
          Luc Mbah a Moute (37)        
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Overview</Link> | 
            <Link to='/1990-nba-draft'>1990</Link> | 
            <Link to='/1991-nba-draft'>1991</Link> |
            <Link to='/1992-nba-draft'>1992</Link> |
            <Link to='/1993-nba-draft'>1993</Link> |
            <Link to='/1994-nba-draft'>1994</Link> |
            <Link to='/1995-nba-draft'>1995</Link> |
            <Link to='/1996-nba-draft'>1996</Link> |
            <Link to='/1997-nba-draft'>1997</Link> |
            <Link to='/1998-nba-draft'>1998</Link> |
            <Link to='/1999-nba-draft'>1999</Link> |
            <Link to='/2000-nba-draft'>2000</Link> |
            <Link to='/2001-nba-draft'>2001</Link> |
            <Link to='/2002-nba-draft'>2002</Link> |
            <Link to='/2003-nba-draft'>2003</Link> |
            <Link to='/2004-nba-draft'>2004</Link> |
            <Link to='/2005-nba-draft'>2005</Link> |
            <Link to='/2006-nba-draft'>2006</Link> |
            <Link to='/2007-nba-draft'>2007</Link> |
            <Link to='/2008-nba-draft'>2008</Link>

          </nav>

          <Route exact path='/' component={Overview} />
          <Route path='/1990-nba-draft' component={Draft90} />
          <Route path='/1991-nba-draft' component={Draft91} />
          <Route path='/1992-nba-draft' component={Draft92} />
          <Route path='/1993-nba-draft' component={Draft93} />
          <Route path='/1994-nba-draft' component={Draft94} />
          <Route path='/1995-nba-draft' component={Draft95} />
          <Route path='/1996-nba-draft' component={Draft96} />
          <Route path='/1997-nba-draft' component={Draft97} />
          <Route path='/1998-nba-draft' component={Draft98} />
          <Route path='/1999-nba-draft' component={Draft99} />
          <Route path='/2000-nba-draft' component={Draft00} />
          <Route path='/2001-nba-draft' component={Draft01} />
          <Route path='/2002-nba-draft' component={Draft02} />
          <Route path='/2003-nba-draft' component={Draft03} />
          <Route path='/2004-nba-draft' component={Draft04} />
          <Route path='/2005-nba-draft' component={Draft05} />
          <Route path='/2006-nba-draft' component={Draft06} />
          <Route path='/2007-nba-draft' component={Draft07} />
          <Route path='/2008-nba-draft' component={Draft08} />
        </div>
      </Router>
    );
  }
}

export default App;
