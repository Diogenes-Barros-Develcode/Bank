import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {RFValue} from 'react-native-responsive-fontsize';

interface AmountProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  padding: 17px 24px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: center;
`;

export const Amount = styled.Text<AmountProps>`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'positive' ? theme.colors.success : theme.colors.attention};
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const IconTravel = styled(Entypo)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  margin-left: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(17)}px;
`;

export const Date = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(17)}px;
`;
