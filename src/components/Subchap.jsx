import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const App = () => (
  <Container className="p-3 header">
    <h1 className="">Subchapter</h1>

    <p class="bigtext">
    Sabias que o INESC TEC é uma instituição privada sem fins lucrativos que se centra em atividades de investigação científica e desenvolvimento tecnológico, transferência de tecnologia, consultoria avançada e formação, e pré-incubação de novas empresas de base tecnológica? Temos um modelo de gestão único e diferenciador, aperfeiçoado ao longo de uma história que conta já com várias décadas. 
      <br />
      <Button href="/quiz">Questionario</Button>
    </p>
  </Container>
);

export default App;