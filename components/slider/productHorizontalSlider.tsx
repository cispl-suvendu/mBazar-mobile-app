import { dummyProduct } from '@/constants/dummyData'
import { ProductHorizontalSliderProps } from '@/types'
import React from 'react'
import { FlatList, View } from 'react-native'
import SectionHeading from '../heading/sectionHeading'
import ProductCard from '../product/product'
import ProductSkeleton from '../skeleton/skeletonProduct'
import TopDealCard from '../topDeals/topDeals'

export default function ProductHorizontalSlider({ sectionTitle, sectionButtonLink, sectionButtonLabel, sectionHeadingIsWhite, isLoading, sliderData, isTopDeals }: ProductHorizontalSliderProps) {
    return (
        <View>
            <SectionHeading title={sectionTitle} button_link={sectionButtonLink} button_label={sectionButtonLabel} isWhite={sectionHeadingIsWhite} />
            {isLoading ? <FlatList className="w-full px-4 pt-4 pb-10" horizontal={true} showsHorizontalScrollIndicator={false} data={dummyProduct} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                <ProductSkeleton />
            )} /> : <FlatList className="w-full px-4 pt-4 pb-10" horizontal={true} showsHorizontalScrollIndicator={false} data={sliderData} keyExtractor={(_item, index) => index.toString()} renderItem={({ item }) => (
                isTopDeals ? <TopDealCard item={item} /> : <ProductCard item={item} />
            )} />}
        </View>
    )
}