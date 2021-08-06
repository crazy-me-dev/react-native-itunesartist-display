import React from "react";
import { render } from "@testing-library/react-native";
import ArtistListScreen from '../artistListScreen';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

describe('<ArtistListScreen />', () => {

  const mockStore = configureStore([]);

  it('Screen rendered correctly', async () => {
    const store = mockStore({ searchArtists: {loading: false} });
    const emptyState = render(
      <Provider store={store}>
        <ArtistListScreen/>
      </Provider>
    );
    expect(emptyState).not.toBeNull();
  });

  it('Screen shows loading spinner for loading status', async () => {
    const store = mockStore({ searchArtists: {loading: true} });
    const rendered = render(
      <Provider store={store}>
        <ArtistListScreen/>
      </Provider>
    );

    const viewQuery = rendered.queryAllByTestId('loadingView');
    expect(viewQuery).toHaveLength(1);
  });
  
});
  