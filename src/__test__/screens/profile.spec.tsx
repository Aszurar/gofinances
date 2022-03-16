import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../../screens/Profile';

describe('Profile', () => {
  it('should have name-textinput placeholder correct', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Sabor');

    expect(inputName).toBeTruthy();
    // Modo tradicional.
    //expect(inputName.props.placeholder).toBeTruthy();
  });

  it('should have the textinputs value filled/loaded correctly', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Nutella');
    expect(inputSurname.props.value).toEqual('3');
  });

  it('should render the title correctly', () => {
    const { getByTestId } = render(<Profile />);

    const title = getByTestId('text-title');

    expect(title.props.children).toContain('Sorvete');
  });
});
