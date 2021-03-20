import * as React from "react";
import styles from "./styles";
import categories from "../../assets/data/categories";
import { View } from "../../components/Themed";

import HomeCategory from "../../components/HomeCategory/index";
import { FlatList } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*Lista de Categorias */}
      {/*rederizar a fistCategory*/}
      {/* renderizar todos os items da lista categories.items */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
