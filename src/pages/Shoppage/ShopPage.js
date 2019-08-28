import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { selectCollections } from '../../state/selectors/shopSelectors';

import CollectionsOverview from '../../components/Collection/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match, collections }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={() => <CollectionsOverview collections={collections} />}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(ShopPage);
