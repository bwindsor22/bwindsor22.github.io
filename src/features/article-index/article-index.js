import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  setSelection,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './article-index-slice';
import { Container, Row, Col } from 'react-bootstrap';
import AsyncSelect from 'react-select'

import ArticlePreview from './article-preview';

export function ArticleIndex() {
  const allArticles = useSelector((state) => state.articleIndex.articles);
  const selectedArticles = useSelector((state) => state.articleIndex.selectedArticles);
  const allTags = useSelector((state) => state.articleIndex.allTags);
  const colorMap = useSelector((state) => state.articleIndex.colorMap);
  const selectedTags = useSelector((state) => state.articleIndex.selectedTags);
  const dispatch = useDispatch();
  const options = allTags.map((a) => { return {value: a, label: a} })

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Articles</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            {(selectedArticles.length > 0 ? selectedArticles : allArticles).map((a) => <ArticlePreview article={a} colorMap={colorMap} />)}
          </Col>
          <Col xs={3}>
            <p>Filter by tag</p>
            <AsyncSelect
              options={options}
              isMulti
              onChange={(val) => dispatch(setSelection(val))}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
