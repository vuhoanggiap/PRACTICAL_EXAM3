import React from 'react';
import subjects from '../assets/subjects.json';
import SubjectList from '../components/SubjectList';

const SubjectsPage = () => {
  return (
    <div>
      <SubjectList subjects={subjects} />
    </div>
  );
};

export default SubjectsPage;
