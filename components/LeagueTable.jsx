import styled from 'styled-components';

export default function LeagueTable() {
  return (
    <Table>
      <div className="table-row headings">
        <div>#</div>
        <div>Team</div>
        <div>P</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>PF</div>
        <div>PA</div>
        <div>+/-</div>
        <div>TB</div>
        <div>LB</div>
        <div>PTS</div>
      </div>
      <div className="table-row team-row">
        <div>01</div>
        <div>Moortown</div>
        <div>5</div>
        <div>5</div>
        <div>0</div>
        <div>0</div>
        <div>100</div>
        <div>10</div>
        <div>+90</div>
        <div>5</div>
        <div>0</div>
        <div>30</div>
      </div>
    </Table>
  );
}

const Table = styled.div`
  width: 100%;
  display: block;
  div.table-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;