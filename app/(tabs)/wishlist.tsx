import EmptyPage from '@/components/empty/emptyPage';
import CommonHeader from '@/components/header/commonHeader';
import WishListCard from '@/components/wishlist/wishlistCard';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Wishlist() {
  const { wishListItem } = useAppSelector(state => state.products)
  return (
    <SafeAreaProvider>
      <SafeAreaView className='bg-white flex-col flex-1'>
        <View>
          <CommonHeader title='Wishlist' />
        </View>
        <View className='px-4 py-6'>
          {wishListItem.length > 0 ?
            <FlatList
              data={wishListItem}
              renderItem={({ item }) => <WishListCard item={item} />}
              keyExtractor={item => item.id.toString()}
            /> :
            <EmptyPage title='Your wihlist is empty' icon='favorite' description='Looks like you have not added anything to your wishlist. Go ahed and explore top categories.' linkLable='explore Categories' linkUrl='/(tabs)/shop/shop' />
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}