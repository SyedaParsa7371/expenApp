import { FC } from "react"
import { StyleSheet, Text, TextInput } from "react-native"
import { IinputText } from "../../constant/interface"

const InputText:FC<IinputText>=({placeholder,value,onChangeText})=> {
    

    return (
        <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    )
}
export default InputText
const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        width:'90%',
        padding:10,
        margin:5,
        marginBottom:15,
        marginLeft:20,
        borderRadius:10,
        borderColor:"#430f88"
    }
})