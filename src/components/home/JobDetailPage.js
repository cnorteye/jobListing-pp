// This is the details page after you click for more detials about the job

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchJob, setLoading } from '../../actions/searchActions';

export class JobDetail extends Component {
    
    render() {
        return (
            <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg d-flex justify-content-between">
                <div className="jobs_left d-flex align-items-center">
                    <div className="thumb">
                        <img src='' alt="" />
                    </div>
                    <div className="jobs_conetent">
                        <a href='' target="_blank"><h4></h4></a>
                        <div className="links_locat d-flex align-items-center">
                            <div className="location">
                                <p> <i className="fa fa-map-marker"></i></p>
                            </div>
                            <div className="location">
                                <p> <i className="fa fa-clock-o"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jobs_right">
                    <div className="apply_now">
                        <a className="heart_mark" href="#"> <i className="fa fa-heart"></i> </a>
                        <button className="boxed-btn3">Apply Now</button>
                    </div>
                    <div className="date">
                        <p>Date line:</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default JobDetail
