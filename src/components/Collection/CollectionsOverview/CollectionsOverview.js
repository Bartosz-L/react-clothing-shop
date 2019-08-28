import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './CollectionsOverview.scss';
import { loadShopItems } from '../../../state/actions/shopActions';
import { selectCollections } from '../../../state/selectors/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ loadShopItems, collections }) => {
  useEffect(() => {
    loadShopItems();
  }, [loadShopItems]);

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
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(
  mapStateToProps,
  { loadShopItems }
)(CollectionsOverview);
