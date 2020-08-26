import { SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING} from './types';
import axios from 'axios';

// type into search input for the job
export const searchJobs = text => dispatch =>{
    dispatch({
        type: SEARCH_JOB,
        payload: text
    });
};


// getting list of jobs from the json
export const fetchJobs = (page = 0, location = '', fulltime = 'false', description='', text) => dispatch => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`)
    .then(response => dispatch({
        type: FETCH_JOBS,
        payload: response.data
    })
    )
    .catch(err => console.log(err));
};

export const fetchJob = (id = 0) => dispatch => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
    .then(response => dispatch({
        type: FETCH_JOB,
        payload: response.data
    })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
    return{
        type: LOADING
    };
};