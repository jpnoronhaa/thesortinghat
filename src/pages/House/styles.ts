import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: revert;
  padding: revert;
  outline: revert; */
  /* box-sizing: border-box; */
  /* margin: 100px;
  padding: 50px; */
  img {
    margin-right: 250px;
    height: 900px;
  }
`;

export const Content = styled.div`
  height: 100%;
  /* justify-items: center;
  width: 400px; */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  margin-left: 250px;

  h1 {
    margin: 50px 0px 0px;
    font-size: 60px;
  }

  h2 {
    margin: 50px 0px 0px;
    font-size: 30px;
  }

  p {
    margin: 50px 0px 0px;
  }

  div {
    margin: 50px 0px 0px;

    p {
      margin: 50px 0px 0px;
    }
  }

  * {
    margin: revert;
    padding: revert;
    /* outline: revert; */
    margin-top: auto;
  }
`;
