import React, { useState, useEffect } from 'react';
import ItemMenu from './ItemMenu.js';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import * as UserRepository from '../login/UserRepository';
import * as MenuApi from '../apis/MenuApi'

export default ({ navigation, route }) => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [menu, setMenu] = useState([])
  const [filteredList, setFilteredList] = useState(menu);

  const getMenu = async () => {
    const data = await MenuApi.getMenuHome(0)
    setMenu(data)
  }

  const findUser = async () => { 
    const user = await UserRepository.find(); 
    navigation.setOptions({ title: user.email });
  };

  useEffect(() => {
    findUser();
    getMenu()
  }, []);

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const list = filteredList 
        .reduce(
          (accumulator, currentValue) => accumulator.concat(currentValue.itens),
          []
        )
        .filter((m) => m.title.includes(query));

      setFilteredList(list);
    } else {
      setFilteredList([]);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.pesquisa}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#193073"
      />
      <View style={{ flex: 1 }}>
          <FlatList
            key="flatList01"
            style={styles.flatList}
            data={menu}
            renderItem={({item}) => (
              <ItemMenu
                title={item.title}
                icon={
                  item.typeImage === 'Ionicons' ? <Ionicons name={item.image} size={64} color="#193073" margin={20}/>
                  : item.typeImage === 'MaterialCommunityIcons' ? <MaterialCommunityIcons name={item.image} size={64} color="#193073" margin={20}/>
                  : item.typeImage === 'FontAwesome5' && <FontAwesome5 name={item.image} size={64} color="#193073" margin={20}/>
                }
                onPress={() => navigation.navigate('menu', { id: item.id } )}
              />
            )}
            keyExtractor={(item) => item.id}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    alignSelf: 'center',
  },
  pesquisa: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
