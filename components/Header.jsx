import Link from 'next/link';
import styled from 'styled-components';
import NavLink from './NavLink';

export default function Header() {
  return (
    <div>
      <HeaderTag>
        <ContainerTag>
          <div>
            <h1>
              <Link href="/">
                <a>AmateurScores</a>
              </Link>
            </h1>
          </div>
        </ContainerTag>
      </HeaderTag>
      <HeaderTag>
        <ContainerTag>
          <nav className="sports">
            <ul>
              <li>
                <NavLink activeClassName='active' href="/sports/rugby-union">
                  <a>Rugby Union</a>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' href="/sports/rugby-league">
                  <a>Rugby League</a>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' href="/sports/football">
                  <a>Football</a>
                </NavLink>
              </li>
            </ul>
          </nav>
        </ContainerTag>
      </HeaderTag>
      <HeaderTag className="dark">
        <ContainerTag>
          <nav className="league">
            <ul>
              <li>
                <Link href="/">
                  <a>Fixtures</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Results</a>
                </Link>
              </li>
            </ul>
          </nav>
        </ContainerTag>
      </HeaderTag>
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

const HeaderTag = styled.div`
  background-color: #38c9ac;
  border-bottom: 1px solid #269b84;
  &.dark {
    border-bottom: none;
    background-color: #000000;
    nav ul li a {
      color: #ffffff;
    }
  }
  h1 {
    font-size: 18px;
    margin: 15px 0;
    a {
      text-decoration: none;
      color: #000000;
    }
  }
  nav {
    width: 100%;
    ul {
      margin: 0 0 0 -10px;
      padding: 0;
      list-style-type: none;
      display: flex;
      li {
        a {
          display: block;
          padding: 10px;
          font-size: 14px;
          text-decoration: none;
          color: #000000;
          &.active {
            font-weight: bolder;
          }
        }
      }
    }
  }
`;

