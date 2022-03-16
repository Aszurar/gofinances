import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  active?: boolean;
}

export function Input({ active = false, ...rest }: InputProps) {
  return <Container active={active} {...rest} />;
}
