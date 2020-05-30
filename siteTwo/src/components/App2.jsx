import React from 'react';
import Iframe from './Iframe';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postMessage } from '../actions/messagesActions'


const App2 = (props) => {
  const dispatch = useDispatch();
  const dispatchMessage = (message) => dispatch(postMessage(message))

  return (
    <div>
      <h1>Site Two</h1>
      <Iframe src="http://localhost:8080/" height="200" width="500" dispatchMessage={dispatchMessage}/>
      <p> Recieved message </p>
      <p> {props.message} </p>
    </div>
  )
}

const mapDispatch = {
  postMessage
};

const mapStateToProps = ({messagesReducer}) => (
{
  message:messagesReducer.message,
})

export default connect(mapStateToProps, mapDispatch)(App2);