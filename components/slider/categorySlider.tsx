import { categorySliderProps } from '@/types'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import CategoryCard from '../category/categoryCard'
import SectionHeading from '../heading/sectionHeading'

export default function CategorySlider({ isHeadingAvailable, sectionTitle, sectionButtonLink, sectionButtonLabel, isLoading, sliderData, bottomRoundedItem, categoryPageItem, topBannerItem }: categorySliderProps) {
    return (
        <View>
            {isHeadingAvailable && <SectionHeading title={sectionTitle} button_link={sectionButtonLink} button_label={sectionButtonLabel} />}
            {isLoading ? <Text>Loading...</Text> : <FlatList showsHorizontalScrollIndicator={false} className="px-4 pt-2 pb-6" horizontal={true} data={sliderData} keyExtractor={item => item.slug} renderItem={({ item }) => (
                <CategoryCard item={item} bottomRoundedItem={bottomRoundedItem} categoryPageItem={categoryPageItem} topBannerItem={topBannerItem} />
            )} />}
        </View>
    )
}