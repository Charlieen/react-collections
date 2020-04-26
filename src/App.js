import React from 'react';
import './App.css';
import { Card} from './card.component';
import styled from 'styled-components';
import UserProfile from './component/UserProfile.component';


const Text = styled.div`
  color:red;
  font-size:28px;
  border: ${({isActive})=> isActive ? '1px solid black':'3px dotted green'};
`

const textStyles ={
  color:'red',
  fontSize:'24px'
}
//      <div style={textStyles }>I am a component</div>
function App() {

  return (
    <div className="App">
      <UserProfile name='lena' email='ddd@gamil.com'/>
    </div>
  );
}

export default App;
