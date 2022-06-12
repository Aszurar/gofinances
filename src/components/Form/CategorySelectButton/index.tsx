import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Category, Container, Icon } from './styles';

interface CategorySelectButtonProps extends RectButtonProps {
    text: string;
    onPress: () => void;
}

export function CategorySelectButton({ text, onPress, testID }: CategorySelectButtonProps) {
    return (
        <Container onPress={onPress} testID={testID}>
            <Category>{text}</Category>
            <Icon name="chevron-down" />
        </Container>
    )
}