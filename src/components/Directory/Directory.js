import React from 'react';
import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../state/selectors/directorySelectors';

const Directory = () => {
  const sections = useSelector(state => selectDirectorySections(state));

  return (
    <DirectoryMenuContainer>
      {sections.map(section => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          linkUrl={section.linkUrl}
          size={section.size}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
