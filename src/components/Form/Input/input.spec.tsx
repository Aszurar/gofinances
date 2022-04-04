import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

describe('Input Component', () => {
  it('should have a specific border color when active property is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input
          testID="email-input"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          active={true}
        />
      </ThemeProvider>
    );

    const emailInput = getByTestId('email-input');

    expect(emailInput.props.style[0].borderColor).toEqual('#E83F5B');

    expect(emailInput.props.style[0].borderWidth).toEqual(3);
  });
});
