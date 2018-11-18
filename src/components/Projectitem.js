import React, { Component } from 'react';
import '../App.css';

class Projectitem extends Component {

  deleteproject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Projectitem" >
        {this.props.projectline.title} -- {this.props.projectline.category} <a href="#" onClick={this.deleteproject.bind(this,this.props.projectline.id)} >x</a>
      </li>
    );
  }
}

export default Projectitem;