import axios from "axios";

class Api {

  private baseUrl: string = "https://itunes.apple.com/"

  get artist() {
    return {
      search: (term: string) => axios.get(`${this.baseUrl}search?term=${term}`)
    }
  }
};

export default new Api();