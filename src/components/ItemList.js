/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import DoneIcon from '@material-ui/icons/Done';
import {Snackbar,Chip,Tooltip} from '@material-ui/core/';
import { Alert, AlertTitle } from '@material-ui/lab';
import {useDispatch,useSelector} from 'react-redux';
import { toggleClicked,removeItem } from '../reducers/itemReducer';
const ItemList=()=>{
	const [remove,setRemove]=useState(false);
	const items = useSelector(state => state);
	console.log('items:',items);
	const dispatch = useDispatch(); 
	

	const handleClick = id=> {
		dispatch(toggleClicked(id));

	};
    
	const handleDelete = id => {
		dispatch(removeItem(id));
		setRemove(true);
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setRemove(false);
	};

	return(
		<div>
			{items.map(item=>
				<ul key={item.id}>
					<Tooltip
						title="click to mark as done">
						<Chip variant='outlined' 
							style={item.clicked?{borderColor:'green'}:null}
							key={item.id} label={item.content}
							icon={item.clicked?<DoneIcon/>:null}
							onClick={()=>handleClick(item.id)} 
							onDelete={()=>handleDelete(item.id)}/> 
					</Tooltip>
				</ul>
			)}
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				open={remove}
				autoHideDuration={3000}
				onClose={handleClose}>
				<Alert
					severity="error" >
					<AlertTitle>Item deleted</AlertTitle>
				</Alert>
			</Snackbar>
		</div>
	);
};

export default ItemList;