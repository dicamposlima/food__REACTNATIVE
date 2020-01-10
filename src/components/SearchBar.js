import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search'
                style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onEndEditing={onTermSubmit}
                onChangeText={onTermChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});