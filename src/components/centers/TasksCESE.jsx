import React, { Component } from "react";
import axios from 'axios';

import { Card, Button } from "react-bootstrap";


export default class TasksCESE extends Component {

    constructor(props) {
        super(props);

        this.routeChange = this.routeChange.bind(this);

        this.state = {
            tasks: [],
            remainingUserTasks: [],
        };
    }


    componentDidMount() {
        axios.get('https://blooming-island-42972.herokuapp.com/tasks/').then(res => {
            this.setState({ tasks: res.data });
        });
        axios.get('https://blooming-island-42972.herokuapp.com/user/' + JSON.parse(localStorage.getItem("user"))["id"] + '/').then(res => {
            this.setState({ remainingUserTasks: res.data.tasksInst })
        });
    }

    routeChange(task) {

        //url/updateUserTaskInst/userID/taskID/
        axios.post('https://blooming-island-42972.herokuapp.com/updateUserTaskInst/' + JSON.parse(localStorage.getItem("user"))["id"] + '/' + task + '/')
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
                            Bem-vindo ao CESE, o Centro de Engenharia e de Sistemas Empresariais! Seguem-se alguns desafios que acreditamos que vão facilitar a tua integração neste super centro.
                        </Card.Text>
                    </Card.Body>
                </Card>
                {
                    this.state.tasks.map(task => {
                        return task.centerService === "CESE" ?
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
                            Parabéns, concluíste com sucesso a última etapa deste jogo. Sê bem-vindo!
                            <br />
                            O Serviço de Recursos Humanos. Para mais informações rh@inesctec.pt
                        </Card.Text>
                        <Button href="/chap" variant="info">Voltar Atrás</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
