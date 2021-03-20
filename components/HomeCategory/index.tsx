import * as React from "react";
import styles from "./styles";
import categories from "../../assets/data/categories";
import { FlatList, Image } from "react-native";
import { Text } from "../../components/Themed";

const firstCategory = categories.items[0];

/*definimos uma props para rederizar um HomeCategory */
/*Trabalhando no javascript : so definimos uma props na HomeCategory
  exemplo: const HomeCategory = (props) 
  */
/*No typescript : definos uma props tambem , o tipo daquela props no caso 
  HomeCategoryProps e uma interface daquela daquela Props 
    */

/* Olhar a assets/data/categories.ts */
/*Movies : é um array de objetos */

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
      />
    </>
  );
};

export default HomeCategory;
