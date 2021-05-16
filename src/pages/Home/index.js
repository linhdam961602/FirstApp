import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CategoryListItem from '../../components/CategoryListItem';

import { CategoryList } from './mockData';

function HomePage() {
  return (
    <View style={styles.homePage}>
      <FlatList
        data={CategoryList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
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
  },
});

export default HomePage;
