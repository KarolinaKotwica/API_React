import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zzEc7wGRCIj-GPlW9m6fNIyTd0Iux-D65aQdMkWW8qk', // Access Key
        },
        params: {
            query: 'cars',
        }
    })

    console.log(response)
    return response;
}

export default searchImages;