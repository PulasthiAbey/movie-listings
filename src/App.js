import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import Login from './components/loginScreen';
import Home from './components/home';
import './App.css';
import {useSelector} from 'react-redux';
import {selectUser} from './redux/reducers/userReducer';

const App = () => {
  const user = useSelector(selectUser);
  // const handleAPICall = () => {
  //   const url = 'https://jessyapitest.herokuapp.com/suggestions';
  //   axios
  //     .get(url)
  //     .then(response => {
  //       const results = response.data;
  //       setData({
  //         ...data,
  //         locationID: results.locationID,
  //         name: results.name,
  //         description: results.description,
  //         isLoading: false,
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       handleMessage('Error Ocurred Check you Internet Connection');
  //     });
  // };
  return <div>{user ? <Home /> : <Login />}</div>;
};

export default App;
