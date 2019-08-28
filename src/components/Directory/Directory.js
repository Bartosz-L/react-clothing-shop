import React from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../state/selectors/directorySelectors';

const Directory = () => {
  const sections = useSelector(state => selectDirectorySections(state));

  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          linkUrl={section.linkUrl}
          size={section.size}
        />
      ))}
    </div>
  );
};

export default Directory;
