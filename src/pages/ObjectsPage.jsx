import React from 'react';
import objects from '../assets/objects.json';
import ObjectList from '../components/ObjectList';

const ObjectsPage = () => {
  return (
    <div>
      <ObjectList objects={objects} />
    </div>
  );
};

export default ObjectsPage;
