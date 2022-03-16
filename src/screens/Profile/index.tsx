import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function Profile() {
  return (
    <View>
      <Text testID="text-title">Sorvete</Text>

      <TextInput testID="input-name" placeholder="Sabor" autoCorrect={false} value="Nutella" />

      <TextInput testID="input-surname" placeholder="Quantidade" value="3" />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
