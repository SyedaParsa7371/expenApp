import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { IError } from "../../../constant/interface";
import IconButton from "../IconButton";

const ErrorOverlay:FC<IError>=({message,onConfirm})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>An Error Occured</Text>
            <Text style={styles.text}>{message}</Text>
            <Button title="Okay" onPress={onConfirm}></Button>
        </View>
    )
}
export default ErrorOverlay


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:"#4c3361"
    },
    text:{
        textAlign:'center',
        marginBottom:8,  
        fontSize:20,
    }
})