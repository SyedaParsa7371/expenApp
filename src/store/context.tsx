import { createContext, FC, useState } from "react"
import { ExpenseContextType } from "../constant/interface"
import { Text } from "react-native"

export const DUMMY_EXPENSES = [
    {
      id: '1', amount: 120, description: '7 Days',
      date: "25-08-2024"
    },
    {
      id: '2', amount: 10, description: '7 Days',
      date: "25-08-2024"
    },
    {
      id: '3', amount: 1200, description: '7 Days',
      date: "25-08-2024"
    },
  ]

  export const ExpenseContext= createContext([])
  
 