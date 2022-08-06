import { useWorkoutcontext } from "../hooks/useWorkoutcontext"    
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

    const Workoutdetails = ({workout}) => {

      const {dispatch} = useWorkoutcontext()
        const handleClick = async () => {
            const response = await fetch('/api/workouts/' + workout._id, {
              method: 'DELETE'
            })
            const json = await response.json()

            if(response.ok)
            {
              dispatch({type:'DELETE WORKOUT',payload:json})
            }

          }

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            {/* <p>{workout.createdAt}</p> */}
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
     )
}
 
export default Workoutdetails;