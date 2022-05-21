import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Typography,} from "@mui/material";
import {Contacts} from "../../../../core/models";
import {useFetchAndLoad} from "../../../../core/hooks";
import {deleteContact} from "../../../../core/services/contact.services";
import { useSnackbar } from "notistack";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeContact} from "../../../../core/redux/states/contacts";

interface InfoContactProps {
  contact: Contacts
}
const InfoContact: React.FC<InfoContactProps> = ({ contact }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { callEndpoint } = useFetchAndLoad()
  const  dispatch = useDispatch()

  const navigate = useNavigate()

  const [idContact, setIdContact] = useState('');

  useEffect(() => {
    setIdContact(contact.id)
  }, []);


  const deleteApiData = async () => {
   const contact = await callEndpoint(deleteContact(idContact))
    dispatch(removeContact(contact.data))
  }

  const handleRemove = () => {
    try {
      deleteApiData()
      enqueueSnackbar('Contact remove', { variant: "info" })
      navigate('/contacts')
    } catch (e) {
      enqueueSnackbar(e.response.data.message, { variant: "error" })
    }
  }

  return (
      <Card>
        <CardContent md={{ maxWidth: '100%' }}>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Contact information
          </Typography>

          <Typography variant="h5" component="div">
           Nombre:  { contact.firstName } { contact.lastName }
          </Typography>
          <Typography variant="h6" component="div">
          Email: { contact.email }
        </Typography>

          <Typography variant="h6" component="div">
           Phone:  { contact.phone }
          </Typography>
      </CardContent>

        <CardActions>
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={ handleRemove }
          >
            Remove
          </Button>
        </CardActions>

      </Card>

  );
};

export default InfoContact;
