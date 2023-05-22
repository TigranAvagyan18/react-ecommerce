/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { router } from './router';
import { Header } from './components/layout/header';
import { AppContext } from './app/hooks/useAppContext';
import { Products } from './app/types/products';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 86400
		}
	}
});

export const App = () => {
	const [cart, setCart] = useState<Products>([]);
	return (
		<AppContext.Provider value={{ cart, setCart }}>
			{/* // 
			@ts-ignore */}
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Header />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</AppContext.Provider>
	);
};
