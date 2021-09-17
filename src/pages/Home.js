import React, {useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, deleteUser } from '../redux/actions'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});



const Home = () => {
  const history = useHistory();
  const classes = useStyles();
  let dispatch = useDispatch();
  const {users} = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadUsers())
  },[])

  const handleDelete = (id) => {
    if(window.confirm('Are you sure want to delete use?')){
      dispatch(deleteUser(id))

    }
  }
  return (

    <TableContainer component={Paper}>
    <div style={{marginTop: '50px'}}>
        <Button variant='contained' color="primary" onClick={() => history.push('/addUser')}>Add USer</Button>
    </div>
       <Table className={classes.table} aria-label="customized table">
         <TableHead>
           <TableRow>
             <StyledTableCell>Name</StyledTableCell>
             <StyledTableCell align="center">Email</StyledTableCell>
             <StyledTableCell align="center">Contact</StyledTableCell>
             <StyledTableCell align="center">Adress</StyledTableCell>
             <StyledTableCell align="center">Action</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {users && users.map((user) => (
             <StyledTableRow key={user.id}>
               <StyledTableCell component="th" scope="row">
                 {user.name}
               </StyledTableCell>
               <StyledTableCell align="center">{user.email}</StyledTableCell>
               <StyledTableCell align="center">{user.contact}</StyledTableCell>
               <StyledTableCell align="center">{user.adress}</StyledTableCell>
               <StyledTableCell align="center">

                <ButtonGroup disableElevation variant="contained">
                  <Button color="primary" onClick={() => history.push(`/editUser/${user.id}`)}>Update</Button>
                  <Button color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
                  </ButtonGroup>

               </StyledTableCell>
             </StyledTableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
  )
}

export default Home
