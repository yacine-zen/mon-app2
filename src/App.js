import React from "react"
import logo from "./logo.svg"

import {useState} from "react"

// import "./style.css"
import './App.css';

class App extends React.Component{
  state = {
    Person: {
      fullName:"Zenati Yacine",
      imgProfile:logo,
      profession:"software develper",
      bio:"i am a developer"
    },
    counter:0,
    show: false
  }
  incrementCounter = () =>{
    const { counter} = this.state
    this.setState({counter:counter + 1 })
  }
  componentDidMount(){
    setTimeout(this.incrementCounter, 5000)
  }
  handleClic = () => this.setState({show: !this.state.show})
  render(){
    const styleProfile= {
      display:'flex',
      margin:'40px 60px',
      textAligne:'start',
      justifyItems:'center'
    }
    return (
      <div className="App">
        <h1>The Component has mounted</h1>
        <h2>{this.state.counter}
        

        </h2>
        {/*if show is true show the profiile and the button st to hide profile else do the opposite */}
        <button onClick = {this.handleClic}>{this.state.show ? 'Hide Profile':'Show Profile'}</button>
        {(this.state.show)&&
        <div style = {styleProfile}>
          <div>
            <img src={logo} width = "200px" height = "300px"alt="Profile"/>
          </div>
          <div style={{margin: '20px 50px'}}>
          <h1>{this.state.Person.fullName}
          </h1>
          <h4>{this.state.Person.Profession}

          </h4>
          <span>{this.state.Person.bio}

          </span>
        </div>
      </div>
    
    
        }
        </div>
       
    );

  }
    
  }
  
export default App;
