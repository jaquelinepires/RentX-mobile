import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car'
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home(){
  const navigation = useNavigation<any>()
    function handleCarDetails(){
      navigation.navigate('CarDetails');
    }   


  const CarData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/comprar-tiptronic_87272c1ff1.png'
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
    <CarList
      data={[1,2,3,4,5,6,7]}
      keyExtractor={item => String(item)}
      renderItem={({item}) => <Car 
      data={CarData} 
      onPress={handleCarDetails} />}
    />
   </Container>
  );
}