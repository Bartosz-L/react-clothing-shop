import React from 'react';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';
import '../../assets/loader.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../state/selectors/shopSelectors';
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem';

const CollectionPage = ({ collection, match }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  } else {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
