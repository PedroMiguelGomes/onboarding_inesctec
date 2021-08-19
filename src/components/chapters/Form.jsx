import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends Component {

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

        //url/updateUserQuestion/userID/questionID/
        if (this.state.completed === "false") {
            axios.post('https://blooming-island-42972.herokuapp.com/updateUserQuestion/' + this.state.userID + '/8/')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }

        let path = '/chap';
        this.props.history.push(path);
    }

    componentDidMount() {
        this.setState({ user: JSON.parse(sessionStorage.getItem("user"))["name"] });
        this.setState({ userID: JSON.parse(sessionStorage.getItem("user"))["id"] });
        axios.get('https://blooming-island-42972.herokuapp.com/questionXLevel/' + JSON.parse(sessionStorage.getItem("user"))["id"] + '/3/1/')
            .then(res => {
                this.setState({ completed: res.data['question'] })
            })
    }

    render() {
        let button;
        if (this.state.completed === "false") {
            button = <Button variant="primary" className="px-4 nextLevel" onClick={this.routeChange}>Concluir Nivel</Button>;
        } else {
            button = <Button variant="info" className="px-4 nextLevel" onClick={this.routeChange}>Voltar Atrás</Button>;
        }
        return (
            <div>
                <h3 className="titleIntroduction">Questionário</h3>
                <h5>De maneira a podermos estar em constante evolução, pedimos-te que preenchas o seguinte inquérito</h5>
                <br />
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXWReUnKSG7uXNLfqSPvDeJ7RFJRxt4K2Ow_QVBL-UFmKrRw/viewform?embedded=true" width="100%" height="2556" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                {button}
            </div>
        );
    }
} export default withRouter(Form);