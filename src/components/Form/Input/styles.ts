import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  active: boolean;
}

export const Container = styled(TextInput) <Props>`
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.title};

  height: ${RFValue(56)}px;
  width: 100%;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  border-radius: 5px;

  margin-bottom: ${RFValue(8)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  ${({ active, theme }) =>
    active &&
    css`
      border-color: ${theme.colors.attention};
      border-width: 3px;
    `};
`;
