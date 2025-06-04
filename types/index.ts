import { KeyboardTypeOptions } from 'react-native';
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    sku:string,
    quantity?:number
}
export interface Pagination {
    total: number;
    skip: number;
    limit: number;
}

export interface Category {
    slug: string;
    name: string;
    url: string
}

export interface Heading {
    title: string | undefined,
    button_label: string | undefined,
    button_link: any,
    isWhite?: boolean
}

export interface CategoryCardProps {
    item: Category,
    topBannerItem?: boolean,
    bottomRoundedItem?: boolean,
    categoryPageItem?: boolean
}

export interface CommonHeaderProps {
    title: string | undefined,
}

export interface ProductHorizontalSliderProps {
    sectionTitle: string,
    sectionButtonLink: any,
    sectionButtonLabel: string,
    sectionHeadingIsWhite?: boolean,
    isLoading: boolean,
    sliderData: Product[],
    isTopDeals?: boolean
}

export interface categorySliderProps {
    isHeadingAvailable: boolean;
    sectionTitle?: string,
    sectionButtonLink?: any,
    sectionButtonLabel?: string,
    isLoading?: boolean,
    sliderData?: Category[],
    bottomRoundedItem?: boolean,
    categoryPageItem?: boolean,
    topBannerItem?: boolean
}

export interface FetchProductsArgs {
    skip?: number;
    limit?: number;
    sortBy?: string;
    order?: string;
}

export interface SortProductsArgs {
    sortBy: number;
    order: number;
}

export interface fetchProductsByCatArgs {
    catName: string
}

export interface fetchSingleProductArgs {
    id: string | number
}

export interface ProductsState {
    allProducts: Product[];
    pagination: Pagination;
    loading: boolean;
    hasMore: boolean;
    productsByCategory: Product[],
    currentProduct: Product,
    cartItms:Product[],
    wishListItem: Product[],
    currentProductQuantity:number,
    searchResult:Product[],
    searchQ: string,
    searchResultLoading: boolean,
    filterOptions:{
        sortyBy:string | undefined,
        sortOrder:string | undefined
    },
    showFilterModal: boolean,
    filterProducts:Product[]
  }

  export interface CategoryState {
    allCategory: Category[];
    loading: boolean;
}
  

export interface EmptyPageProps {
    title:string,
    description:string,
    linkLable:string,
    linkUrl:any,
    icon:string
}

export interface searchProductsArgs {
    searchQ: string
}

export interface userInfoData {
    name: string,
    savedName:string,
    loading?: boolean,
    ipInfo?: {
        ip: string;
        city: string;
        region: string;
        country: string;
        postal:string
    },
    deliverAddress?: AddressFormValues
}

export interface AddressFormValues {
    fullName: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface DeliveryAddressFormProps {
    onSubmit: (values: AddressFormValues) => void;
}

export interface FormFieldProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur: (e: any) => void;
    error?: string;
    keyboardType?: KeyboardTypeOptions;
}