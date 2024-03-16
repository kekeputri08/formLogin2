// components/tamplates/AboutPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage: React.FC = () => {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://take-home-test-api.nutech-integrasi.app/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();

    
    return () => {
    };
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      {aboutData ? (
        <div>
          <h3>{aboutData.title}</h3>
          <p>{aboutData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutPage;
