import React from 'react';
import './CollectionsOverview.scss';
import '../../../assets/loader.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  if (collections) {
    return (
      <div className="collections-overview">
        {Object.keys(collections).map(collection => {
          return (
            <CollectionPreview
              key={collections[collection].id}
              title={collections[collection].title}
              items={collections[collection].items}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
};

export default CollectionsOverview;
