import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { initialState, rootReducer } from '../reducers/reducers'

import Dashboard from './Dashboard';

function renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
  }

  test('can render with redux with defaults', () => {
    const { getByTestId, getByText } = renderWithRedux(<Dashboard />)
    expect(getByTestId('locked')).toHaveTextContent('Unlocked')
  })

  test('can render with redux with custom initial state', () => {
    const { getByTestId, getByText } = renderWithRedux(<Dashboard />, {
      initialState: { unlocked: true,
        open: true },
    })
    expect(getByTestId('locked')).toHaveTextContent('Locked')
  })
