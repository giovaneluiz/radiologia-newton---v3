import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default () => {

  const login = async () => { 
    alert('logou no google')
  }

  useEffect(() => {
    login()
  }, [])

  return (
    <View>
      <Text>Olá</Text>
    </View>
  );
};
