import React from 'react';
import './App.css';
//import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar';
import SearchForm from './components/layout/SearchForm';
import Footer from './components/layout/Footer';
import JobList from './components/ShowJobs';

import store from './store';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SearchForm></SearchForm>
      <JobList></JobList>
      <Footer></Footer>
    </div>
  );
}


export default App;
