import {
  Image,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DefaultText from '../DefaultText';

const ProductItem = ({
  title,
  price,
  image,
  onSelect,
  children,
  onAddToCart,
}) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <TouchableComp onPress={onSelect} useForeground>
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.details}>
          <DefaultText style={styles.title} bold>
            {title}
          </DefaultText>
          <DefaultText style={styles.price}>${price.toFixed(2)}</DefaultText>
        </View>

        <View style={styles.buttonsContainer}>{children}</View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '17%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    // height: '100%', // This seems necessary to avoid price cutting it off for some odd reason
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 25,
  },
});

export default ProductItem;
