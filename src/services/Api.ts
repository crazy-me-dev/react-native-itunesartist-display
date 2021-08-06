import axios, { AxiosInstance } from "axios";

class Api {

  private baseUrl: string = "https://itunes.apple.com/"
  private client: AxiosInstance = axios.create();

  get artist() {
    return {
      list: (terms: string) => this.client.get(`${this.baseUrl}search?terms=${terms}`)
    }
  }
};

export default new Api();