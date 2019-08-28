import React from 'react';
import './CollectionPage.scss';
import '../../assets/loader.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../state/selectors/shopSelectors';
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem';

const CollectionPage = ({ collection, match }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
