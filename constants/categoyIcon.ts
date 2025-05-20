export function getCategoryIcon(category: string) {
    switch (category) {
        case 'beauty':
            return 'health_and_beauty';
        case 'fragrances':
            return 'fragrance';
        case 'furniture':
            return 'bed';
        case 'groceries':
            return 'grocery';
        case 'home-decoration':
            return 'wall_art';
        case 'kitchen-accessories':
            return 'soup_kitchen';
        case 'laptops':
            return 'laptop_mac';
        case 'mens-shirts':
            return 'apparel';
        case 'mens-shoes':
            return 'steps';
        case 'mens-watches':
            return 'watch';
        case 'mobile-accessories':
            return 'battery_0_bar';
        case 'motorcycle':
            return 'two_wheeler';
        case 'skin-care':
            return 'cruelty_free';
        case 'smartphones':
            return 'smartphone';
        case 'sports-accessories':
            return 'sports_baseball';
        case 'sunglasses':
            return 'eyeglasses';
        case 'tablets':
            return 'tablet_mac';
        case 'tops':
            return 'laundry';
        case 'vehicle':
            return 'directions_car';
        case 'womens-bags':
            return 'personal_bag';
        case 'womens-dresses':
            return 'girl';
        case 'womens-jewellery':
            return 'diamond';
        case 'womens-shoes':
            return 'podiatry';
        case 'womens-watches':
            return 'aod_watch';
        default:
            return false
    }
}