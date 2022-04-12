import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.secundary};
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
  align-items: center;
  padding-top: ${RFValue(18)}px;
  padding-bottom: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
`;
