import React from 'react'; 
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails(){
  return (
   <Container>
     <Header>
       <BackButton onPress={() => {}}
       />
     </Header>
     <CarImages>
        <ImageSlider imageUrl={['https://production.autoforce.com/uploads/version/profile_image/3188/comprar-tiptronic_87272c1ff1.png']}/>
     </CarImages>
   </Container>
  );
}