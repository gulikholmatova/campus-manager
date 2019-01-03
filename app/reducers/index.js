import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'
import student from './student'
import campus from './campus'

export default combineReducers({ student, campus, students, campuses });



