/* eslint-disable no-case-declarations */

export const createItem=(content)=>{
	let id=Math.random()*999;
	return{
		type:'NEW_ITEM',
		data:{
			content,
			id:id,
			clicked:false
		}
	};
};
export const toggleClicked=(id)=>{
	return{
		type:'TOGGLE_CLICKED',
		data:{id}
	};

};
export const removeItem=id=>{
	return{
		type:'REMOVE_ITEM',
		data:{id}
	};
};
    

const itemReducer=(state=[],action)=>{
	console.log('state now',state);
	console.log('action',action);

	switch(action.type){
	case 'TOGGLE_CLICKED':
		const id=action.data.id;
		const itemToToggle=state.find(item=>item.id===id);
		const changedItem={
			...itemToToggle,
			clicked:!itemToToggle.clicked
		};
		return state.map(item=>item.id!==id?item:changedItem);

	case 'NEW_ITEM':
		return [...state,action.data];
	case 'REMOVE_ITEM':
		const removeId=action.data.id;
		const removedItemList=state.filter(item=>item.id!==removeId);
		return removedItemList;
	default:
		return state;

	}
};
export default itemReducer;

    
  