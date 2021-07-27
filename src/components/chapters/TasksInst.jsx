import React, { Component } from "react";
import axios from 'axios';

import { Card, Button } from "react-bootstrap";


export default class TasksInst extends Component {

  constructor(props) {
    super(props);

    this.routeChange = this.routeChange.bind(this);

    this.state = {
      tasks: [],
      remainingUserTasks: [],
    };
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/tasks/').then(res => {
      this.setState({ tasks: res.data });
    });
    axios.get('http://127.0.0.1:8000/user/' + JSON.parse(localStorage.getItem("user"))["id"] + '/').then(res => {
      this.setState({ remainingUserTasks: res.data.tasksInst })
    });
  }

  routeChange(task) {

    //url/updateUserTaskInst/userID/taskID/
    axios.post('http://127.0.0.1:8000/updateUserTaskInst/' + JSON.parse(localStorage.getItem("user"))["id"] + '/' + task + '/')
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    window.location.reload();
  }

  render() {

    return (
      <div>
        <Card className="desafios">
          <Card.Body>
            <Card.Text>
              Olá novamente! Nesta etapa propomos-te a realização de alguns desafios que te irão dar a conhecer algumas das ferramentas mais utilizadas no INESC TEC e que facilitam a comunicação e a partilha de informação entre todos.
            </Card.Text>
          </Card.Body>
        </Card>
        {
          this.state.tasks.map(task => {
            return task.centerService === "general" ?
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
                        console.log(task);
                        return (
                          <Button onClick={this.routeChange.bind(this, task.id)} variant="danger">Concluir Desafio</Button>
                        )
                      }
                    })()}
                  </Card.Body>
                </Card>
              </>
              :
              <>
              </>
          })}
        <Card className="desafios">
          <Card.Body>
            <Card.Text>
              Parabéns! Concluíste com sucesso a segunda etapa deste jogo. Vamos conhecer o teu serviço/centro.
            </Card.Text>
            <Button href="/tasksCESE" variant="info">Centro/Serviço</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
