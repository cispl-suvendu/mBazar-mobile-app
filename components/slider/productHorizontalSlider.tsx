import { ProductHorizontalSliderProps } from '@/types'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import SectionHeading from '../heading/sectionHeading'
import ProductCard from '../product/product'
import TopDealCard from '../topDeals/topDeals'

export default function ProductHorizontalSlider({ sectionTitle, sectionButtonLink, sectionButtonLabel, sectionHeadingIsWhite, isLoading, sliderData, isTopDeals }: ProductHorizontalSliderProps) {
    return (
        <View>
            <SectionHeading title={sectionTitle} button_link={sectionButtonLink} button_label={sectionButtonLabel} isWhite={sectionHeadingIsWhite} />
            {isLoading ? <Text>Loading...</Text> : <FlatList className="w-full px-4 pt-4 pb-10" horizontal={true} showsHorizontalScrollIndicator={false} data={sliderData} keyExtractor={item => item.title.toString()} renderItem={({ item }) => (
                isTopDeals ? <TopDealCard item={item} /> : <ProductCard item={item} />
            )} />}
        </View>
    )
}