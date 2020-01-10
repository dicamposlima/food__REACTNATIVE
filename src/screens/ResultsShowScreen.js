import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from '../api/yelp';

export default function ResultsShowScreen({ navigation }) {
    const [result, setResult] = useState(null)

    const id = navigation.getParam('id')

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        } catch (err) {
            setErroMessage('Sommething went wrong...')
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <FlatList horizontal
                data={result.photos}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews, {result.price} Price</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    },
    image: {
        width: 500,
        height: '100%',
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    }
});