import { createStore } from "redux";


const saveUser = JSON.parse(localStorage.getItem('save-user'))

const initialState = {
    isLoggedIn : saveUser ? true : false,
    user: saveUser || null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('save-user',JSON.stringify(action.payload))
            return{
                ...state,
                isLoggedIn:true,
                user:action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('save-user')
            return{
                ...state,
                isLoggedIn:false,
                user:null
            }

        default:
            return state;
    }
}

const store = createStore(authReducer);
export default store;