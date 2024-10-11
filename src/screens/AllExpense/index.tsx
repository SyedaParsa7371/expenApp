// ExpenseScreen.tsx

import React, { FC, useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import ExpenseList from '../component/ExpenseOutput/ExpenseList';
import ExpenseOutput from '../component/ExpenseOutput/ExpenseOutput';
import { INavigation } from '../../constant/interface';
import AddExpense from '../component/ExpenseAdd/ExpensesAdd';


;

const ExpenseScreen: FC<INavigation> = ({navigation}) => {
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AddExpense/>
            ),
        });
    }, [navigation]);
    return (
        <>
         <ExpenseOutput expenseTime='Total'/>
         
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#882323',
        borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.5,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        color:'black'
    },
});

export default ExpenseScreen;
