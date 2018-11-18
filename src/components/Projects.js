import React, { Component } from 'react';
import Projectitem from './Projectitem';


class Projects extends Component {
  deleteproject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectitems;

    // if(this.props.projects){
      projectitems =this.props.projects.map(project => {
        return (
          <Projectitem onDelete={this.deleteproject.bind(this)} key={project.title} projectline={project} />
        );
      });
    // }
    return (
      <div className="Projects">
        {projectitems}

      </div>
    );
  }
}

export default Projects;