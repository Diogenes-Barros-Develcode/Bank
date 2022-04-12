import React from 'react';
import {Container, Title, Icon} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  buttomActivation: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export function TransactionsTypeButton({
  title,
  type,
  buttomActivation,
  ...rest
}: Props) {
  return (
    <Container {...rest} buttomActivation={buttomActivation} type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
