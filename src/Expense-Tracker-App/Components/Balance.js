import React,{useContext} from 'react'
import { GlobalContext } from '../ContextData/GlobalData';


export const Balance = () => {

    const {Transactions} = useContext(GlobalContext)

    const amounts = Transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (

        <div className="conatainer">
            <h4>Current Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
