/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import {Button,Snackbar,Tooltip,Typography} from '@material-ui/core/';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import {createItem} from '../reducers/itemReducer';
import '../App.css';
const ItemForm =(props)=>{
	const dispatch=useDispatch();
	const [warning, setWarning] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
    
		props.setOpen(false);
		setWarning(false);
	};
	const addItem=(event)=>{
		event.preventDefault();
		if(event.target.item.value===''){
			setWarning(true);
		}else{
			const content=event.target.item.value;
			dispatch(createItem(content));
			event.target.item.value='';

			props.setOpen(true);

		}};
	return(
		<div>
			<h1 className="h1">To-do list</h1> 
			<form onSubmit={addItem}>
				<Typography variant="p" component="p" gutterBottom>
        Add items to your to-do list
				</Typography>
				<Tooltip title="write a new task here">
					<input className="center-me" name="item"  />
				</Tooltip>
				<Button 
					type="submit">
        Submit
				</Button>

				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}} 
					open={props.open}
					autoHideDuration={3000} 
					onClose={handleClose}>
					<Alert 
						onClose={props.handleClose} 
						severity="success">
         New item added to the list!
					</Alert>
				</Snackbar>

				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}} 
					open={warning}
					autoHideDuration={3000}
					onClose={handleClose}>
					<Alert 
						severity="warning" >
						<AlertTitle>No input detected</AlertTitle>
					</Alert>
				</Snackbar>

			</form>
		</div>
	);
};
export default ItemForm;