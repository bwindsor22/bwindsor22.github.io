import React from 'react';
import { Tag } from "@blueprintjs/core";

export default ({article, colorMap}) => {
    const {title, date, docBodyHtml, tags} = article;
    return (
        <div>
            <h4><a href='/articles'>{title}</a></h4>
            <p>{date}</p>
            <p>{tags.map(t => <Tag style={{background: colorMap[t], marginRight: 5}}>{t}</Tag>)}</p>
        </div>
    );
}