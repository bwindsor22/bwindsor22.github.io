import React from 'react';
import { ArticleIndex } from '../article-index/article-index';
import { Container, Row, Col } from 'react-bootstrap';

import hike from './hike.jpg'
export const Home = () => {
  return <Col>
      <Row>
        <Col>
          <img src={hike} />
        </Col>
        <Col style={{display:'flex', alignItems: 'center'}}>
          <Row className="align-items-center">
            <Col>
              <p><i>Each day a step at a time.</i></p>
              <p>A site by Brad Windsor.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
}
