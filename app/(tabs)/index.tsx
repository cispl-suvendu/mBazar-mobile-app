import FragranceBanner from "@/components/banner/fragranceBanner";
import GroceriesBanner from "@/components/banner/groceriesBanner";
import HomeHeader from "@/components/header/homeHeader";
import Search from "@/components/search/search";
import CategorySlider from "@/components/slider/categorySlider";
import ProductHorizontalSlider from "@/components/slider/productHorizontalSlider";
import { images } from "@/constants/images";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCategory } from "@/store/slices/categorySlice";
import { fetchProducts } from "@/store/slices/productSlice";
import { useEffect, useMemo } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const dispatch = useAppDispatch();
  const { allCategory, loading: isCatLoading } = useAppSelector(state => state.category)
  useEffect(() => {
    if (allCategory.length === 0) {
      dispatch(fetchCategory())
    }
  }, [allCategory.length, dispatch])

  const { allProducts, loading: isProductLoading } = useAppSelector(state => state.products)
  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts({ skip: 0, limit: 15 }))
    }
  }, [])

  const featuredProducts = useMemo(
    () => allProducts.slice(0, 15),
    [allProducts]
  );

  const topDeals = useMemo(
    () => [...allProducts].sort(
      (a, b) => b.discountPercentage - a.discountPercentage
    ).slice(0, 15),
    [allProducts]
  );

  const sortedByStock = useMemo(
    () => [...allProducts].sort((a, b) => b.stock - a.stock).slice(0, 15),
    [allProducts]
  );

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView className="bg-white">
          <ScrollView>
            <ImageBackground source={images.homeHeaderBg} resizeMode="cover" className="w-full bg-cover pb-28">
              <HomeHeader />
              <View className="p-4">
                <Search />
              </View>
              <View className="pb-6">
                <CategorySlider isHeadingAvailable={false} isLoading={isCatLoading} sliderData={allCategory} />
              </View>
            </ImageBackground>
            <View className="-mt-32">
              <ProductHorizontalSlider sectionTitle="featured products" sectionButtonLabel="See All" sectionButtonLink="/shop/shop" isLoading={isProductLoading} sliderData={featuredProducts} sectionHeadingIsWhite={true} />
            </View>
            <View>
              <ProductHorizontalSlider sectionTitle="Top Deals For You" sectionButtonLabel="See All" sectionButtonLink="/shop/shop" isLoading={isProductLoading} sliderData={topDeals} isTopDeals={true} />
            </View>
            <View>
              <GroceriesBanner />
            </View>
            <View className="mt-8">
              <ProductHorizontalSlider sectionTitle="recently bought" sectionButtonLabel="See All" sectionButtonLink="/shop/shop" isLoading={isProductLoading} sliderData={sortedByStock} />
            </View>
            <View>
              <FragranceBanner />
            </View>
            <View className="py-6">
              <CategorySlider isHeadingAvailable={true} sectionTitle="Products You May Love" sectionButtonLabel="See All" sectionButtonLink="/shop/shop" isLoading={isCatLoading} sliderData={allCategory} bottomRoundedItem={true} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
