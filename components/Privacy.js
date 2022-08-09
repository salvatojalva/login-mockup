import React from 'react'
import {
    Text,
    StyleSheet
} from 'react-native';

export const Privacy = () => {
    return (
        <>
            <Text style={styles.normalText}>
                By signing in you are agreeing our 

                <Text style={styles.linkText}> Term and privacy policy</Text>

            </Text>
        </>
    )
}

const styles = StyleSheet.create({

    normalText: {
        fontFamily: 'Sakkal Majalla',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        color: '#6B5E5E'
    },
    linkText: {
        color: '#036BB9'
    }
});