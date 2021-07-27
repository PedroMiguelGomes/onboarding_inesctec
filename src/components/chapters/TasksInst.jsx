import React, { Component } from "react";
import axios from 'axios';

import { Card, Button } from "react-bootstrap";


export default class TasksInst extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      remainingUserTasks: [],
    };
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/tasks/').then(res => {
      this.setState({ tasks: res.data });
    });
    axios.get('http://127.0.0.1:8000/user/'+ JSON.parse(localStorage.getItem("user"))["id"] + '/').then(res => {
      this.setState({ remainingUserTasks: res.data.tasksInst })
    });
  }

  render() {

    return (
      <div>
        {
          this.state.tasks.map(task => (
            <>
              <Card className="desafios">
                <Card.Body>
                  <Card.Title>{task.task}</Card.Title>
                  <Card.Text>{task.toDo}</Card.Text>
                  {(() => {
                    if (!this.state.remainingUserTasks.some(e => e.id === task.id)) {
                      return (
                        <Button variant="success">Concluído</Button>
                      )
                    } else {
                      return (
                        <Button variant="danger">Concluir Desafio</Button>
                      )
                    }
                  })()}
                </Card.Body>
              </Card>
            </>
          ))}
      </div>
    );
  }
}
