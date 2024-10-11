import React, { createContext, FC, useState, ReactNode } from "react";
import { IExpenseItem, ExpenseContextType } from "../../../constant/interface";

const ExpenseContext = createContext<ExpenseContextType>({
    expense: [],
    addExpense: () => { },
    removeExpense: () => { },
    setExpenses:(expense:any)=>{},
    updateExpense: () => { },
    searchExpense:()=>{}
});

const ExpensesProvider: FC<ExpenseContextType> = ({ children }) => {
    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([
       
    ]);

    function addExpense(newExpense?: IExpenseItem) {
        if (newExpense) {
            console.log("THIS IS TESTTT", newExpense);
            setExpenseItems(currentExpenses => [...currentExpenses, newExpense]);
        }
    }
    function setExpenses(expense:any) {
        setExpenseItems(expense)
    }

    function removeExpense(id: string) {
        setExpenseItems(currentExpenses => currentExpenses.filter(expense => expense.id !== id));
    }


    function updateExpense(id: string, updateExpense?: IExpenseItem) {

    setExpenseItems(currentExpenses => {
      const index= currentExpenses.findIndex(expense => expense.id == id)
            const newExpense= [...currentExpenses]
           
            newExpense[index] = {...newExpense[index],...updateExpense} 
            return newExpense  
        })
    }

    // function searchExpense(description:string, searchExpense?:IExpenseItem){
    //     setExpenseItems((currentExpenses) =>{
    //         const index = currentExpenses.filter(expense=>expense.description==description)

    //         const searchExpenses=[...currentExpenses]

    //         searchExpenses[index]={...currentExpenses[index],...searchExpense}

    //         return searchExpenses 
    //     })
    // }

 
    const value: any = {
        expense: expenseItems,
        addExpense: addExpense,
        removeExpense: removeExpense,
        updateExpense: updateExpense,
        setExpenses:setExpenses
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
};

export { ExpenseContext, ExpensesProvider };

