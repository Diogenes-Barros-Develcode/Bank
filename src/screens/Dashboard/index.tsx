/* eslint-disable eslint-comments/no-unlimited-disable */
import React from 'react';
import {useState} from 'react';
import {HighlightCard} from '../../components/HighlightCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from 'styled-components';
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
  LoadContainer,
} from './styles';
import {useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

/* eslint-disable */
export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HightLightProps {
  amount: string;
  lastTransaction: string;
}
interface HightLightData {
  entries: HightLightProps;
  expensive: HightLightProps;
  total: HightLightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [trasactions, setTransactions] = useState<DataListProps[]>([]);
  const [HighLightData, setHighLightData] = useState<HightLightData>(
    {} as HightLightData,
  );

  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(transaction => transaction.type === type)
          .map(transaction => new Date(transaction.date).getTime()),
      ),
    );

    return `${lastTransaction.getDate()}th ${lastTransaction.toLocaleString(
      'en-US',
      {month: 'long'},
    )}`;
  }

  async function loadTransactions() {
    const dataKey = '@seulbank:trasactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setTransactions(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      'positive',
    );

    const lastTransactionEpensives = getLastTransactionDate(
      transactions,
      'negative',
    );

    const totalInterval = `01th to ${lastTransactionEpensives}`;

    const total = entriesTotal - expensiveTotal;
    setHighLightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Last Income in ${lastTransactionEntries}`,
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Last Outcome in ${lastTransactionEpensives}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size={'large'} />
        </LoadContainer>
      ) : (
        <>
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
              amount={HighLightData.entries.amount}
              lastTransaction={HighLightData.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Outcome"
              amount={HighLightData.expensive.amount}
              lastTransaction={HighLightData.expensive.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={HighLightData.total.amount}
              lastTransaction={HighLightData.total.lastTransaction}
            />
          </HighlightCards>
          <Transactions>
            <Title>Listing</Title>
            <TransactionsList
              data={trasactions}
              keyExtractor={item => item.id}
              renderItem={({item}) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
