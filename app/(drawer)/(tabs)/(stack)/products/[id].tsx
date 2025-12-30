import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function ProductScreen() {

  const {id} = useLocalSearchParams()
  const navigation = useNavigation()
  const product = products.find((item) => item.id === id)

  useEffect(() => {
    navigation.setOptions({
      title:product?.title ?? "Producto"
    })
  },[product])

  if (!product) {
      return <Redirect href="/" />
  }

  return (
    <View className='px-5 mt-2'>
      <Text className='text-2xl font-work-black'>{product.title}</Text>
      <Text className=''>{product.description}</Text>
      <Text className='text-2xl font-work-black'>{product.price}</Text>
    </View>
  )
}