import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '.';

describe('Input Component', () => {
  it('should have a specific border color when active property is true', () => {
    const { getByTestId } = render(
      <Input
        testID="email-input"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={false}
      />
    );

    const emailInput = getByTestId('email-input');

    expect(emailInput.props.style[0].borderColor).toEqual('#ddd');

    expect(emailInput.props.style[0].borderWidth).toEqual(1);
  });
});
