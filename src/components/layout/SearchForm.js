// layout for the Form to look for jobs

import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center" >
                <div className='container'>
                 <form className='form-group'>
                        <div className="input-group mb-3">      
                            <input 
                            type="text" 
                            class="form-control"
                            name='searchJob'
                            placeholder='Search Jobs...' />
                            </div>
                            <div className="input-group mb-3">
                            <input 
                            type="text" 
                            className="form-control"
                            name='searchLocation'
                            placeholder='Location' />
                        </div>
                    <button type='submit' className='btn btn-primary btn-bg mt-6'>
                        Find Job
                    </button>
                </form>     
                </div>
            </div>
        
        
        )
    }
}
