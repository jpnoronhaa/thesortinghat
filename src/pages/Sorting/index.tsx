import React from 'react';
import { Container, Background, Content } from './styles';

import title from '../../assets/title.png';
import ravenclaw from '../../assets/ravenclaw.jpg';
import hufflepuff from '../../assets/hufflepuff.jpg';
import gryffindor from '../../assets/gryffindor.jpg';
import slytherin from '../../assets/slytherin.jpg';

const Sorting: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={title} alt="The Sorting Hat" />
        <button type="button">What house your going to be?</button>
        <img src={ravenclaw} alt="Ravenclaw" />
        <button type="button">See more about your house!</button>
        <a href="https://github.com/japanoronha">
          See more on my GitHub profile
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Sorting;
