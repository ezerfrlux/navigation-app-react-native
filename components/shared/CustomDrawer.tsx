import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>

      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex items-center justify-center w-24 h-24 bg-white rounded-full'>
          <Text className='text-3xl text-primary font-work-black'>AS</Text>
        </View>

        {/* //? ITEMS */}


      </View>
        <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}