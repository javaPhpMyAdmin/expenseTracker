import React, {useContext} from 'react'

import { List as MUIList, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Avatar, 
    ListItemSecondaryAction, 
    IconButton, 
    Slide } from  '@material-ui/core'

import {Delete, MoneyOff} from '@material-ui/icons'
import useStyles from './styles'

import { ExpenseTrackerContext } from '../../../../Contex/contex'

function List() {
    const classes = useStyles()

    const globalState = useContext(ExpenseTrackerContext);

    console.log(globalState);
    

    const transactions = [
        {
            id: 1, 
            type: 'Income',
            category: 'Salary',
            amount: 50,
            date: 'Fri Mar 26 2021'
        },
        {
            id: 2, 
            type: 'Expense',
            category: 'Pets',
            amount: 100,
            date: 'Fri Mar 27 2021'
        },
        {
            id: 3, 
            type: 'Income',
            category: 'Business',
            amount: 150,
            date: 'Fri Mar 28 2021'
        }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide  direction='down' in mountOnEnter unmountOnExit key={transaction.id} >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' arial-label='delete' onClick=''>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List


