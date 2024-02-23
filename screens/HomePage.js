import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default function HomePage({navigation}){
    return <View style={styles.container}>
        <Text style={styles.container}>Home Page</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        fontSize: 30,
        alignSelf: 'center',
    }
})