// layout for the Form to filter for jobs

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchJobs, fetchJobs, setLoading} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
      this.props.searchJobs(e.target.value);
      this.props.setLoading();
  }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchJobs(this.props.value);
    }


    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center" >
            <div className='container'>
            <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Find Your Next Developer Role
          </h1> 
             <form className='form-group' onSubmit={this.onSubmit}>
                    <div className="input-group mb-3">      
                        <input 
                        type="text" 
                        className="form-control"
                        name='searchJob'
                        placeholder='Search Jobs...'
                        onChange={this.onChange}/>
                        </div>
                        <div className="input-group mb-3">      
                        <input 
                        type="text" 
                        className="form-control"
                        name='jobLocation'
                        placeholder='Location'
                        //onChange={this.onChange}
                        />
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

const mapStateToProps = state => ({
    text: state.jobs.text
});

export default connect(mapStateToProps, {searchJobs, fetchJobs, setLoading}) (SearchForm);

