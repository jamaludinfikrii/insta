const users = {
    id : '',
    username : 'fikri',
    profile_pict : ''
}

function UsersReducer (state = users,action){
    if(action.type === 'REGISTER SUCCESS'){
        return action.payload
    }else{
        return state
    }
}

export default UsersReducer;
