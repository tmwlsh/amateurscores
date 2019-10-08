import styled from 'styled-components';

export default function Fixtures() {
  return (
    <FixturesTag>
      <div className="fixture-row">
        <div className="col team team-one">Moortown</div>
        <div className="col date-score">64 - 10</div>
        <div className="col team team-two">Wharfdale</div>
      </div>
      <div className="fixture-row">
        <div className="col team team-one">Bradford</div>
        <div className="col date-score">45 - 12</div>
        <div className="col team team-two">Leeds</div>
      </div>
      <div className="fixture-row">
        <div className="col team team-one">Bradford</div>
        <div className="col date-score">45 - 12</div>
        <div className="col team team-two">Leeds</div>
      </div>
    </FixturesTag>
  );
}

const FixturesTag = styled.div`
  display: block;
  width: 100%;
  div.fixture-row {
    padding: 10px 0;
    display: flex;
    width: 100%;
    div.col {
      text-align: center;
      &.team {
        width: 40%;
      }
      &.date-score {
        width: 20%;
      }
    }
  }
`;