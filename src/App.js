import React,{useEffect} from 'react';
import {  useDispatch } from 'react-redux';

import {
  fetchData,
} from './store/dataSlice';


import Routing from "./router";
import Nav from "./common/Nav";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //passing action object here
    dispatch(fetchData());
  }, [dispatch])
  return (
    <>
    <Nav/>
    <Routing/>
    </>
  );
}

export default App;
