import React from 'react';
import './CollectionsOverview.scss';
import '../../../assets/loader.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  if (collections) {
    return (
      <div className="collections-overview">
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    );
  }
};

export default CollectionsOverview;
