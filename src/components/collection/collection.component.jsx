import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection.styles.scss";

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 class="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collection;
