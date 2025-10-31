import React from 'react';

const ObjectList = ({ objects }) => {
  const bannerUrl = "../public/images/Banner.jpg"; // Link ảnh banner của bạn

  return (
    <section id="objects" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Banner trên cùng */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src={bannerUrl} 
          alt="Banner" 
          style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <h2 style={{ textAlign: 'center' }}>WHO SHOULD LEARN PROGRAMMING IN FPT APTECH?</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {objects.map(obj => (
  <div key={obj.id} style={{ border: '1px solid #ccc', padding: '16px', width: '300px', textAlign: 'center' }}>
    {/* Khung cố định cho ảnh */}
    <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '10px' }}>
      <img 
        src={obj.image} 
        alt={obj.title} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </div>

    <h3>{obj.title}</h3>
    <p>{obj.description}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default ObjectList;
