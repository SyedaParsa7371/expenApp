import { FC } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { IMage } from "../../constant/interface";

const IconButton: FC<IMage> = ({ image , onPress  }) => {
    console.log("===>", typeof (image));

    return (

       
            <View>
                <Image style={styles.imageContainer} source={image}  />
            </View>
      

    )
}
const styles = StyleSheet.create({
 
})
export default IconButton