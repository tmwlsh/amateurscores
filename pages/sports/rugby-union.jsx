import styled from 'styled-components';
import Header from '../../components/Header';
import LeagueTable from '../../components/LeagueTable';
import Fixtures from '../../components/Fixtures';

export default function Sport() {
  return (
    <div>
      <Header />
      <ContainerTag>
        <Fixtures />
      </ContainerTag>
    </div>
  );
}

const ContainerTag = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;