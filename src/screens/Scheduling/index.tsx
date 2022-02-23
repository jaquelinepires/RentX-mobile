import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg'
import { StatusBar } from 'react-native'; 
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Footer,
} from './styles';

export function Scheduling(){
  const theme = useTheme(); 

  return (
   <Container>
     <Header>
       <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
       />
       <BackButton
        onPress={() => {}}
        color={theme.colors.shape}
        />

       <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer>
            <DateValue >22/02/2022</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÈ</DateTitle>
            <DateValueContainer>
            <DateValue >22/02/2022</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
     </Header>

     <Content>
      <Calendar />
     </Content>
     <Footer>
       <Button title="Confirmar"/>
     </Footer>
   </Container>
  );
}