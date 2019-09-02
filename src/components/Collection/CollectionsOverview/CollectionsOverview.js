import React from 'react';
import './CollectionsOverview.scss';
import '../../../assets/loader.scss';
import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionForPreview } from '../../../state/selectors/shopSelectors';

const CollectionsOverview = () => {
  const collections = useSelector(state => selectCollectionForPreview(state));

  if (collections) {
    return (
      <div className="collections-overview">
        {collections.map(collection => {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
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
