import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './Card';
import ItemMenu from './ItemMenu';
import { getMenuHome } from '../apis/MenuApi'


export default ({ navigation, route }) => {
  const [previousMenu, setPreviousMenu] = useState([])
  const [menus, setMenus] = useState([])

  const getMenus = async () => {
    const dataPreviousMenu = await getMenuHome(route.params.id)
    setPreviousMenu(dataPreviousMenu)
    dataPreviousMenu.map(async (item) => {
      const res = await getMenuHome(item.id)
      res.map((menuItem) => {
        setMenus((prevLista) => [...prevLista, menuItem]) 
      })
    })
  };

  const atualizaMenu = async (item) => {
    const menuAtt = await getMenuHome(item)
    setMenus(menuAtt)
  }

  useEffect(() => {
    getMenus()
  }, [])

  return (
    <View style={styles.main}>
      <FlatList
        horizontal={true}
        data={previousMenu}
        renderItem={({ item }) => (
          <ItemMenu
            label={item.title}
            onPress={() => atualizaMenu(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.previousMenu}
      />
      <FlatList
        data={menus}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate('xray', { id: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.menuList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EBF7FD',
    padding: 10
  },

  previousMenu: {
    paddingTop: 20,
    paddingLeft: 10,
  },

  menuList: {
    marginTop: 20,
    marginBottom: 200,
  },
});
