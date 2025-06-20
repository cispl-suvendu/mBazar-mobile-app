import { FetchProductsArgs, fetchProductsByCatArgs, fetchSingleProductArgs, Product, ProductsState, searchProductsArgs, SortProductsArgs } from '@/types';
import { API_URL } from '@env';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ skip = 0, limit = 10, sortBy, order }: FetchProductsArgs) => {
    const params = new URLSearchParams();

    params.append('limit', limit.toString());
    params.append('skip', skip.toString());
    if (sortBy !== undefined) {
      params.append('sortBy', sortBy.toString());
      params.set('limit', '1000');
    }
    if (order !== undefined) params.append('order', order.toString());
    const response = await fetch(`${API_URL}/products?${params.toString()}`);
    const data = await response.json();

    return {
      products: data.products as Product[],
      total: data.total as number,
      skip,
      limit,
    };
  }
);


export const fetchProductsByCat = createAsyncThunk(
  'products/fetchProductsByCat',
  async ({ catName }: fetchProductsByCatArgs) => {
    const response = await fetch(`${API_URL}/products/category/${catName}`);
    const data = await response.json();
    return {
      products: data.products as Product[],
    };
  }
);

export const sortProdcutsBy = createAsyncThunk(
  'products/sortProdcutsBy',
  async ({ sortBy, order }: SortProductsArgs) => {
    const response = await fetch(`${API_URL}/products?sortBy=${sortBy}&order=${order}`);
    const data = await response.json();
    return data;
  }
)

export const fetchSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async ({ id }: fetchSingleProductArgs) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    return data;
  }
)

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async ({ searchQ }: searchProductsArgs) => {
    const response = await fetch(`${API_URL}/products/search?q=${searchQ}`);
    const { products } = await response.json();
    return products;
  }
);

const initialState: ProductsState = {
  allProducts: [],
  pagination: {
    total: 0,
    skip: 0,
    limit: 10,
  },
  loading: false,
  hasMore: true,
  productsByCategory: [],
  currentProduct: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    sku: ''
  },
  currentProductQuantity: 1,
  cartItms: [],
  wishListItem: [],
  searchResult: [],
  searchQ: '',
  searchResultLoading: true,
  filterOptions: {
    sortyBy:undefined,
    sortOrder: undefined
  },
  showFilterModal: false,
  filterProducts:[]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProductsByCategory: (state) => {
      state.productsByCategory = [];
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = initialState.currentProduct
    },
    addQuantity: (state) => {
      state.currentProductQuantity = state.currentProductQuantity + 1
    },
    removeQuantity: (state) => {
      const num = state.currentProductQuantity > 1 ? state.currentProductQuantity - 1 : state.currentProductQuantity
      state.currentProductQuantity = num
    },
    setDefaultQuantity: (state) => {
      state.currentProductQuantity = initialState.currentProductQuantity
    },
    handleAddToCart: (state) => {
      const item = {
        ...state.currentProduct,
        quantity: state.currentProductQuantity ?? 1,
      };

      const existingItemIndex = state.cartItms.findIndex(p => p.id === item.id);

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItms[existingItemIndex];

        if (typeof existingItem.quantity === 'number') {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity,
            // price: existingItem.price + (existingItem.price * item.quantity),
          };

          state.cartItms[existingItemIndex] = updatedItem;
        }
      } else {
        state.cartItms.push(item);
      }

    },
    handleRemoveCartItem: (state, action) => {
      const { id } = action.payload
      const freshcartItems = state.cartItms.filter(item => item.id !== id)
      state.cartItms = freshcartItems
    },
    handleAddToWishList: (state) => {
      const existingItemIndex = state.wishListItem.findIndex(p => p.id === state.currentProduct.id);
      if (existingItemIndex === -1) {
        state.wishListItem.push(state.currentProduct)
      } else {
        return
      }
    },
    handleRemoveWishListItem: (state, action) => {
      const removeItem = action.payload
      const getCurrentListing = state.wishListItem.filter(item => item.id !== removeItem.id)
      state.wishListItem = getCurrentListing
    },
    setSearchQ: (state, action) => {
      state.searchQ = action.payload
    },
    clearSearchResult: (state) => {
      state.searchResult = initialState.searchResult
      state.searchResultLoading = true;
    },
    clearSetSearchQ: (state) => {
      state.searchQ = initialState.searchQ
      state.searchResultLoading = true;
    },
    getSavedCartItems: (state, action) => {
      const savedCartItems = action.payload;
      if (Array.isArray(savedCartItems)) {
        state.cartItms = savedCartItems;
      } else {
        console.error('Invalid cart items format');
      }
    },
    getSavedWishListItems: (state, action) => {
      const savedWishListItems = action.payload;
      if (Array.isArray(savedWishListItems)) {
        state.wishListItem = savedWishListItems;
      } else {
        console.error('Invalid wish list items format');
      }
    },
    clearCart: (state) => {
      state.cartItms = initialState.cartItms
    },
    handleShowFilterModal: (state, action) => {
      state.showFilterModal = action.payload;
    },
    handleSetFiltervalue: (state, action) => {
      const { sortBy, sortByorder } = action.payload
      state.filterOptions.sortOrder = sortByorder
      state.filterOptions.sortyBy = sortBy
    },
    handleClearFiltervalue: (state) => {
      state.filterOptions.sortOrder = initialState.filterOptions.sortOrder
      state.filterOptions.sortyBy = initialState.filterOptions.sortyBy
      state.showFilterModal = initialState.showFilterModal
      state.filterProducts = initialState.filterProducts;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products, total, skip, limit } = action.payload;
        if (state.filterOptions.sortyBy && state.filterOptions.sortOrder) {
          state.filterProducts = products
        } else {
          state.allProducts = [...state.allProducts, ...products];
        }
        state.pagination.skip = skip + limit;
        state.pagination.total = total;
        state.hasMore = skip + limit < total;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchProductsByCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCat.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.productsByCategory = products
        state.loading = false;
      })
      .addCase(fetchProductsByCat.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.loading = false;
      })
      .addCase(searchProducts.pending, (state) => {
        state.searchResultLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchResult = action.payload;
        state.searchResultLoading = false;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.searchResultLoading = false;
      })
  },
});


export default productsSlice.reducer;
export const { clearProductsByCategory, clearCurrentProduct, addQuantity, removeQuantity, setDefaultQuantity, handleAddToCart, handleRemoveCartItem, handleAddToWishList, handleRemoveWishListItem, clearSearchResult, setSearchQ, clearSetSearchQ, getSavedCartItems, getSavedWishListItems, clearCart, handleShowFilterModal, handleSetFiltervalue, handleClearFiltervalue } = productsSlice.actions;



