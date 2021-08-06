/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import { render, waitFor } from "@testing-library/react-native";

it('App renders correctly', async () => {
  await waitFor(() => {
    const emptyState = render(<App />);
    jest.useFakeTimers();
    expect(emptyState).not.toBeNull();
  })
});
