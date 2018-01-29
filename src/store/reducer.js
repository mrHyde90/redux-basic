const initialState = {
    counter: 0
}
//si la accion es del mismo tipo  regresa el estado para guardarlo al store
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    else if(action.type === "DECREMENT"){
    	return {
    		counter: state.counter - 1
    	}
    }
    else if(action.type === "ADDED"){
    	return {
    		counter: state.counter + action.value
    	}
    }
    else if(action.type === "SUBTRACT"){
    	return {
    		counter: state.counter - action.value
    	}
    }
    return state;
};

export default reducer;