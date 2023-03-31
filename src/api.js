import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zzEc7wGRCIj-GPlW9m6fNIyTd0Iux-D65aQdMkWW8qk', // Access Key
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;