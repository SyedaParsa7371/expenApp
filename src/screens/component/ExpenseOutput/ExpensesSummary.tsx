import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IExpenseItem } from "../../../constant/interface";

const ExpensesSummary: FC<IExpenseItem> = ({ expense = [], expenseTime }) => {
  // Check if expense is an array and has items
  const expensesSum = Array.isArray(expense) ? 
    expense.reduce((sum: number, { amount }: { amount: any }) => {
      const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
      return sum + (isNaN(numericAmount) ? 0 : numericAmount);
    }, 0) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.expenseTime}>{expenseTime}</Text>
      <Text style={styles.expensesSum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor:'#5e09ad',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseTime : {
    fontSize: 20,
    color: '#f8e7e7'
  },
  expensesSum: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#d0d0f3'
  },
});
