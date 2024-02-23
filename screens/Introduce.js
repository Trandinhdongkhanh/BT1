import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

export default function Introduce({navigation}){
    return <View style={styles.container}>
        <Text style={styles.container}>20110503</Text>
        <Text style={styles.container}>Trần Đình Đông Khánh</Text>
        <Button onPress={() =>{
            navigation.navigate('HomePage')
        }} title='Home Page'></Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        alignItems: 'center',
    },
  });