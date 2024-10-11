import React, { FC, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseOutput from '../component/ExpenseOutput/ExpenseOutput';
import AddExpense from '../component/ExpenseAdd/ExpensesAdd';
import { fetchExpenses } from '../component/ExpenseOutput/hhtp';
import { ExpenseContext } from '../component/ExpenseProvider/expenseprovider';
import LoadingOverlay from '../component/ExpenseProvider/loadingOverlay';
import ErrorOverlay from '../component/ExpenseProvider/ErrorOverLay';

const RecentExpense: FC<{ navigation: any }> = ({ navigation }) => {
    const context = useContext(ExpenseContext);
    const [isFetching, setIsFetching]= useState(true)
    const [error,setError]= useState()
    useEffect(() => {
        async function getExpenses() {
             setIsFetching(true)
            try {
                const expenses = await fetchExpenses();
                context?.setExpenses(expenses);
                
            } catch (error) {
                setError('Could not fetch expenses');
            }
            setIsFetching(false)
        }
        getExpenses();
    }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <AddExpense />,
        });
    }, [navigation]);

    function errorHandler() {
        setError(null)
    }
    if (error&&isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
    }
    if (isFetching) {
        return <LoadingOverlay/>
    }
    return (
        <View>
            <ExpenseOutput expenseTime='Last 7 days' onPress={() => console.log('Main Ye Raha!')} />
        </View>
    );
};

export default RecentExpense;
