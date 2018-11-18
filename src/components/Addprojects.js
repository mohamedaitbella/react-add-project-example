import React, { Component } from 'react';
import uuid from 'uuid';
class Addprojects extends Component {

  constructor(){
    super();
    this.state={
      newProject:{}
    }
    // this.handleSubmit = this.handleSubmit;
  }
  static defaultProps ={
    categories:['e-commerce','Web Design','Mobile app']
  }


  handleSubmit=(e)=>{
    if(this.refs.title.value != ''){
      this.setState({
        newProject:{
          id:uuid.v4(),
          title: this.refs.title.value,
          category : this.refs.select.value
        }
      },function(){
        this.props.addproject(this.state.newProject);
      });
      
    }else{
      alert('Title is required');
    }
    e.preventDefault();
  }
  render() {
    
    let categoryoption = this.props.categories.map(category=>{
      return <option value={category} key={category}>{category}</option>
    }

    );
    return (
      <div className="addprojects">
         
         <h3>Add Project</h3>

          <form onSubmit={this.handleSubmit} > 
            <div>
              <label>Title </label>
              <input type="text" ref="title" />
              <label>categories </label>
              <select  ref="select" >
                {categoryoption}
              </select>
            </div>
            <button>submit</button>
          </form>

      </div>
    );
  }
}

export default Addprojects;