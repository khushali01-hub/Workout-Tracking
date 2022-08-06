import { workoutcontext } from "../context/workoutcontext";
import { useContext } from "react";

export const useWorkoutcontext = ()=>{

    const context = useContext(workoutcontext)
    if(!context){
        throw Error('error in workout context')
    }
    return context
}