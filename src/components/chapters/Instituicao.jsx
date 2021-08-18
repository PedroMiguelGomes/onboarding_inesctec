import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Instituicao extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      answer: 0,
      userID: '',
      submited: false,
      remainingQuestions: [],
      question: [],
    };
  }

  componentDidMount() {
    this.setState({ userID: JSON.parse(sessionStorage.getItem("user"))["id"] });
    axios.get('https://blooming-island-42972.herokuapp.com/questions/')
      .then(res => {
        const questions = res.data;
        this.setState({ questions });
      });
    axios.get('https://blooming-island-42972.herokuapp.com/user/' + JSON.parse(sessionStorage.getItem("user"))["id"] + '/')
      .then(res => {
        const remainingQuestions = res.data.questions;
        this.setState({ remainingQuestions });
      });
  }

  handleSubmit = (question, e) => {

    const submited = true;
    this.setState({ submited });
    console.log(question.correct);
    console.log(this.state.answer)

    if (this.state.answer === question.correct.toString()) {
      axios.post('https://blooming-island-42972.herokuapp.com/updateUserQuestion/' + this.state.userID + '/' + question.id + '/')
        .then(res => {
          console.log(res);
        })
      setTimeout(() => {
        let path = '/instituicao';
        this.props.history.push(path);
        window.location.reload();
      }, 1000);
    }


  }

  validateForm() {
    return this.state.answer > 0;
  }

  render() {

    return (
      <Container className="p-3 header" >
        <h1 className="">Acolhimento - Instituição</h1>

        <Card className="pergunta pergunta1">
          <Card.Body>
            <Card.Text className="justifyText">
              Sabias que o INESC TEC é uma instituição privada sem fins lucrativos que se centra em atividades de investigação científica e desenvolvimento tecnológico, transferência de tecnologia, consultoria avançada e formação, e pré-incubação de novas empresas de base tecnológica? Temos um <a href="https://www.inesctec.pt/pt/instituicao#structure" target="_blank" rel="noreferrer">modelo de gestão único e diferenciador,</a> aperfeiçoado ao longo de uma história que conta já com várias décadas.
              {this.state.questions.map(question => {
                return (question.chapter === 2 && question.number === 1 ?
                  <>
                    <Form className="p-4">
                      <br />
                      <div>
                        {question.question}
                      </div>
                      <Form.Check
                        type="radio"
                        label={question.answer1}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value="1"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer2}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value="2"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer3}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        value="3"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer4}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        value="4"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <br />
                      {(() => {
                        if (!this.state.remainingQuestions.some(e => e.id === question.id)) {
                          return (
                            <Button variant="success">Concluída</Button>
                          )
                        } else {
                          return (
                            <Button variant="primary" onClick={this.handleSubmit.bind(this, question)} disabled={!this.validateForm()}>Responder</Button>
                          )
                        }
                      })()}
                      <div>
                        {this.state.submited === true && this.state.answer === question.correct.toString() ? (<Badge variant="success">Success</Badge>) : this.state.submited === true ? (<Badge variant="danger">Danger</Badge>) : (<></>)}
                      </div>
                    </Form></>
                  :
                  <></>
                )
              })
              }
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="pergunta pergunta2">
          <Card.Body>
            <Card.Text className="justifyText">
              Com 6 polos, o INESC TEC agrega atualmente 13 Centros de I&amp;D.
              {this.state.questions.map(question => {
                return (question.chapter === 2 && question.number === 2 ?
                  <>
                    <Form className="p-4">
                      <br />
                      <div>
                        {question.question}
                      </div>
                      <Form.Check
                        type="radio"
                        label={question.answer1}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value="1"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer2}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value="2"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer3}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        value="3"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer4}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        value="4"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <br />
                      {(() => {
                        if (!this.state.remainingQuestions.some(e => e.id === question.id)) {
                          return (
                            <Button variant="success">Concluída</Button>
                          )
                        } else {
                          return (
                            <Button variant="primary" onClick={this.handleSubmit.bind(this, question)} disabled={!this.validateForm()}>Responder</Button>
                          )
                        }
                      })()}
                      <div>
                        {this.state.submited === true && this.state.answer === question.correct.toString() ? (<Badge variant="success">Success</Badge>) : this.state.submited === true ? (<Badge variant="danger">Danger</Badge>) : (<></>)}
                      </div>
                    </Form></>
                  :
                  <></>
                )
              })
              }
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="pergunta pergunta3">
          <Card.Body>
            <Card.Text className="justifyText">
              Os 13 centros de I&amp;D do INESC TEC estão estruturados em quatro Clusters que agrupam mais de 700
              investigadores integrados e incluem investigadores contratados, investigadores de instituições de ensino
              superior, bolseiros e investigadores afiliados, estagiários e ainda pessoal de apoio técnico e
              administrativo.
              {this.state.questions.map(question => {
                return (question.chapter === 2 && question.number === 3 ?
                  <>
                    <Form className="p-4">
                      <br />
                      <div>
                        {question.question}
                      </div>
                      <Form.Check
                        type="radio"
                        label={question.answer1}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value="1"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer2}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value="2"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer3}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        value="3"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer4}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        value="4"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <br />
                      {(() => {
                        if (!this.state.remainingQuestions.some(e => e.id === question.id)) {
                          return (
                            <Button variant="success">Concluída</Button>
                          )
                        } else {
                          return (
                            <Button variant="primary" onClick={this.handleSubmit.bind(this, question)} disabled={!this.validateForm()}>Responder</Button>
                          )
                        }
                      })()}
                      <div>
                        {this.state.submited === true && this.state.answer === question.correct.toString() ? (<Badge variant="success">Success</Badge>) : this.state.submited === true ? (<Badge variant="danger">Danger</Badge>) : (<></>)}
                      </div>
                    </Form></>
                  :
                  <></>
                )
              })
              }
              A missão do INESC TEC é promover avanços científicos e tecnológicos, assim como inovação de base
              tecnológica, através da transferência de novos conhecimentos e tecnologias para a indústria, serviços e
              administração pública.
              <br />
              O INESC TEC pretende ser uma instituição líder em Ciência e Tecnologia, e um dos principais atores nos
              domínios de Informática, Engenharia Industrial e de Sistemas, Redes de Sistemas Inteligentes e Energia.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="pergunta pergunta4">
          <Card.Body>
            <Card.Text className="justifyText">
              Assim, contámos com vários parceiros.
              {this.state.questions.map(question => {
                return (question.chapter === 2 && question.number === 4 ?
                  <>
                    <Form className="p-4">
                      <br />
                      <div>
                        {question.question}
                      </div>
                      <Form.Check
                        type="radio"
                        label={question.answer1}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value="1"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer2}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value="2"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer3}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        value="3"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <Form.Check
                        type="radio"
                        label={question.answer4}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        value="4"
                        onChange={(e) => { this.setState({ answer: e.target.value }) }}
                      />
                      <br />
                      {(() => {
                        if (!this.state.remainingQuestions.some(e => e.id === question.id)) {
                          return (
                            <Button variant="success">Concluída</Button>
                          )
                        } else {
                          return (
                            <Button variant="primary" onClick={this.handleSubmit.bind(this, question)} disabled={!this.validateForm()}>Responder</Button>
                          )
                        }
                      })()}
                      <div>
                        {this.state.submited === true && this.state.answer === question.correct.toString() ? (<Badge variant="success">Success</Badge>) : this.state.submited === true ? (<Badge variant="danger">Danger</Badge>) : (<></>)}
                      </div>
                    </Form></>
                  :
                  <></>
                )
              })
              }
              Temos ainda parcerias internacionais com a CMU Portugal, MIT Portugal e UT Austin Portugal.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="pergunta">
          <Card.Body>
            <Card.Text className="justifyText">
              Parabéns! Concluíste com sucesso a primeira etapa deste jogo. Está na altura de conhecer algumas das
              ferramentas que temos ao teu dispor.
              <br />
              <br />
              <Button variant="info" href="/tasksInst">Questões Práticas</Button>
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
    );
  }
} export default withRouter(Instituicao);
