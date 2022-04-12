import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({theme}) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFValue(5)}px;
  padding-top: ${RFValue(18)}px;
  padding-bottom: ${RFValue(18)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
`;

export const Category = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`;
