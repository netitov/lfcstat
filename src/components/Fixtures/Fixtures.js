import React from 'react';
import FixturesCard from '../FixturesCard/FixturesCard';
import { fixturesFilter } from '../../utils/constants';
import Switcher from '../Switcher/Switcher';

function Fixtures(props) {
  return (
    <div className="fixtures-wrapper">
      <Switcher
        handleSwitch={props.handleSwitch}
        btns={fixturesFilter}
        activeBtn={props.activeBtn}
      />
      <ul className="fixtures">
        {props.events.map((i) => {
          return (
            <FixturesCard
              homeTeamName={i.homeTeamName}
              homeTeamLogo={i.homeTeamLogo}
              startAt={i.startAt}
              awayTeamName={i.awayTeamName}
              awayTeamLogo={i.awayTeamLogo}
              challenge={i.challenge}
              homeScore={i.homeScore}
              awayScore={i.awayScore}
              key={i._id}
              status={i.status}
            />
          )
        })}
      </ul>

    </div>
  )
}

export default Fixtures;
