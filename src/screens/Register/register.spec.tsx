import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Register } from '.';
import theme from '../../global/styles/theme';

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('Register Screen', () => {
  it('shoud be open category modal when user click on the category button', () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Provider
      }
    )

    const categoryOpenModalButton = getByTestId('category-button');
    console.log(categoryOpenModalButton);

    const categoryModal = getByTestId('category-modal');
    expect(categoryModal.props.visible).toBeFalsy();
  })
})