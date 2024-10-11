import { StyleSheet } from "react-native";

const buttonStyles= StyleSheet.create({
    modalBackground: {
    
        alignItems: 'center',
      
    },
    buttonContainer:{
        flexDirection:'row',
        height:250,
        width:350,
        backgroundColor:'#e2b5f0',
        marginTop:200,
        paddingVertical:100,
        paddingLeft:70,
        borderRadius:5

        
    },
    buttonCancel:{
        paddingLeft:20,
    },
    buttonAdd:{
        paddingLeft:30,
    },
})
export default buttonStyles