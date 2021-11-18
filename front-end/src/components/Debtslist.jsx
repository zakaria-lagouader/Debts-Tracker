import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axios from "../api";


function Debtslist({debts, getDebtor}) {

  const deleteDebt = (id) => {
    if (confirm("are you sur ?")) {
      axios.delete(`/debts/${id}`)
          .then(() => getDebtor())
          .catch(err => console.log(err))
    }
  }
    
    return (
        <List>
        {debts.map(debt => (
          <ListItem
            key={debt.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteDebt(debt.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            
              <ListItemText
                primary={debt.name}
                secondary={'Amount : ' + debt.amount}
              />
          </ListItem>
        ))}

      </List>
    )
}

export default Debtslist
