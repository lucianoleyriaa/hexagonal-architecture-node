import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
  id: {
    type: String,
    required: [true, 'Id is required'],
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  createAt: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

export const TaskModel = mongoose.model('tasks', taskSchema);