import React, { FC, useState, useContext } from 'react';
import { Modal, Text, View } from 'react-native';
import buttonStyles from './style';
import Buttons from '../button';
import IconButton from '../IconButton';
import { icons } from '../../../assets';
import InputText from '../InputText';
import { ExpenseContext, ExpensesProvider } from '../ExpenseProvider/expenseprovider';
import { storeExpense } from '../ExpenseOutput/hhtp';
import LoadingOverlay from '../ExpenseProvider/loadingOverlay';



const AddExpense: FC = () => {
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isSubmiting, setIsSubmiting] = useState(false)


     const context= useContext(ExpenseContext);

    function handleCancel() {
        setModalVisible(false);
    }
   async function handleAdd() {
    setIsSubmiting(true)

        try{
            const newExpense = {
                amount: parseFloat(enteredAmount),
                description: enteredDescription,
                date: enteredDate,
            };
       
          const id = await storeExpense(newExpense);
        
            //console.log('Firebase Data',newExpense)
            context.addExpense({...newExpense}, id)
            setIsSubmiting(false)

            // console.log(newExpense)
            setEnteredAmount('')
            setEnteredDescription('')
            setEnteredDate('')
        }
        catch(error){
            console.log("THIS IS THE ERROR", error);
            
        }
    }
    
    if(isSubmiting){
        return <LoadingOverlay/>
    }

    return (
        <>
            <IconButton 
                image={icons.addIcon} 
                onPress={() => setModalVisible(true)}   
            />
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={buttonStyles.modalBackground}>
                    <View style={buttonStyles.buttonContainer}>
                        <View>
                            <Text style={buttonStyles.textHeading}>Add Your Expense</Text>
                        </View>
                        <View>
                            <InputText
                                placeholder="Add Your Description"
                                value={enteredDescription}
                                onChangeText={setEnteredDescription}
                            />
                            <InputText
                                placeholder="Add Your Amount"
                                value={enteredAmount}
                               
                                onChangeText={setEnteredAmount}
                            />
                            <InputText
                                placeholder="Add Your Date"
                                value={enteredDate}
                                onChangeText={setEnteredDate}
                            />
                        </View>
                        <View style={buttonStyles.buttonBox}>
                            <View style={buttonStyles.buttonCancel}>
                                <Buttons onPress={handleCancel}>Cancel</Buttons>
                            </View>
                            <View style={buttonStyles.buttonAdd}>
                                <Buttons onPress={handleAdd}>Add</Buttons>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default AddExpense;
