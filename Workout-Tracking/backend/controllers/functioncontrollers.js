const workout = require('../models/workouts');
const mongoose=require('mongoose');

//get all
const getWorkouts=async (req, res)=>{
    console.log("hello");
    const workouts=await workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}
//get one
const getWorkout=async (req,res) =>{
    const {id} = req.params 
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout1=await workout.findById(id);
    if(!workout)
    {
        return res.status(400).json({error:"no such thing found"});
    }
    res.status(200).json(workout1);

}
//post  one const 
const postworkout = async (req,res)=>{
    const {title,load,reps}=req.body
    try{
        const work=await workout.create({title,load,reps});
        res.status(200).json(work)
    } catch(error){
        res.status(400).json({error:error.message})
    }

}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params 
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout1=await workout.findOneAndDelete({_id:id});
    if(!workout)
    {
        return res.status(400).json({error:"no such thing found"});
    }
    res.status(200).json(workout1);
}

// update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params 
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    else console.log("done")
    console.log("hello");
    const workout1=await workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    console.log(req.body)
    if(!workout)
    {
        return res.status(400).json({error:"no such thing found"});
    }
    res.status(200).json(workout1);
}


module.exports={
    getWorkout,
    getWorkouts,
    postworkout,
    deleteWorkout,
    updateWorkout
}
