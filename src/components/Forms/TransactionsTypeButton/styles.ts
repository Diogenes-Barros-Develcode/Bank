import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

interface IconProps {
  type: 'up' | 'down';
}

interface ButtomProps {
  buttomActivation: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ButtomProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: ${({buttomActivation}) => (buttomActivation ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.text};
  border-radius: ${RFValue(5)}px;
  padding: 16px 30px;

  ${({buttomActivation, type}) =>
    buttomActivation &&
    type === 'up' &&
    css`
      background-color: ${({theme}) => theme.colors.success_light};
    `}

  ${({buttomActivation, type}) =>
    buttomActivation &&
    type === 'down' &&
    css`
      background-color: ${({theme}) => theme.colors.attention_light};
    `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({theme, type}) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;
