import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(19)}px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  padding-top: ${RFValue(24)}px;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  flex: 1;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsSameRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
`;
