import { useEffect } from "react";
import Workoutdetails from '../components/workoutdetails';
import Workoutform from '../components/workoutform';
import { useWorkoutcontext } from "../hooks/useWorkoutcontext";


const Home = () => {

    const {Workouts,dispatch} = useWorkoutcontext();
    // const [Workouts,setWorkouts] =useState(null)
    
    useEffect(()=>{
        const fetchdata = async ()=>{
            const responce = await fetch('/api/workouts')
            const json = await responce.json()
            if(responce.ok)
            {
                dispatch({type:'GET ALL WORKOUTS',payload:json})
            }
        }
        fetchdata()
    },[dispatch])

    return (  
        <div className="home">
            <div className="workouts">
                {Workouts&& Workouts.map((workout)=>(
                    <Workoutdetails workout={workout} key={workout._id}/>
                ))}
            </div>
            <Workoutform/>
        </div>
    );
}
 
export default Home;