import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {

    const [results, setResults] = useState([])
    const [errorMessage, setErroMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'são paulo',
                    limit: 50
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErroMessage('Sommething went wrong...')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}