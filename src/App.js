import React, { Component } from 'react';

import uuid from 'uuid';
import Projects from './components/Projects';
import Addprojects from './components/Addprojects';



import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state ={
      Projects :[]
    }
  }
  componentWillMount(){
    this.setState({Projects:[
      {
        id:uuid.v4(),
        title:'prestashop Website',
        category:'e-commerce'
     },
     {
      id:uuid.v4(),
      title:'PSD to html',
      category:'Web Design'
    },
    {
      id:uuid.v4(),
      title:'GPS location cafe',
      category:'Mobile app'
    }
    ]});
  }
  handeladdproject(project){
    
    let statevalues = this.state.Projects;
   
     statevalues.push(project);
     this.setState({Projects:statevalues});
     console.log(this.state.Projects);
  }
  handeldeleteproject(id){
    let statevalues = this.state.Projects;
    let index =statevalues.findIndex(el =>el ===id);
    statevalues.splice(index,1);
    this.setState({Projects:statevalues});
    
  }
  render() {
    return (
      <div className="App">
        <Projects  onDelete={this.handeldeleteproject.bind(this)} projects={this.state.Projects}/>
        <Addprojects  addproject={this.handeladdproject.bind(this)}/>   
      </div>
    );
  }
}

export default App;
