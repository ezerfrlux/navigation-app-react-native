import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function ProductScreen() {

  const {id} = useLocalSearchParams()


  const product = products.find((item) => item.id === id)
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