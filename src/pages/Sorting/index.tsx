import React, { useState } from 'react';
import axios from 'axios';

import { Container, Background, Content, NavLink } from './styles';

import title from '../../assets/title.png';
import ravenclaw from '../../assets/ravenclaw.jpg';
import hufflepuff from '../../assets/hufflepuff.jpg';
import gryffindor from '../../assets/gryffindor.jpg';
import slytherin from '../../assets/slytherin.jpg';

const Sorting: React.FC = () => {
  const [house, setHouse] = useState<string>('Ravenclaw');

  function selectHouse(): any {
    let img = ravenclaw;
    if (house === 'Ravenclaw') {
      img = ravenclaw;
    } else if (house === 'Hufflepuff') {
      img = hufflepuff;
    } else if (house === 'Gryffindor') {
      img = gryffindor;
    } else {
      img = slytherin;
    }

    return img;
  }

  return (
    <Container>
      <Content>
        <img src={title} alt="The Sorting Hat" />
        <button
          type="button"
          onClick={() => {
            axios
              .get<string>('https://www.potterapi.com/v1/sortingHat')
              .then(response => {
                setHouse(response.data);
              });
          }}
        >
          What house your going to be?
        </button>
        <img src={selectHouse()} alt={house} />
        <NavLink to={`/house/${house}`}>See more about your house!</NavLink>
        <a href="https://github.com/japanoronha">
          See more on my GitHub profile
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Sorting;
