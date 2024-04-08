import axios from "axios"

export class DogsService {
  static async getDogs() {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  }
}