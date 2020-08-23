import { FETCH_JOBS, SEARCH_JOB} from './types';
import axios from 'axios';


export const searchJob = text => dispatch => {
    dispatch({
        type: SEARCH_JOB, 
        paylod: text
    });
};

export const getJobs = text => dispatch => {
    axios
        .get('https://jobs.github.com/positions.json?')
        .then(response => dispatch({
            type: FETCH_JOBS, 
            paylod: response.data
        })
        
        )
        .catch(err => console.log(err));

}