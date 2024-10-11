import { FC, useContext } from "react"
import { IExpenseItem } from "../../../constant/interface"
import { StyleSheet, Text, View } from "react-native"
import ExpenseList from "./ExpenseList"
import ExpensesSummary from "./ExpensesSummary"
import { ExpenseContext } from "../ExpenseProvider/expenseprovider"
import InputText from "../InputText"




const ExpenseOutput: FC<IExpenseItem> = ({ expense, expenseTime , onPress}) => {
  const context = useContext(ExpenseContext);

  //console.log("hjdfhjdfhj", context.expense);
  
  return (
      <View style={styles.container}>
        <ExpensesSummary expense={context.expense} expenseTime={expenseTime}/>
  
        <ExpenseList expense={context.expense} onPress={onPress}/>
        {/* <EditExpense /> */}
      </View>
  )
}
export default ExpenseOutput
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#b39fb3',
    // paddingBottom: '100%'
  }
});