import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Button, Tag } from "@blueprintjs/core";
import { Container, Row, Col } from 'react-bootstrap';

export default ({article, colorMap}) => {
    const {title, date, docBodyHtml, tags} = article;
    return (
      <Col>
        <Row>
          <Col>
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{tags.map(t => <Tag style={{background: colorMap[t], marginRight: 5}}>{t}</Tag>)}</p>
            <div dangerouslySetInnerHTML={{__html: docBodyHtml}} />
            <br />
            <Link to='/articles'>
              <Button>
                Back to list
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    );
}
