import ContentLoader from 'react-content-loader';
import { useProducts } from '../../app/hooks/useProducts';
import { Product as ProductProps } from '../../app/types/products';
import { Rating } from '../rating';
import { useAppContext } from '../../app/hooks/useAppContext';

export const Product = (props: ProductProps) => {
	const { title, thumbnail, rating, price } = props;

	const { setCart } = useAppContext();

	const handleClick = () => setCart((cart) => [...cart, props]);

	return (
		<div className="flex w-80 max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
			<img
				className="h-40 rounded-t-lg  bg-gray-900 object-contain"
				src={thumbnail}
				alt="product"
			/>
			<div className="p-5">
				<h5 className="truncate text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<Rating count={rating} />
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						${price}
					</span>
					<button
						className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={handleClick}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export const Products = () => {
	const { data, isLoading } = useProducts();
	const { products } = data || {};

	if (isLoading || !products)
		return (
			<ContentLoader
				width={1400}
				height={1000}
				viewBox="0 0 800 575"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				className="m-auto"
			>
				<rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
				<rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
				<rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
				<rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
				<rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
				<rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
				<rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
				<rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
				<circle cx="286" cy="536" r="12" />
				<circle cx="319" cy="535" r="12" />
				<circle cx="353" cy="535" r="12" />
				<rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
				<rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
				<circle cx="210" cy="535" r="12" />
				<circle cx="428" cy="536" r="12" />
			</ContentLoader>
		);

	return (
		<div className="m-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-8 py-8">
			{products.map((product) => {
				return <Product {...product} />;
			})}
		</div>
	);
};
