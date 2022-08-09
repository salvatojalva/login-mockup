import React from 'react'
import { StyleSheet, Button, View} from 'react-native';
export const Tabs = () => {
    return (
        <>
            <View style={styles.fixToText}>
                <Button
                    title="Login"
                    color="#036BB9"
                />
                <Button
                    title="Register"
                    color="#A6A6A6"
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      paddingHorizontal: 90,
      paddingVertical: 10,
    },
  });