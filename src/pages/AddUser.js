import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { addUser } from '../redux/actions'
import { useDispatch } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {

    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
      margin: '0 auto',
      paddingTop: '70px'
    }
  },
}));



const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
    email: '',
    contact: '',
    adress: '',
  })
  const [ error, setError ] = useState('')
  const { name, email, contact, adress } = state

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact || !adress){
      setError('Please fill the fields')
    }else{
      dispatch(addUser(state))
    }
    history.push('/')
    setError('')
  }


    const handleChange = (e) => {
      const {name, value} = e.target;
      setState({...state, [name]: value})
    }
  return (
    <div>
    <div style={{margin:'60px'}}>
    <Button variant='contained' color="primary" onClick={() => history.push('/')}>Go Back</Button>
    </div>
      <h2>Add New User</h2>
      <br />
      {error && <h2>{error}</h2>}
      <br />
    <form onSubmit={handleSubmit} className={classes.root} style={{width: '500px', margin: '0 auto', height: '500px', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
      <FormGroup noValidate autoComplete='off'>
      <FormControl>
        <TextField
          name='name'
          type='text'
          value={name}
          id='standart-basic'
          label='name'
          onChange={handleChange}
         />
         </FormControl>
          <br />
        <FormControl>
         <TextField
           name='email'
           type='email'
           value={email}
           id='standart-basic'
           label='email'
           onChange={handleChange}
          />
          </FormControl>
          <br />
        <FormControl>
          <TextField
            name='contact'
            type='number'
            value={contact}
            id='standart-basic'
            label='contact'
            onChange={handleChange}
           />
         </FormControl>
         <br />
         <FormControl>
           <TextField
             name='adress'
             type='text'
             value={adress}
             id='standart-basic'
             label='adress'
             onChange={handleChange}
            />
          </FormControl>
          <br />
          <br />
          <br />
          <Button type='submit' variant='contained' color="primary">Create User</Button>
      </FormGroup>
      </form>
    </div>
  )
}

export default AddUser
