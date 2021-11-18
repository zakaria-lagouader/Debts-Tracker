import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from "../api"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AddDebtDialog({ open, onClose, debtor_id, getDebtor }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [snackOpen, setSnackOpen] = useState(false);

    const closeSnack = () => setSnackOpen(false)

    const addDebt = () => {
        if (name) {
            axios.post("/debts", {name, amount, debtor_id})
                .then(() => {
                    setSnackOpen(true)
                    getDebtor()
                    onClose();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Add Debt
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed sx={{my: 6}}>
                <TextField 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    onChange={e => setName(e.target.value)} 
                />
                <TextField 
                    label="Amount" 
                    type="number"
                    variant="outlined" 
                    sx={{mt: 2}}
                    fullWidth 
                    onChange={e => setAmount(e.target.value)} 
                />
                <Button 
                    variant="contained" 
                    size="large" 
                    fullWidth 
                    sx={{mt: 2}}
                    onClick={addDebt}
                >Add Debt</Button>
            </Container>
        </Dialog>
        <Snackbar open={snackOpen} autoHideDuration={1000} onClose={closeSnack}>
            <Alert onClose={closeSnack} severity="success" sx={{ width: '100%' }}>
                Debt added successfuly!
            </Alert>
        </Snackbar>
        </>
    )
}

export default AddDebtDialog
