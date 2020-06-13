/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import {createItem} from '../reducers/itemReducer';
const ItemForm =(props)=>{
	const dispatch=useDispatch();

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
    
		props.setOpen(false);
		props.setWarning(false);
	};
	const addItem=(event)=>{
		event.preventDefault();
		if(event.target.item.value===''){
			props.setWarning(true);
		}else{
			const content=event.target.item.value;
			dispatch(createItem(content));
			event.target.item.value='';

			props.setOpen(true);

		}};
	return(
		<form onSubmit={addItem}>
			<p>Add item</p>
			<input name="item"  />
			<Button type="submit">Submit</Button>
			<Snackbar  open={props.open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={props.handleClose} severity="success">
         New item added to the list!
				</Alert>
			</Snackbar>
			<Snackbar anchorOrigin={{
				vertical: 'top',
				horizontal: 'center'
			}} open={props.warning} autoHideDuration={3000} onClose={handleClose}>
				<Alert severity="warning" >
					<AlertTitle>No input detected</AlertTitle>
				</Alert>
			</Snackbar>
		</form>
	);
};
export default ItemForm;