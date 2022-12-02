import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from "./Header";
import { Provider } from 'react-redux';
import store from "../../store/index";

describe('Card tests', () => {
    it('should have text Musica', () => {
        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        , { wrapper: BrowserRouter });
        expect(screen.getByText(/Musica/)).toBeTruthy();
    });

    it('should match snapshot', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Header/>
            </Provider>
        , { wrapper: BrowserRouter });

        const element = screen.getByTestId('app-header');

        expect(element).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
  
    it('should find header', async () => {
        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        , { wrapper: BrowserRouter });

        const element = screen.getByTestId('app-header');

        expect(element).toBeInTheDocument();
    });
});