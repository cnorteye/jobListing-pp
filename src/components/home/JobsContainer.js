import React, { Component } from 'react';
import {connect} from 'react-redux';
import JobDisplay from './JobDisplay';


export class JobsContainer extends Component {
    render() {
        const { jobs } = this.props;
        let content = '';

        content =
        jobs.Response === 'True'
          ? job.Search.map((job, index) => (
              <JobDisplay key={index} job={job} />
            ))
          : null;
        
        return (
            <div className='row'>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs
})

export default connect(mapStateToProps) (JobsContainer);
