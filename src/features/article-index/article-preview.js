import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Tag } from "@blueprintjs/core";

export default ({article, colorMap}) => {
    const history = useHistory();
    const {date, docBodyHtml, key, tags, title} = article;
    return (
        <div>
            <h4>
              <a
                onClick={() => history.push(`/article/${key}`)}
                style={{color:'#007bff'}}
                >
                  {title}
              </a>
            </h4>
            <p>{date}</p>
            <p>{tags.map(t => <Tag style={{background: colorMap[t], marginRight: 5}}>{t}</Tag>)}</p>
        </div>
    );
}
