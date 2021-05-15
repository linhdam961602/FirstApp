import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CategoryListItem from '../../components/CategoryListItem';

function HomePage() {
  return (
    <View style={styles.homePage}>
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HomePage;
