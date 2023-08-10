import React, {useEffect, useState} from 'react';
import {PageContainer} from "../components/layout/Atomic.tsx";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import {useParams} from "react-router";
import {campData, CampProps} from "../data/camp.ts";
import CampInfo from "../components/camp/CampInfo.tsx";
import ClubInfo from "../components/camp/ClubInfo.tsx";

const Camp = () => {
  const [data, setData] = useState<CampProps | null>();
  const {id} = useParams();

  useEffect(() => {
    // @ts-ignore
    id != null && setData(campData.find(v => v.id == id))
    console.log(data);
  }, [id, data])
  return (

    <PageContainer>

      <Header/>
      {data &&
        <>
      <CampInfo
        camp={data}
      />
        <ClubInfo
        camp={data}
    />
      </>
      }
      <Footer/>
    </PageContainer>
  );
};

export default Camp;
