import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import { key } from '../../config';

import { Container, Content } from './styles';

import ravenclaw from '../../assets/ravenclaw.jpg';
import hufflepuff from '../../assets/hufflepuff.jpg';
import gryffindor from '../../assets/gryffindor.jpg';
import slytherin from '../../assets/slytherin.jpg';

interface HouseNameParams {
  houseName: string;
}

interface House {
  name: string;
  founder: string;
  headOfHouse: string;
  values: string[];
}

const House: React.FC = () => {
  const [img, setImg] = useState(ravenclaw);
  const [houseInfo, setHouseInfo] = useState<House>({
    name: 'Ravenclaw',
    founder: 'Rowena Ravenclaw',
    headOfHouse: 'Fillius Flitwick',
    values: ['intelligence', 'creativity', 'learning', 'wit'],
  });
  const { params } = useRouteMatch<HouseNameParams>();

  useEffect(() => {
    const house = params.houseName;
    if (house === 'Ravenclaw') {
      setImg(ravenclaw);
    } else if (house === 'Hufflepuff') {
      setImg(hufflepuff);
    } else if (house === 'Gryffindor') {
      setImg(gryffindor);
    } else {
      setImg(slytherin);
    }
    axios
      .get<House[]>(`https://www.potterapi.com/v1/houses/?key=${key}`)
      .then(response => {
        response.data.map((apiHouse: House) => {
          if (apiHouse.name === house) {
            setHouseInfo(apiHouse);
          }
        });
      });
  }, [img, params.houseName]);

  return (
    <Container>
      <Content>
        <h1>{params.houseName}</h1>
        <h2>{houseInfo.founder}</h2>
        <p>{houseInfo.headOfHouse}</p>

        <div id="values">
          <p>Values</p>
          <ul>
            {houseInfo.values.map(data => (
              <li key={data}>{data}</li>
            ))}
          </ul>
        </div>
      </Content>
      <img src={img} alt={params.houseName} />
    </Container>
  );
};

export default House;
