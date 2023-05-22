import { useQuery } from 'react-query';
import { request } from '../api';
import { ProductsResponse } from '../types/products';

export const useProducts = (searchParam?: string) =>
	useQuery(`products`, () =>
		request<null, ProductsResponse>({
			url: `/products/search`,
			params: {
				q: searchParam
			}
		})()
	);
