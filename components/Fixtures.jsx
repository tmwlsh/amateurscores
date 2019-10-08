import styled from 'styled-components';

export default function Fixtures() {
  return (
    <FixturesContainer>
      <FixturesTag>
        <h2 className="date">5 Oct 2019</h2>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">64</span><span className="score">10</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">45</span><span className="score">12</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">45</span><span className="score">12</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">64</span><span className="score">10</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">45</span><span className="score">12</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">45</span><span className="score">12</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
      </FixturesTag>
      <FixturesTag>
        <h2 className="date">12 Oct 2019</h2>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
      </FixturesTag>
      <FixturesTag>
        <h2 className="date">19 Oct 2019</h2>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Moortown</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Wharfdale</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Bradford</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Leeds</div>
        </div>
        <div className="fixture-row">
          <div className="col team team-one">Wharfdale</div>
          <div className="col date-score"><span className="score">15:00</span></div>
          <div className="col team team-two">Bradford</div>
        </div>
      </FixturesTag>
    </FixturesContainer>
  );
}

const FixturesContainer = styled.div`
  display: block;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
`;

const FixturesTag = styled.div`
  width: 100%;
  margin-bottom: 50px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h2 {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.5;
  }
  div.fixture-row {
    padding: 5px 0;
    display: flex;
    width: 100%;
    align-items: center;
    div.col {
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      &.team {
        width: calc(50% - 40px);
        &.team-one {
          text-align: right;
        }
        &.team-two {
          text-align: left;
        }
      }
      &.date-score {
        width: 80px;
        span.score {
          display: inline-block;
          padding: 6px;
          background: #38C9AC;
          &:first-of-type {
            margin-right: 2px;
          }
        }
      }
    }
  }
`;