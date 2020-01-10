import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

export default function SearchScreen() {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResultsList results={filterResultsByPrice('$$$$')} title="Rich" />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFF',
        flex: 1
    },
});