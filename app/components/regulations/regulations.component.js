import angular from 'angular'
import regulationsTemplate from './regulations.template.html'
export default {
    template: regulationsTemplate,
    controller: function () {
      this.tournaments = [
        `Youth-Boys – boys born 1st of January 1990 or later;`,
        `Youth-Girls – girls born 1st of January 1990 or later;`,
        `Juniors-Boys – boys born 1st of January 1997 or later;`,
        `Juniors-Girls – girls born 1st of January 1997 or later;`,
        `Cadets-Boys – boys born 1st of January 2000 or later;`,
        `Cadets-Girls – girls born 1st of January 2000 or later;`,
        `Mini cadets-Boys – boys born 1st of January 2003 or later;`,
        `Mini cadets-Girls – players born 1st of January 2003 or later;`,
        `European Hopes-Boys – boys born 1st of January 2006 or later;`,
        `European Hopes-Girls – girls born 1st of January 2006 or later.`,
      ]

      const tournamentsList =  this.tournaments.map((tournament, index) => `${index + 1}. ${tournament} `).join(`\n\r`);

      this.regulations = [
        `Under the auspices of the European Draughts Confederation (EDC), Belarusian Draughts
Federation (BDF) will organize the 19th European Youth Championship. `,
`The tournament will take place in Vitebsk, Ice Palace, address: ul.Stroiteley, 23, from 1st to 9th of
August 2017. Arrival place is hotel «Vityaz», ul.P.Brovki, 21A. Arrival day is 31st of July, opening – on 1st
of August at 11.00 a.m., closing – on 9th of August afternoon. `,
`There will be 10 separate tournaments:
${tournamentsList}
In case if for some separate tournament will nominate less than 8 players and/or players from less than 5 federations, EDC has the right to cancel this separate tournament and inform in this case all national federations before June 20th.`,
`Only the members of the national federations affiliated to the FMJD can participate. The players
must have the citizenship of the Federation they represent or be members of this federation according to
FMJD rules. EDC has the right to invite some players from new countries (never been members of FMJD). 
`,
`There are 3 places for every national federation in each tournament. Additional places may be
given:
5.1. 1 additional place in each tournament may be given for the organizing federation (BDF);
5.2. 1 additional place in each tournament may be given for the sponsors (independently of national
federation membership of participant);
5.3. 1 additional place may be given for organizing federation (or for other federation at the suggestion
of organizing federation) in case of odd number of participants in some tournaments.  
`,
` Applications (only from national federations) should be sent by e-mail to EDC
(registration@europedraughts.org and y.lipnitsky@gmail.com ) before June 1st and contain the list of
players in order of tournaments with full name, surname, date of birth, also the name of the official
representative of national federation on the Championship. The 1st players in each tournament have to be
marked in this list. Organizing federation (BDF) also send application to EDC, marked separately basic and
additional players. In case of any problems the national federation should contact EDC directly`,
`Before the beginning of the Championship (at the July 31 evening) a preliminary meeting will be
held by the Main Referee who will expound the present regulations to players, directors and journalists. 
`,
` Depending on the Main Referee decision swiss or round robin tournaments will be played. In case
of unequal number of participants in some tournaments other tournaments’ systems can be used according
the Main Referee decision in consultation with EDC official representative. Main Referee has the right to
determine, that players from the same national federation have not to play between each other in a few last
rounds depending on tournaments system and number of participants. `,
`Time control 80’ + 1’ per move (Fisher system)`,
` Final places determine according FMJD rules applying to corresponding tournaments system.
Barrages should not be played. Only in case of all criteria of challengers for champion’s title will be an equal,
barrage should be played (2 games with the time control 5’ + 3” per move (Fisher system) and if champion
will not specified, then – games with time control 3’ + 2” per move till the first winning). Details will be
announced by the Main Referee after the consultations with EDC official representative. `,
` On 8th of August the European Youth Rapid Championship will be played. There is no limit to
number of player from one federation. European Youth Rapid Championship will be played with the time
control 15’ + 5” per move (Fisher system). Details will be announced by the Main Referee after the
consultations with EDC official representative. 
`,
` On 9th of August the European Youth Blitz Championship will be played. There is no limit to
number of player from one federation. European Youth Blitz Championship will be played with the time
control 5’ + 3” per move (Fisher system). Details will be announced by the Main Referee after the
consultations with EDC official representative. 
`,
`National teams’ classifications in the context of the Championship, Rapid and Blitz
Championships will be determined.
13.1. National teams (teams of the national federations) results determine on the basis of individual
results of players, who represent this national federation. Not more then 3 players’ results (according
applications given by national federations official representatives before the beginning of the Championship)
can be count.
13.2. 1st place give to the national team 70 points, 2nd place – 50 points, 3rd place – 40 points, 4th place –
30 points, 5th place – 20 points, 6th place – 10 points, 7th place – 9 points, 8th place – 8 points, 9th place – 7
points, 10th place – 6 points, 11th place – 5 points, 12th place – 4 points, 13th place – 3 points, 14th place – 2
points, 15th and so on until the last place –1 point.
13.3. If the number of points will be an equal, number of 1st places, than 2nd, 3rd and so on places
decide. 

`,
`In any other cases – FMJD rules decide. 
`,
` Prizes:
15.1. medals for the 3 first places in each tournament (including Rapid and Blitz Championships)
15.2. cups for the 3 first places in each tournament (including Rapid and Blitz Championships)
15.3. diploma for the 3 first places in each tournament (including Rapid and Blitz Championships)
15.4. cups for medallists in the National teams’ classifications (including Rapid and Blitz
Championships) 
`,
`Financial conditions 
16.1. Inscription fee 40 euro for the 1st player from federation in group and 10 euro for 2nd and 3rd other
players;
16.2. 10 euro for each player in Rapid and Blitz Championships.
16.3. Inscription fees have to be paid before the beginning of the Championship. There are two
possibilities to pay inscription fees. In case of bank transfer, money has to be transferred to the account of
the EDC in the period from 1 to 23 of July, 20171
. Otherwise, inscription fees have to be paid in cash not
later than July 31 (for participation in Rapid Championship - not later than August, 7; for participation in
Blitz Championship - not later than August, 8) and it have to be agreed in advance with EDC by e-mail:
viktoria@europedraughts.org
16.4. Organizers cover all hospitality costs for 1st players from each national federation in each
tournament. 2nd, 3rd and additional players, also accompanying persons pay for themselves. Full
accommodation during all Championship (including 3-time meals from 31st of July dinner till 9th of August
lunch) is 234 EUR per person (26 EUR per day). Accommodations have to be paid by bank transfer in the
period from 1 to 27 of July, 2017 2
 or in cash before opening ceremony. 
`,
`Accommodation will be in rooms for 2 or 3 persons in hotel «Vityaz», ul.P.Brovki, 21A and hotel
of football club «Vitebsk», ul.Liudnikova, 12. Accommodation is possible only in places, provided by
organizers. 
`,
`With all hospitality, transfer and visa questions please contact:
Belarus Draughts Federation,
tel.\\fax +375 17 3272258, e-mail: p.shatsov@gmail.com Skype: paveligr 
`


      ];
    }
  }

