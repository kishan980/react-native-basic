import React from "react";
import {View,Text, StyleSheet,useColorScheme} 
from "react-native";

function AppPro() {
    const isDarkMode = useColorScheme() === "light"
    return(
        <View style={styles.container}>
                <Text style={isDarkMode? styles.whiteText:styles.darkText}>
                    hello kishan
                </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start"
    },
    whiteText:{
        color:"blue"
    }, 
    darkText:{
        color:"red"
    }
})
export default AppPro