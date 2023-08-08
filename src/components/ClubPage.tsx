import React from 'react';
import {PageContainer} from "./Atomic.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const ClubPage = () => {
  return (
    <PageContainer>
      <Header/>
      <ClubIntroduce/>
      <ClubVideo/>
      <Footer/>
    </PageContainer>
  );
};

export default ClubPage;