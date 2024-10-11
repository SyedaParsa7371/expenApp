import { FC, useContext } from "react";
import { TextInput, View } from "react-native";
import { ExpenseContext } from "./ExpenseProvider/expenseprovider";

const SearchItem:FC=()=> {

    const context= useContext(ExpenseContext)
    
    return (
        <View>
            <TextInput value=''/>
        </View>
    )
}
export default SearchItem