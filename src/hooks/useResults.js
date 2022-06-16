import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("here we go");

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,  // key ve value eşit olduğunda bu şekilde oluyor
                    location: 'Ohio'
                }
            });
            console.log(response.data.businesses);
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call SearchApi when component is first rendered.


    useEffect(() => {
        searchApi('pasta');
    }, []); // [] parametresi konunca içerideki kod 1 kez çalışır

    return [searchApi, results, errorMessage]; // SearchScreen bu değerleri kullanıyor
};