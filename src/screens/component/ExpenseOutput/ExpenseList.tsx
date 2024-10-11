import { FC, useContext, useState, useEffect } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { IExpenseItem } from "../../../constant/interface";
import ExpenseItem from "./ExpenseItem";
import Buttons from "../button";
import IconButton from "../IconButton";
import { icons } from "../../../assets";
import { ExpenseContext } from "../ExpenseProvider/expenseprovider";
import InputText from "../InputText";
import { deleteExpense, updateExpense } from "./hhtp";
import LoadingOverlay from "../ExpenseProvider/loadingOverlay";

const ExpenseList: FC = () => {
    const context = useContext(ExpenseContext);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [currItem, setCurrItem] = useState<IExpenseItem | null>(null);
    const [editAmount, setEditAmount] = useState<string>('');
    const [editDescription, setEditDescription] = useState<string>('');
    const [editDate, setEditDate] = useState<string>('');
    const [searchDescription, setSearchDescription] = useState<string>('');
    const [isSubmiting, setIsSubmiting] = useState(false)


    useEffect(() => {
        if (currItem) {
            setEditDescription(currItem.description);
            setEditAmount(currItem.amount.toString()); 
            setEditDate(currItem.date);
        }
    }, [currItem]);

    function openModal(item: IExpenseItem) {
        setCurrItem(item);
        setModalVisible(true);
    }

    async function deleteItem() {
      //  setIsSubmiting(true)
        if (currItem) {
            context.removeExpense(currItem.id);
            setModalVisible(false);
        }
        const response = await deleteExpense(currItem?.id)
        //setIsSubmiting(false)
    }

    function handleCancel() {
        setModalVisible(false);
    }

   async function handleEdit() {
    //setIsSubmiting(true)

        if (currItem) {
            let data={
                amount: parseFloat(editAmount), 
                description: editDescription,
                date: editDate,
            }
            context.updateExpense(currItem.id, data);
            
         const response= await  updateExpense(currItem.id,data)
         console.log(response?.data)
            setModalVisible(false);
        }
    }


    const filteredExpenses = context.expense.filter(expense =>
        expense.description.toLowerCase().includes(searchDescription.toLowerCase())
    );

    // if(isSubmiting){
    //     return <LoadingOverlay/>
    // }

    return (
        <>
            <View >
                <InputText   placeholder="Search by description" value={searchDescription} onChangeText={setSearchDescription}/>
                {/* <InputText
                    placeholder="Search by description"
                    value={searchDescription} 
                /> */}
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textHeading}>Edit Your Item</Text>
                        <View>
                            <InputText
                                placeholder="Edit Your Description"
                                value={editDescription}
                                onChangeText={setEditDescription}
                            />
                            <InputText
                                placeholder="Edit Your Amount"
                                value={editAmount}
                                onChangeText={setEditAmount}
                              
                            />
                            <InputText
                                placeholder="Edit Your Date"
                                value={editDate}
                                onChangeText={setEditDate}
                            />
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.buttonCancel}>
                                <Buttons onPress={handleCancel}>Cancel</Buttons>
                            </View>
                            <View style={styles.buttonAdd}>
                                <Buttons onPress={handleEdit}>Edit</Buttons>
                            </View>
                        </View>
                        <View style={styles.buttonContainers}>
                            <IconButton image={icons.deleteIcon} onPress={deleteItem} />
                        </View>
                    </View>
                </View>
            </Modal>
            <FlatList
                style={{ height: '100%' }}
                data={filteredExpenses}
                renderItem={({ item }) => (
                    <ExpenseItem
                        item={item}
                        onPress={() => openModal(item)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
   
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    buttonContainer: {
        flexDirection: 'column',
        height: 350,
        width: 350,
        backgroundColor: '#e2b5f0',
        paddingVertical: 20,
        borderRadius: 5,
    },
    buttonCancel: {
        paddingLeft: 20,
    },
    buttonAdd: {
        paddingLeft: 30,
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textHeading: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#300e5c',
    },
    buttonContainers: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default ExpenseList;
