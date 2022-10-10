import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '29341553-4d62c8252f38dd5e4df787fdd';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

export default async function FetchApi(nameImgs, page, perPage) {
    const REQUEST_URL = `${URL}?key=${KEY}&q=${nameImgs}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${perPage}`;
  
    const response = await axios.get(REQUEST_URL);
    return response.data;
}