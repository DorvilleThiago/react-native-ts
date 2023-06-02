import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default Home;
