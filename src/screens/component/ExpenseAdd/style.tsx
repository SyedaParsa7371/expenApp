import { StyleSheet } from "react-native";

const buttonStyles= StyleSheet.create({
    modalBackground: {
    
        alignItems: 'center',
      
    },
    buttonContainer:{
        
        flexDirection:'column',
            height:350,
            width:350,
            backgroundColor:'#e2b5f0',
            marginTop:200,
            paddingVertical:20,
            borderRadius:5    
    },
    buttonCancel:{
        paddingLeft:20,
    },
    buttonAdd:{
        paddingLeft:30,
    },
    buttonBox:{
        flexDirection:'row',
        justifyContent:'center',
      
    },
    textHeading:{
        fontSize:24,
        textAlign:"center",
        fontWeight:'bold',
        color:'#300e5c'

    }
})
export default buttonStyles