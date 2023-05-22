import { createContext, useContext, Dispatch, SetStateAction } from 'react';
import { Products } from '../types/products';

type State = {
	cart: Products;
	setCart: Dispatch<SetStateAction<Products>>;
};

const initialState = {
	cart: [],
	setCart: () => {}
} as State;

export const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);
