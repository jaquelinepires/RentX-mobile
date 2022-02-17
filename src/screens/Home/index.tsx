import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent
} from './styles';


export function Home(){
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
   </Container>
  );
}