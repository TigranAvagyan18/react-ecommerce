import { ChangeEvent, useState, useEffect } from 'react';
import useDebounce from '../../app/hooks/useDebounce';
import { useProducts } from '../../app/hooks/useProducts';
import { useAppContext } from '../../app/hooks/useAppContext';

export const Header = () => {
	const { cart } = useAppContext();

	const [search, setSearch] = useState('');
	const debouncedValue = useDebounce<string>(search, 500);

	const { refetch } = useProducts(debouncedValue);

	useEffect(() => {
		refetch();
	}, [debouncedValue, refetch]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<div className="flex h-20 w-full items-center justify-between bg-gray-800 px-10 text-white">
			<div>Ecommerce</div>
			<input
				className="rounded-md border bg-transparent px-4 py-2 outline-none"
				placeholder="Search"
				onChange={handleChange}
			/>
			<div>Cart ({cart.length || null})</div>
		</div>
	);
};
