import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';

const open = {
    locked: false,
    closed: false
}

const closed = {
    locked: true,
    closed: true
}

describe('<Display />', () => {

    it('<Display /> renders', () => {
        render(<Display/>);
    });
    it('Display wrapper renders', () => {
        const { getByTestId } = render(<Display />)
        const wrapper = getByTestId('displayDiv')
        expect(wrapper).toBeInTheDocument();
    });
    it('Display locked renders', () => {
        const { getByTestId } = render(<Display />)
        const wrapper = getByTestId('locked')
        expect(wrapper).toBeInTheDocument();
    });
    it('Display closed renders', () => {
        const { getByTestId } = render(<Display />)
        const wrapper = getByTestId('closed')
        expect(wrapper).toBeInTheDocument();
    });

    it('Display open props', () => {
        const { getByText } = render(<Display {...open}/>);
        const unlockedState = getByText('Unlocked');
        const openState = getByText('Open');
        expect(openState).toBeInTheDocument();
        expect(unlockedState).toBeInTheDocument();
    });

    it('Display closed props', () => {
        const { getByText } = render(<Display {...closed}/>);
        const unlockedState = getByText('Locked');
        const openState = getByText('Closed');
        expect(openState).toBeInTheDocument();
        expect(unlockedState).toBeInTheDocument();
    });
});