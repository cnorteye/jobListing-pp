import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchForm from './SearchForm';
import JobDisplay from './JobDisplay';

export class MainHomePage extends Component {
    render() {
        return (
            <div className='container'>
                <SearchForm />
                <JobDisplay />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.jobs.loading
})
export default connect(mapStateToProps) (MainHomePage);
