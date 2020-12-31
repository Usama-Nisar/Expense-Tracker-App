import React from 'react'

// import css file
import './Mian.css'
//import component
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { Account_Summary } from './Components/Account_Summary';
import { Transaction_History } from './Components/Transaction_History';
import { Add_Transaction } from './Components/Add_Transaction';
import {  GlobalProvider } from './ContextData/GlobalData';




export const Main = () => {
    return (
        <div>
            <Header/>
            <GlobalProvider>
                <Balance/>
                <Account_Summary/>
                <Transaction_History/>
                <Add_Transaction/>
            </GlobalProvider>
        </div>
    )
}
