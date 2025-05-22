import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

const categoryImages: Record<string, any> = {
  beauty: require('@/assets/images/category-images/beauty.png'),
  fragrances: require('@/assets/images/category-images/fragrances.png'),
  furniture: require('@/assets/images/category-images/furniture.png'),
  groceries: require('@/assets/images/category-images/groceries.png'),
  'home-decoration': require('@/assets/images/category-images/home-decoration.png'),
  'kitchen-accessories': require('@/assets/images/category-images/kitchen-accessories.png'),
  'mens-watches': require('@/assets/images/category-images/mens-watches.png'),
  smartphones: require('@/assets/images/category-images/smartphones.png'),
  'sports-accessories': require('@/assets/images/category-images/sports-accessories.png'),
};

type Props = {
  category: string;
  style?: StyleProp<ImageStyle>;
};

export function CategoryImage({ category, style }: Props) {
  const source = categoryImages[category];

  if (!source) return null;

  return <Image source={source} style={[{ width: 100, height: 100 }, style]} />;
}
