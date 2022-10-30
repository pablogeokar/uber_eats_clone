import { StyleSheet, Text, View, Image } from 'react-native';

interface RestaurantItemProps {
  restaurant: {
    name: string
    deliveryFee: number
    rating: number
    minDeliveryTime: number
    maxDeliveryTime: number
    image: string
  }
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <View style={styles.restaurantContainer}>

      <Image
        source={{ uri: restaurant.image ? restaurant.image : 'https://fakeimg.pl/300/' }}
        style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} {restaurant.minDeliveryTime} &#8226; {restaurant.maxDeliveryTime} minutes</Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>

    </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5
  },
  subtitle: {
    color: 'grey'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
});
