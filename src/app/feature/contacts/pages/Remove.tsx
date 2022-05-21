import React, {useEffect, useState} from 'react';
import MainLayout from "../../../shared/layouts/MainLayout";
import InfoContact from "../components/Contact";
import {useParams} from "react-router-dom";
import {useFetchAndLoad} from "../../../core/hooks";
import {getContact} from "../../../core/services/contact.services";
import LazyPage from "../../../shared/LazyPage";
import {RenderIF} from "../../../core/utilities/RederIf";
import {Typography} from "@mui/material";
import {createContactAdapter} from "../../../core/adapters/contact.adapter";
import {Contacts} from "../../../core/models";

const Remove: React.FC = () => {
  const [contact, setContact] = useState<Contacts>(null);
  const { id } = useParams()
  const { loading, callEndpoint } = useFetchAndLoad();

  const getApiData = async () => {
    const contact = await callEndpoint(getContact(id))
    setContact(createContactAdapter(contact.data))
  }

  useEffect(() => {
     getApiData()
  }, [id]);


  return (
    <div>
      <MainLayout>
        <RenderIF isTrue={loading} >
          <LazyPage />
        </RenderIF>
        <RenderIF isTrue={!loading && contact} >
          <InfoContact contact={contact}/>
        </RenderIF>
        <RenderIF isTrue={!loading && !contact} >
          <Typography variant="subtitle1" component="div">
            Contact not yet
          </Typography>
        </RenderIF>

      </MainLayout>
    </div>
  );
};

export default Remove;
