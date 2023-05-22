import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const client = (() => {
	return axios.create({
		baseURL: `https://dummyjson.com/`
	});
})();

export const request = <TData, TResponse>(
	options: AxiosRequestConfig<TData>
) => {
	return async (d?: TData) => {
		const onSuccess = (response: AxiosResponse<TResponse>) => {
			const { data } = response;
			return data;
		};

		const onError = (error: AxiosError) => {
			return Promise.reject(error.response);
		};

		return client({ ...options, method: 'GET', data: d })
			.then(onSuccess)
			.catch(onError);
	};
};
