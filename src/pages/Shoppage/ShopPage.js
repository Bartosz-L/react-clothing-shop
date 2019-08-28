import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview';
import { loadShopItems } from '../../state/actions/shopActions';

const ShopPage = ({ loadShopItems, collections }) => {
  useEffect(() => {
    loadShopItems();
  }, [loadShopItems]);

  return (
    <>
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(
  mapStateToProps,
  { loadShopItems }
)(ShopPage);
