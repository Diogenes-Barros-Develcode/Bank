import React from 'react';
import {HighlightCard} from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGrettings,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Software Development',
      amount: 'R$ 1.000.000,00',
      category: {name: 'Sales', icon: 'dollar-sign'},
      date: '06/11/2031',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Ticket to Seoul',
      amount: 'R$ 2.000,00',
      category: {name: 'Travel', icon: 'map-pin'},
      date: '06/11/2023',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Seoul Appartment',
      amount: 'R$ 20.000,00',
      category: {name: 'Home', icon: 'home'},
      date: '06/11/2024',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://img.r7.com/images/cristiano-ronaldo-29032022181645259?dimensions=771x420',
              }}
            />
            <User>
              <UserGrettings>Olá,</UserGrettings>
              <UserName>Diógenes</UserName>
            </User>
          </UserInfo>
          <Icon name="log-out" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Income"
          amount="R$ 1.000.000,00"
          lastTransaction="Last Income in March 4th"
        />
        <HighlightCard
          type="down"
          title="Outcome"
          amount="R$ 500.000,00"
          lastTransaction="Last Outcome in March 25th"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 500.000,00"
          lastTransaction="April 5th to 20th"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listing</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
