import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import posterListData from '../assets/data';
import OverflowTitle from '../components/OverflowTitle/OverflowTitle';
import styles from './App.styles';

const App = () => {
  const [data] = useState(posterListData);

  return (
    <SafeAreaView style={styles.container}>
      <OverflowTitle data={data} />
    </SafeAreaView>
  );
};

export default App;
