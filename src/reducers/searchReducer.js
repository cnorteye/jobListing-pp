import {FETCH_JOB, FETCH_JOBS, LOADING, SEARCH_JOB } from '../actions/types';


// define initial state of user
const initialState = {
    text: '',
    jobs: [],
    loading: false,
    //job: []
};

// update store based on type and payload and return the state
export default function (state = initialState, action){
    switch (action.type) {
        // search for jobs
        case SEARCH_JOB:
            return{
                ...state,
                text: action.payload,
                loading: false
            };
        
        
        // get all jobs list
        case FETCH_JOBS:
            return {
                ...state, 
                jobs: action.payload
            }
        // get individual job
        case FETCH_JOB:
            return {
                ...state, 
                job: action.payload,
                loading: false
            };

        case LOADING:
            return{
                ...state,
                loading: true
            };
            
            default:
                return state
    }
}