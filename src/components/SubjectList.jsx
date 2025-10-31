import React from 'react';

const SubjectList = ({ subjects }) => {
  return (
    <section id="subjects" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>WHAT IS THE COURSE PROGRAM?</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {subjects.map(sub => (
          <div key={sub.id} style={{ width: '200px', textAlign: 'center' }}>
            <img src={sub.logo} alt={sub.name} style={{ width: '80px', height: '80px' }} />
            <h3>{sub.name}</h3>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.
      </p>
    </section>
  );
};

export default SubjectList;
