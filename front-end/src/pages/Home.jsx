import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DebtorsList from '../components/DebtorsList';
import AddDebtorDialog from '../components/AddDebtorDialog';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from "../api"


function Home() {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false);

  const [debtors, setDebtors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getDebtors = () => {
    axios.get("/debtors")
          .then(({data}) => {
            setDebtors(data)
            setIsLoading(false)
          })
          .catch(err => console.log(err))
  }
  useEffect(() => {
    getDebtors();
  }, [])
  return (
    <>
      <Navbar />
      <Container fixed>
        <Typography variant="h3" component="h3" gutterBottom sx={{ my: 6 }}>
          Debts Tracker
        </Typography>
      </Container>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: "2rem" }}>
          <CircularProgress />
        </Box>
      ): <DebtorsList debtors={debtors} getDebtors={getDebtors} />}
      
      <AddDebtorDialog open={open} onClose={onClose} getDebtors={getDebtors} />
      <Fab color="primary" aria-label="add" sx={{ position: "fixed", right: 16, bottom: 16 }} onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
    </>
  )
}

export default Home
