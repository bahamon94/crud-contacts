import React from 'react';
import MainLayout from "../../../shared/layouts/MainLayout";
import List from "../components/List";
import InfoContact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <InfoContact />
      </MainLayout>
    </div>
  );
};

export default Home;
