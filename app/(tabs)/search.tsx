import CommonHeader from '@/components/header/commonHeader';
import Search from '@/components/search/search';
import { CategoryImage } from '@/constants/categoryImage';
import { useAppSelector } from '@/store/hooks';
import { Category } from '@/types';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SearchPage() {
  const router = useRouter()
  const { allCategory } = useAppSelector(state => state.category);

  const [listCategory, setListCategory] = useState<Category[]>([]);

  useEffect(() => {
    if (!allCategory || !Array.isArray(allCategory)) return;
    const excludedSlugs = ['mens-shirts', 'mens-shoes', 'mobile-accessories', 'motorcycle', 'skin-care', 'smartphones', 'sunglasses', 'tablets', 'tops', 'vehicle', 'womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches', 'laptops'];
    const filteredCategories = allCategory.filter(cat => !excludedSlugs.includes(cat.slug));
    setListCategory(filteredCategories);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-white'>
        <CommonHeader title='Search' />
        <View className='px-4 pt-6 mb-4'>
          <Search />
        </View>
        <View>
          <View className='px-4 mt-10 mb-2'>
            <Text className={`font-JostSemiBold text-mediumTitle capitalize text-black text-center`}>trending categories</Text>
          </View>
          <FlatList
            data={listCategory}
            numColumns={2}
            contentContainerStyle={{
              paddingTop: 20,
              paddingBottom: 300,
              gap: 25,
              justifyContent: 'center',
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}
            renderItem={({ item }) => {
              return (
                <Pressable className='w-[44%] text-center' onPress={() => router.replace(`/shop/${item.slug}`)}>
                  <View>
                    <View className='bg-gray flex items-center justify-center h-[124px] w-full rounded-2xl shadow-[0_6px_20px_text-shadow]'>
                      <CategoryImage category={item.slug} style={{ width: 100, height: 100 }} />
                    </View>
                    <View className='mt-4'>
                      <Text className='text-center font-JostSemiBold text-paragraph leading-[18px] text-black'>{item.name}</Text>
                    </View>
                  </View>
                </Pressable>
              )
            }}
            keyExtractor={item => item.slug}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

