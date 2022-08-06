import {  useState } from "react";
import { useWorkoutcontext } from "../hooks/useWorkoutcontext";

const Wrokoutform = () => {

    const {dispatch} = useWorkoutcontext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  

    const submithandler = async (e)=>{
        e.preventDefault()

        const workout={title,reps,load}

        const responce = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json =await responce.json()
        if(!responce.ok)
        {
            setError(json.error);
        }
        else
        {
            setLoad('');
            setReps('');
            setTitle('');
            setError(null);
            dispatch({type:'ADD ONE WORKOUT',payload:json})
        }
    }

    return ( 
        <form className="create" onSubmit={submithandler}>
            <h3>Add a new workout</h3>

            <label >Give a title here in text form only</label>
            <input 
                type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />

            <label >No of reps</label>
            <input 
                type="number" 
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
            />

            <label >Load in (Kg) </label>
            <input 
                type="number" 
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
            />
            
            <button>Add the workout</button>
            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default Wrokoutform;