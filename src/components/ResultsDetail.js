import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }}
                style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews, {result.price} Price</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 100,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});