import React from 'react';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './CollectionPreview.styles';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  const handleTitleClick = () => {
    history.push(`${match.path}/${routeName}`);
  };

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={handleTitleClick}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
