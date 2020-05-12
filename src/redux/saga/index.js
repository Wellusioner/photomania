import { takeLatest, takeEvery, put, call, all } from 'redux-saga/effects'
import Actions from '../actions'
import { api } from 'services'

function* fetchImage(action){
    try{

        const { data: { hits } } = yield call(api.request.get, api.queryBuilder('', {...action.payload}));

        yield put(Actions.fetchImage.success(hits));

    } catch(error){
        yield put(Actions.fetchImage.failure(error));
    }
}

function* addImages(action){
    try{
        const { data: { hits } } = yield call(api.request.get, api.queryBuilder('', {...action.payload}));

        yield put(Actions.addImage.success(hits));
    } catch(error){
        yield put(Actions.addImage.failure(error))
    }
}

export default function* root(){
    yield all([
        takeLatest(Actions.fetchImage.REQUEST, fetchImage),
        takeEvery(Actions.addImage.REQUEST, addImages)
    ])
}