import React, { Dispatch, ReactNode, SetStateAction } from "react"

export interface INavigation {
    navigation?: any
    onPress?: () => void
}

export interface IMage {
    image?: number
    onPress?: () => void
}

export interface IButton {
    children?: ReactNode
    onPress?: () => void
}

export interface IExpenseItem {
    id?: any
    expensesItem?: () => void
    item?: any
    description?: string
    amount?: number | string;
    expenseTime?: any
    date?: any
    navigation?: any
    onPress?: () => void
    expense?: any
    expenses?: any



}

export interface IExpenseTracker {
    itemData?: any
}


export interface IContext {
    children: ReactNode;
    ids?: string[],
    addExpense?: (id: string) => void
}




export interface IinputText {
    placeholder?: string
    value?: string
    onChangeText?: Dispatch<SetStateAction<string>>

}


export interface ExpenseContextType {
    expense?:any
    children?: React.ReactNode
    addExpense?: (id: string) => void
    removeExpense?: (id: string)=>void
    updateExpense?:(id:string)=>void
    searchExpense?:(id:string)=>void
    setExpenses?:(expense:any)=>void
  }

  export interface IError{
    message?:string
    onConfirm?:()=>void
    onPress?:()=>{}
  }


