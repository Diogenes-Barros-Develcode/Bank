import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Container, Header, Title} from './styles';
import {HistoryCard} from '../../components/HistoryCard';
import {useEffect} from 'react';

export function Resume() {
  async function loadData() {
    const dataKey = '@seulbank:trasactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    console.log(responseFormatted);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categories Resume</Title>
      </Header>

      <HistoryCard title="Compras" amount="R$ 150,00" color="red" />
    </Container>
  );
}
