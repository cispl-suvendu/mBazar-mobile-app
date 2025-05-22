import CartCard from '@/components/cart/cartCard';
import EmptyPage from '@/components/empty/emptyPage';
import CommonHeader from '@/components/header/commonHeader';
import SectionHeading from '@/components/heading/sectionHeading';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Cart() {
  const { cartItms } = useAppSelector(state => state.products)
  const renderHeader = () => {
    return (
      <View className='pb-4'>
        <SectionHeading title='Cart Items' button_link='' button_label='' />
      </View>
    )
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-col flex-1 bg-white'>
        <CommonHeader title='Cart' />
        <View className='px-4 py-8'>
          {cartItms.length > 0 ?
            <FlatList
              data={cartItms}
              ListHeaderComponent={renderHeader}
              renderItem={({ item }) => <CartCard item={item} />}
              keyExtractor={item => item.id.toString()}
            /> :
            <EmptyPage title='Your Cart is empty' description='Looks like you have not added anything to your cart. Go ahed and explore top categories.' linkLable='shop now' linkUrl='/(tabs)/shop/shop' icon="shopping_basket" />
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}