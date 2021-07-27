import React from "react";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Quiz from "../Quiz"


export default class Subchap1 extends React.Component {

  state = {
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    userID: '',
  }

  componentDidMount() {
    this.setState({ userID: JSON.parse(localStorage.getItem("user"))["id"] });
    axios.get('http://127.0.0.1:8000/questionLevel/2/1/')
      .then(res => {
        const question1 = res.data['question'];
        console.log(res.data['question']);
        this.setState({ question1 });
      });
  }

  render() {

    return (
      <Container className="p-3 header" >
        <h1 className="">Acolhimento - Instituição</h1>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>1.1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="justifyText">
              Sabias que o INESC TEC é uma instituição privada sem fins lucrativos que se centra em atividades de investigação científica e desenvolvimento tecnológico, transferência de tecnologia, consultoria avançada e formação, e pré-incubação de novas empresas de base tecnológica? Temos um modelo de gestão único e diferenciador, aperfeiçoado ao longo de uma história que conta já com várias décadas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pergunta 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {this.state.question1.map((question) =><p>{question.question}</p>)}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Perguntas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Quiz />
          </AccordionDetails>
        </Accordion>
      </Container>
    );
  }
}
