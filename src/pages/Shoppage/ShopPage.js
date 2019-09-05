import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const CollectionsOverview = lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
);
const CollectionPage = lazy(() => import('../CollectionPage/CollectionPage'));

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Suspense fallback={<Loader />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
