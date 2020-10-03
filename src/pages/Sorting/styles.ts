import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin-top: px;

  width: 100%;
  max-width: 700px;

  button + img {
    height: 500px;
    width: 341.064120055px;
    align-self: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    background: #ff9000;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 340px;
    height: 56px;
    color: #312e38;
    font-weight: 500;
    cursor: pointer;
  }

  a {
    margin-top: 0px;
    text-decoration: none;
  }
`;

export const NavLink = styled(Link)`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 340px;
  height: 56px;
  color: #312e38;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) center;
`;
