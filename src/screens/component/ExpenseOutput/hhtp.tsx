import axios from "axios";

const BACKEND_URL='https://expenseapp-ab9b7-default-rtdb.firebaseio.com'

 export async function storeExpense(newExpense:any) {
    const response = await axios.post(
        BACKEND_URL+'/expenses.json',
        newExpense
    );
    const id = response.data.name;
    return id 
}

export  async function fetchExpenses() {
   const response=await axios.get(
       BACKEND_URL+ '/expenses.json',
    )
    const expense =[]

    for (const key in response.data){
        const expenseObj= {
            id:key,
            amount: response.data[key].amount,
            date:response.data[key].date,
            description:response.data[key].description
        }
        expense.push(expenseObj)
    }
    return expense
}

export  function updateExpense(id:any,newExpense:any) {
   return axios.put(BACKEND_URL+`/expenses/${id}.json`,newExpense)
}

export function deleteExpense(id:any) {
    return axios.delete(BACKEND_URL+`/expenses/${id}.json`)
}