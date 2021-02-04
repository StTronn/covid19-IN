import React,{useEffect} from 'react';
import {  useDispatch } from 'react-redux';

import {
  fetchData,
} from './store/dataSlice';


import Routing from "./router";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //passing action object here
    dispatch(fetchData());
  }, [dispatch])
  return (
    <>
    <Routing/>
    </>
  );
}

export default App;
