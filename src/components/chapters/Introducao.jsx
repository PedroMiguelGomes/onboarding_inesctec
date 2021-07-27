import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Introducao extends Component {

    constructor(props) {
        super(props);

        this.routeChange = this.routeChange.bind(this);

        this.state = {
            userID: '',
            user: '',
            completed: false
        };
    }

    routeChange(e) {

        e.preventDefault();

        //url/updateUserQuestion/userID/chapter/level/score/
        console.log(this.state.completed);
        if (this.state.completed === "false") {
            axios.post('http://127.0.0.1:8000/updateUserQuestion/' + this.state.userID + '/1/1/5/')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }

        let path = '/chap';
        this.props.history.push(path);
    }

    componentDidMount() {
        this.setState({ user: JSON.parse(localStorage.getItem("user"))["name"] });
        this.setState({ userID: JSON.parse(localStorage.getItem("user"))["id"] });
        axios.get('http://127.0.0.1:8000/questionLevel/1/1/1/')
            .then(res => {
                this.setState({ completed: res.data['question'] })
            })
    }

    render() {
        let button;
        if (this.state.completed === "false") {
            button = <Button variant="primary" className="px-4 nextLevel" onClick={this.routeChange}>Concluir Nivel</Button>;
        } else {
            button = <Button variant="success" className="px-4 nextLevel" onClick={this.routeChange}>Voltar atrás</Button>;
        }
        return (
            <div>
                <h3 className="titleIntroduction">Olá {this.state.user}, bem-vindo ao INESC TEC!</h3>
                <h5>Para os próximos desafios recomendamos que vejas o nosso website.</h5>
                <a href="https://www.inesctec.pt/pt/instituicao" target="_blank" rel="noreferrer">Instituição INESC TEC</a>
                <br />
                {button}
            </div>
        );
    }
} export default withRouter(Introducao);