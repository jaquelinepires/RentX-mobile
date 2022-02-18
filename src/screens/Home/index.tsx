import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car'
import {
  Container,
  Header,
  TotalCars,
  HeaderContent
} from './styles';


export function Home(){
  const CardDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/comprar-tiptronic_87272c1ff1.png'
  }
  const CardDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://cdn.images.slfinpub.aws.porsche.cloud/489e4ab4-52e4-43ea-8b4f-afcc8e220ef3/960x720'
  }
  return (
   <Container>
     <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
     />
    <Header>
      <HeaderContent>
        <Logo 
          width={RFValue(100)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total 12 carros
        </TotalCars>
      </HeaderContent>
    </Header>

    <Car data={CardDataOne}/>
    <Car data={CardDataTwo}/>
   </Container>
  );
}