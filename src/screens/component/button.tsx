import { FC } from "react"
import { IButton } from "../../constant/interface"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Colors from "../../constant/colors"

const Buttons:FC<IButton>=({children , onPress})=> {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.buttonContainer}><Text style={styles.buttonText}>{children}</Text></TouchableOpacity>
    )
}
export default Buttons

const styles=StyleSheet.create({
    buttonContainer:{
        height:50,
        width:70,
        padding:5,
        color:'white',
        backgroundColor:Colors.buttonColor,
        borderRadius:5
    },
    buttonText:{
        fontSize:17,
        color:'white',
        textAlign:'center',
        padding:3
    }
})