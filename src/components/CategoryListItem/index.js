import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Paw from '../../../assets/imgs/paw.png';

function CategoryListItem() {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>CategoryItem</Text>
      <Image source={Paw} style={styles.categoryImg} />
    </View>
  );
}

export default CategoryListItem;

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
  },

  item: {
    // flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 15,
    padding: 15,
  },

  categoryImg: {
    width: 64,
    height: 64,
  },
});
