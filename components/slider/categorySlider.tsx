import { dummyProduct } from '@/constants/dummyData'
import { categorySliderProps } from '@/types'
import React from 'react'
import { FlatList, View } from 'react-native'
import CategoryCard from '../category/categoryCard'
import SectionHeading from '../heading/sectionHeading'
import Categoryskeleton from '../skeleton/skeletonCategory'

export default function CategorySlider({ isHeadingAvailable, sectionTitle, sectionButtonLink, sectionButtonLabel, isLoading, sliderData, bottomRoundedItem, categoryPageItem, topBannerItem }: categorySliderProps) {
    return (
        <View>
            {isHeadingAvailable && <SectionHeading title={sectionTitle} button_link={sectionButtonLink} button_label={sectionButtonLabel} />}
            {isLoading ? <FlatList showsHorizontalScrollIndicator={false} className="px-4 pt-2 pb-6" horizontal={true} data={dummyProduct} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (<Categoryskeleton />
            )} /> : <FlatList showsHorizontalScrollIndicator={false} className="px-4 pt-2 pb-6" horizontal={true} data={sliderData} keyExtractor={item => item.slug} renderItem={({ item }) => (
                <CategoryCard item={item} bottomRoundedItem={bottomRoundedItem} categoryPageItem={categoryPageItem} topBannerItem={topBannerItem} />
            )} />}
        </View>
    )
}