import React,{useContext} from 'react'
import { GlobalContext } from '../ContextData/GlobalData';

export const Transaction = ({transaction}) => {
    
    
    const { deleteItem }= useContext(GlobalContext)
    const sign = transaction.amount < 0  ? '-' : '+' ;

    return (
       
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.description}
                <span> {sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn"
                onClick={ () => deleteItem(transaction.id) }
                >
                   X 
                </button>
           </li>
        </div>

    )
    
}
