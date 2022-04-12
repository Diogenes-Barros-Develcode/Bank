import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {FlatList, FlatListProps} from 'react-native';
import {DataListProps} from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  padding-top: ${RFValue(28)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: ${RFValue(17)}px;
`;

export const UserGrettings = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secundary};
  font-size: ${RFValue(30)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 24},
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(15)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  margin-top: ${RFPercentage(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: ${RFValue(16)}px;
  text-align: center;
`;

export const TransactionsList = styled(
  FlatList as new (
    Props: FlatListProps<DataListProps>,
  ) => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: 20},
})``;
