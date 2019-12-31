import React from "react";
import { render, fireEvent, act, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';

const dash = render(<Dashboard/>)

describe('<Dashboard />', () => {
    it('<Dashboard /> renders', () => {
        dash;
    });
});
