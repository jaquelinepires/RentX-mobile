import React from 'react'; 
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About


} from './styles';

export function CarDetails(){
  return (
   <Container>
     <Header>
       <BackButton onPress={() => {}}
       />
     </Header>
     <CarImages>
        <ImageSlider imageUrl={['https://production.autoforce.com/uploads/version/profile_image/3188/comprar-tiptronic_87272c1ff1.png']}
        />
     </CarImages>
     <Content>
       <Details>
         <Description>
           <Brand>Lamborghini</Brand>
           <Name>Hurracan</Name>
         </Description>
         <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
         </Rent>
       </Details>

       <About>
         Este é automovel desportivo. Surgiu do lendario
         touro de lider indultadosna praça Real Maestraza
         de Seville. è um belissimo carro para quem gosta de acelerar.
       </About>
     </Content>

   </Container>
  );
}