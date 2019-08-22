import React, { useEffect, useState } from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections([
      {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        linkUrl: 'hats'
      },
      {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        linkUrl: 'jackets'
      },
      {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        linkUrl: 'sneakers'
      },
      {
        id: 4,
        title: 'womens',
        size: 'large',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        linkUrl: 'womens'
      },
      {
        id: 5,
        title: 'mens',
        size: 'large',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl: 'mens'
      }
    ]);
  }, []);

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
