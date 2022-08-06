const express= require('express');
const {getWorkout,getWorkouts,postworkout,deleteWorkout,updateWorkout}=require('../controllers/functioncontrollers');
const router=express.Router();

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',postworkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports=router;