import React from 'react'; 
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons'
import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){
  const theme = useTheme()

  
  const navigation = useNavigation<any>();
  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete')
  }
  return (
   <Container>
     <Header>
       <BackButton
        onPress={() => {}}
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

       <Accessories>
          <Accessory name="380Km/h" icon={speedSvg}/>
          <Accessory name="3.2s" icon={accelerationSvg}/>
          <Accessory name="800 HP" icon={forceSvg}/>
          <Accessory name="Gasolina" icon={gasolineSvg}/>
          <Accessory name="Auto" icon={exchangeSvg}/>
          <Accessory name="2 pessoas" icon={peopleSvg}/>
       </Accessories>
       <RentalPeriod>
         <CalendarIcon>
           <Feather
            name="calendar"
            size={RFValue(24)}
            color={theme.colors.shape}
           />
         </CalendarIcon>

         <DateInfo>
           <DateTitle>DE</DateTitle>
           <DateValue>15/01/2022</DateValue>
         </DateInfo>
         <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
           />
           
            <DateInfo>
           <DateTitle>DE</DateTitle>
           <DateValue>15/01/2022</DateValue>
         </DateInfo>
       </RentalPeriod>
       <RentalPrice>
         <RentalPriceLabel>TOTAL</RentalPriceLabel>
         <RentalPriceDetails>
           <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
           <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
         </RentalPriceDetails>
       </RentalPrice>
     </Content>

     <Footer>
        <Button 
         title='Alugar agora'
         color={theme.colors.success}
         onPress={handleConfirmRental}
         />
     </Footer>
   </Container>
  );
}