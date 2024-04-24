import axios from "axios"

export class DogsService {
  static async getDogs() {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  }

  static async getDogImg(breed: string, num: number) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
  }
}