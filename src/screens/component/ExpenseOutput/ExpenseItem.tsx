import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FC, useLayoutEffect, useState } from 'react';
import { IExpenseItem, INavigation } from '../../../constant/interface';



const ExpenseItem:FC<IExpenseItem>=({ onPress,item})=> {
    const [modal , setModal] = useState(false)
  // console.log("THIS IS THE MAIN SCREEN", item);



 
  return (
    <Pressable
      onPress={onPress}  
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.description} 
          </Text>
   
          <Text style={styles.textBase}>{item.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor:'#8235c2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
   
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: '#f3e1e1',
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: '#333',
    fontWeight: 'bold',
  },
});