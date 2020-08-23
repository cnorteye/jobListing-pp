import { FETCH_JOBS, SEARCH_JOB } from '../actions/types';

const initialState = {
    text: '',
    jobs: [],
    loading: false, 
    job: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case SEARCH_JOB:
        return{
            ...state, 
            text:action.paylod, 
            laoding:false
        }

        case FETCH_JOBS:
        return{
            ...state, 
            text:action.paylod, 
            laoding:false
        }
        default: 
            return state
    }
}