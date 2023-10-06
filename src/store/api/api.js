import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['RandomRecipe', 'AllRecipes', 'Categories', 'Areas'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://www.themealdb.com/api/json/v1/1'
	}),
	endpoints: builder => ({
		getAllRecipes: builder.query({
			query: arg => `/search.php?s=${arg}`,
			providesTags: () => [{
				type: 'AllRecipes'
			}]
		}),
		getRandomRecipe: builder.query({
			query: () => `/random.php`,
			providesTags: () => [{
				type: 'RandomRecipe'
			}]
		}),
		getCategoriesList: builder.query({
			query: () => `/list.php?c=list`,
			providesTags: () => [{
				type: 'Categories'
			}]
		}),
		getAreasList: builder.query({
			query: () => `/list.php?a=list`,
			providesTags: () => [{
				type: 'Areas'
			}]
		})
	})
})
export const {useGetRandomRecipeQuery, useGetAllRecipesQuery, useGetCategoriesListQuery, useGetAreasListQuery} = api;