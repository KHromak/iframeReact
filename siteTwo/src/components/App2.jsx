import React, { useEffect, createRef, useState } from 'react';
import Iframe from './Iframe';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postMessage } from '../actions/messagesActions'

const App2 = (props) => {

  const dispatch = useDispatch();
  const dispatchMessage = (message) => dispatch(postMessage(message));

  useEffect(() => {

    const handler = event => {
      if (event.origin != 'http://localhost:8080') return; //check origin source
      const data = event.data;
      if (typeof (data) == 'string') {
        const parsedData = JSON.parse(data);
        dispatchMessage(parsedData.message);
      }
    }

    window.addEventListener("message", handler);

    return () => window.removeEventListener("message", handler)
  }, [])

  return (
    <div>
      <h1>Site B</h1>
      <Iframe src="http://localhost:8080/" height="200" width="500" />
      <p> Recieve message site B</p>
      <p> {props.message} </p>
    </div>
  )
}

const mapDispatch = {
  postMessage
};

const mapStateToProps = ({ messagesReducer }) => (
  {
    message: messagesReducer.message,
  })

export default connect(mapStateToProps, mapDispatch)(App2);