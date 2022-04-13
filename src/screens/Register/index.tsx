import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm} from 'react-hook-form';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Forms/Button';
import {CategorySelectButton} from '../../components/Forms/CategorySelectButton';
import {InputForm} from '../../components/Forms/InputForm';
import {TransactionsTypeButton} from '../../components/Forms/TransactionsTypeButton';
import {CategorySelect} from '../CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsSameRow,
} from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  amount: Yup.number()
    .typeError('Informe um valor numérico.')
    .positive('O valor não pode ser negativo.')
    .required(),
});

export function Register() {
  const [buttomType, setButtomType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dataKey = '@seulbank:trasactions';

  function handleButtonType(type: 'positive' | 'negative') {
    setButtomType(type);
  }

  function handleOpenCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: Partial<FormData>) {
    if (!TransactionsTypeButton) {
      return Alert.alert('Selecione o tipo de transação.');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria.');
    }

    const newTransactions = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: TransactionsTypeButton,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransactions];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setButtomType('');
      setCategory({key: 'category', name: 'Category'});
      reset();
      navigation.navigate('Listing');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro no Sistema.');
    }
  }

  async function removeall() {
    await AsyncStorage.removeItem(dataKey);
  }
  removeall();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Register</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              placeholder="Name"
              control={control}
              name="name"
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              placeholder="Price"
              control={control}
              name="amount"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsSameRow>
              <TransactionsTypeButton
                type="up"
                title="Incomce"
                onPress={() => handleButtonType('positive')}
                buttomActivation={buttomType === 'positive'}
              />
              <TransactionsTypeButton
                type="down"
                title="Outcomce"
                onPress={() => handleButtonType('negative')}
                buttomActivation={buttomType === 'negative'}
              />
            </TransactionsSameRow>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenCategoryModal}
            />
          </Fields>
          <Button title="Send" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
