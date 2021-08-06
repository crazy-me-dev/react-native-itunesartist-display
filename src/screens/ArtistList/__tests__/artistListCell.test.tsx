import React from "react";
import { render } from "@testing-library/react-native";
import { mockedArtist } from "../../../../__mocks__/mockedData";
import ArtistListCell from "../artistListCell";
 
 it('Cell renders correctly', async () => {
  const emptyState = render(<ArtistListCell artist={mockedArtist} />);
  expect(emptyState).not.toBeNull();
 });
 