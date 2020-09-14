import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
  return <Container>
      <Col>
        <div>
          <h1> About </h1>
          <p> Hello! I'm Brad! I like code and I like people. <br />
          On this blog I talk about programming, expecially the things I'm learning through my master's program. Opinions are my own. </p>

          <h4> Career </h4>
          <p> I work on natural language processing in finance. In the past I've been a project manager and data engineer. </p>

          <h4> Volunteer </h4>
          <p> I've taught CS with Microsoft <a href='https://www.microsoft.com/en-us/teals'>TEALS</a>,
            consulted pro-bono with <a href='https://www.digital.nyc/investors/deltanyc-better-pro-bono-tech'>Delta NYC</a>,
            and <a href='https://github.com/bwindsor22/speechr'>track</a> hate speech online. I've phone banked for 3 political campaigns; economic mobility is my cause of choice.</p>

          <h4> Spare Time </h4>
          <p> Talk to me about glass blowing, marathons, pop music, or any <a href='https://a24films.com/films'>movie by A24</a>.</p>

          <h4> More About </h4>
          <p> You can follow me on <a href="https://twitter.com/windsor_brad">twitter</a>, <a href='https://www.linkedin.com/in/brad-windsor-3ba33727/'>LinkedIn</a>, or <a href="https://github.com/bwindsor22">github</a>. My email is bwindsor22@gmail.com.</p>
        </div>
      </Col>
    </Container>
}
