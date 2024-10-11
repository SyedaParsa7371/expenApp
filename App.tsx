import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import ManageExpense from "./src/screens/ManageExpense";
import AllExpense from "./src/screens/AllExpense";
import RecentExpense from "./src/screens/RecentExpenses";
import Ionicons from "react-native-vector-icons/Ionicons";

import ExpenseScreen from "./src/screens/AllExpense";
import IconButton from "./src/screens/component/IconButton";
import { icons } from "./src/assets";
import { FC, useState } from "react";
import { INavigation } from "./src/constant/interface";
import AddExpense from "./src/screens/component/ExpenseAdd/ExpensesAdd";
import { DUMMY_EXPENSES, ExpenseContext } from "./src/store/context";
import { ExpensesProvider } from "./src/screens/component/ExpenseProvider/expenseprovider";

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpenseOverview:FC<INavigation>=({navigation})=> {
  return (
    <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: '#4c0263' },
      headerTintColor: 'white',
     
    })}
  >
      <BottomTabs.Screen name="Recent" component={RecentExpense}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
          tabBarInactiveBackgroundColor: "#4c0263",
          tabBarActiveBackgroundColor: "#4c0263",
          tabBarActiveTintColor:'white'
        }}


      />
      <BottomTabs.Screen name="All Expense" component={ExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
          tabBarInactiveBackgroundColor: "#4c0263",
          tabBarActiveBackgroundColor: "#4c0263",
           tabBarActiveTintColor:'white'
        }}

      />

    </BottomTabs.Navigator>
  )
}

function App() {
 
  const[expenses,setExpenses]= useState(DUMMY_EXPENSES)

  return (
    <ExpensesProvider >
   
      <StatusBar barStyle={"light-content"} backgroundColor='#4c0263' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4c0263" },
            headerTintColor: 'white',
            headerTitleAlign: "center",

          }}
        >
          <Stack.Screen name="ExpenseOverView" component={ExpenseOverview}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} 
          options={{
            title:'Manage Expense'
          }}/>
            <Stack.Screen name="AddExpense" component={AddExpense} 
          />
        </Stack.Navigator>
      </NavigationContainer>

      
    
    </ExpensesProvider>
  )
}


export default App;
