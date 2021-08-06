import Api from "../Api";

describe('<Api />', () => {

  it('Screen rendered correctly', async () => {
    const response = await Api.artist.search("test");
    expect(response.data.results).not.toHaveLength(0);
  });
  
});