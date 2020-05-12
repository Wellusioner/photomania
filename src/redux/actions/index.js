import { createRoutine } from 'redux-saga-routines'

const fetchImage = createRoutine('FETCH_IMAGE');
const addImage = createRoutine('ADD_IMAGE');

export default {
    fetchImage,
    addImage
}