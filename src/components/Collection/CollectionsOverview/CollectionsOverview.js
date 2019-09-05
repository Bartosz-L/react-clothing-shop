import React from 'react';
import Loader from '../../Loader/Loader';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionForPreview } from '../../../state/selectors/shopSelectors';

const CollectionsOverview = () => {
  const collections = useSelector(state => selectCollectionForPreview(state));

  if (collections) {
    return (
      <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </CollectionsOverviewContainer>
    );
  } else {
    return <Loader />;
  }
};

export default CollectionsOverview;
