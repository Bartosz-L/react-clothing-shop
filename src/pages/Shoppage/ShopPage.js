import React, { useState, useEffect } from 'react';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview';

const ShopPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(SHOP_DATA);
  }, [collections]);

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

export default ShopPage;
