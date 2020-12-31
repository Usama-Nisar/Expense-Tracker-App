import React,{useState, useContext} from 'react'
import { GlobalContext } from '../ContextData/GlobalData';


export const Add_Transaction = () => {

         const [description, setDescripton] = useState()  
         const [amount, setAmount] = useState()  
         const { addItem }= useContext(GlobalContext)



         const submitHandler = (e) => {
            
            e.preventDefault()

            const addTransaction = {
                id : new Date().getTime(),                            // Math.floor(Math.random() * 100000000),
                description,
                amount : +amount
            }

            setDescripton("");
            setAmount("");

            addItem(addTransaction)

         }

    return (
        <div>
        <h3>Add New Transaction</h3>
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <input  type="text" 
                        id="description"
                        value={description}
                        required="required"
                        placeholder="Enter Description"
                        onChange={ (e) => setDescripton(e.target.value)}
                />
            </div>
            <div className="form-control">
                <input  type="number" 
                        value={amount}
                        id="transactionamount"
                        required="required"
                        placeholder="Enter Amount"
                        onChange={ (e) => setAmount(e.target.value)}
                />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
    )
}
