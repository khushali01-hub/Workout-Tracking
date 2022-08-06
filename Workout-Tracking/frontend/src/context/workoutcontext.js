import { createContext, useReducer } from "react";

export const workoutcontext = createContext();

export const workoutReducer = (state,action)=>{

    switch(action.type){
        case 'GET ALL WORKOUTS':
            return {
                Workouts:action.payload
            }
        case 'ADD ONE WORKOUT':
            return {
                Workouts:[action.payload,...state.Workouts]
            }
        case 'DELETE WORKOUT':
            return{
                Workouts:state.Workouts.filter((w)=>w._id!==action.payload._id)
            }
        default:
            return state
    }
    

}

export const Workoutcontextprovider = ({children})=>{
    const [state,dispatch] =useReducer(workoutReducer,{
        Workouts:null
    })
    return (
        <workoutcontext.Provider value={{...state,dispatch}}>
            {children}
        </workoutcontext.Provider>
    )
}