import styled, {css} from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down' | 'total';
}

interface BackgroundColor {
  type: 'up' | 'down' | 'total';
}

interface TextProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<BackgroundColor>`
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secundary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding-top: ${RFValue(19)}px;
  padding-left: ${RFValue(23)}px;
  padding-right: ${RFValue(23)}px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TextProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(40)}px;
  ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `}
  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `}
  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TextProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: ${RFValue(38)}px;
`;

export const LastTransaction = styled.Text<TextProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;
