import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import axios from "../api"
import { calcTotal } from "../calcs"

function DebtorsList({ debtors, getDebtors }) {
  
  const history = useHistory();
  const showDebtor = (id) => {
    history.push(`/debtors/${id}`)
  }

  const deleteDebtor = (id) => {
    if(confirm("are you sure ?")) {
      axios.delete("/debtors/"+id)
            .then(() => getDebtors())
            .catch(err => console.log(err))

    }
  }

  return (
    <>
      <List>
        {debtors.map(debtor => (
          <ListItem
            key={debtor.id}
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => deleteDebtor(debtor.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemButton 
            disableGutters
            onClick={() => showDebtor(debtor.id)}
            >
              <ListItemAvatar>
                <Avatar>
                  {debtor.name.slice(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={debtor.name}
                secondary={`Total debts: ${calcTotal(debtor.debts)}dh`}
              />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </>
  )
}

export default DebtorsList
