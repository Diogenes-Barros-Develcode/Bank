import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;

  padding-top: ${RFValue(18)}px;
  padding-bottom: ${RFValue(18)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;

  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({theme}) => theme.colors.text_dark};
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: ${RFValue(5)}px;

  margin-bottom: ${RFValue(8)}px;
`;
