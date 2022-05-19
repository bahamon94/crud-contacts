import React from 'react';
import MainLayout from "../../../shared/layouts/MainLayout";
import Create from "../components/Create";
import {  useSelector } from 'react-redux';
import {AppStore} from "../../../core/redux/store";

const CreatePage: React.FC = () => {
  const userState = useSelector((store: AppStore) => store.contacts);
  return (
    <MainLayout>
      <Create/>
      <p> { JSON.stringify(userState) } </p>
    </MainLayout>
    )
};

export default CreatePage

