import React from 'react';
import { connect } from 'react-redux'
import articleList from '../server/article-list.js'
import ArticleDisplay from './article-display.js'
import { Pre } from "@blueprintjs/core";

class ArticleView extends React.Component{
  render() {
    const {articleKey, colorMap, state} = this.props;
    if(articleKey in articleList){
      return ArticleDisplay({article:articleList[articleKey], colorMap})
    }
    return <div>
      `No article found with number {articleKey}.`
      {JSON.stringify(state)}
    </div>
  }
}

function mapStateToProps(state, ownProps) {
  const colorMap = state.articleIndex.colorMap;
  const articleKey = ownProps.match.params.articleKey;
  return {
    articleKey,
    colorMap,
    state
  }
}

export default connect(mapStateToProps)(ArticleView)
