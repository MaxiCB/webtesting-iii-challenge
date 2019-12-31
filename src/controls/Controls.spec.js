import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls';

describe('<Controls />', () => {
    it('<Controls /> renders', () => {
        render(<Controls/>);
    });

    test('renders open text on click', () => {
        const { getByText, getByTestId } = render(<Controls/>);
        const open = getByTestId('btn1');

        act(() => {
            fireEvent.click(open);
        });
        expect(open).toHaveTextContent('Lock Gate')
    });

    test('renders open text', () => {
        const { getByText,  getByTestId } = render(<Controls/>);
        const open = getByTestId('btn1');
        const unlock = getByTestId('btn2');

        act(() => {
            fireEvent.click(open);
            fireEvent.click(unlock);
        });
        expect(unlock).toHaveTextContent('Close Gate')
    });
});