import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg'
import { StatusBar } from 'react-native'; 
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
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
import { useNavigation } from '@react-navigation/native';

export function Scheduling(){
  const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps)
  const [ markedDates, setMarkedDates ] = useState<MarkedDateProps>({} as MarkedDateProps)
  const theme = useTheme(); 

  const navigation = useNavigation<any>();
  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails')
  }
  function handleBack() {
    navigation.goBack()
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }
  return (
   <Container>
     <Header>
       <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
       />
       <BackButton
        onPress={handleBack}
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
      <Calendar
        markedDates={markedDates}
        onDayPress={handleChangeDate}
      />
     </Content>
     <Footer>
       <Button title="Confirmar" onPress={handleConfirmRental}/>
     </Footer>
   </Container>
  );
}