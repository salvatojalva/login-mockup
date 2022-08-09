import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import CheckBox from '@react-native-community/checkbox';


export const Form = () => {
    return (
        <>

            <View style={styles.contenedor}>
                <TextInput
                    style={styles.input}
                    placeholder="User"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="visible-password"
                />

                <View style={styles.fixToText}>
                    <CheckBox
                        disabled={false}
                        value={false}
                    />
                    <Text style={styles.label}>Remember password?</Text>
                </View>

                <View style={styles.loginButton}>
                    <Text style={styles.loginText}> Login </Text>
                </View>
            </View>



        </>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#036BB9',
        marginVertical: 10,
        marginHorizontal: 15
    },
    loginText: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 19
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: '#A6A6A6',
        color: "#A6A6A6"
    },
    contenedor: {
        marginVertical: 15
    },
    fixToText: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        paddingTop: 5
    }
});