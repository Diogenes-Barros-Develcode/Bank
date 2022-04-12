import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`;

export const CategoryName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.title};
`;

export const Footer = styled.View`
  width: 100%;
  padding-bottom: ${RFValue(24)}px;
  padding-top: ${RFValue(24)}px;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
`;
