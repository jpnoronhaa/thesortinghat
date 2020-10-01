import React from 'react';

import { Container, Content } from './styles';

import ravenclaw from '../../assets/ravenclaw.jpg';
import hufflepuff from '../../assets/hufflepuff.jpg';
import gryffindor from '../../assets/gryffindor.jpg';
import slytherin from '../../assets/slytherin.jpg';

const House: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Ravenclaw</h1>
        <h2>Rowena Ravenclaw</h2>
        <p>Fillius Flitwick</p>

        <div id="values">
          <p>Values</p>
          <ul>
            <li>Intelligence</li>
            <li>Creativity</li>
            <li>Learning</li>
            <li>Wit</li>
          </ul>
        </div>
      </Content>
      <img src={ravenclaw} alt="Ravenclaw" />
    </Container>
  );
};

export default House;
