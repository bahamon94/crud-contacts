import React from 'react';
import {useForm} from "react-hook-form";
import {createContact} from "../../../../core/redux/states/contacts";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useFetchAndLoad} from "../../../../core/hooks";
import {createContactService} from "../../../../core/services/contact.services";
import { useDispatch} from "react-redux";
import {createContactAdapter} from "../../../../core/adapters/contact.adapter";
import { useSnackbar } from "notistack";
import {Contacts} from "../../../../core/models";

const Create: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad()
  const  dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Contacts>();

  const onSubmit = async data => {

    try {
      const contact = await callEndpoint(createContactService(data))
      dispatch(createContact(createContactAdapter(contact.data)))
      enqueueSnackbar('Contact create succesfully', { variant: "success" })
      cleanForm()
    } catch (e) {
      console.log(e)
      enqueueSnackbar(e.response.data.message, { variant: "error" })
    }
  }

  const cleanForm = () => {
    document.getElementById('form-contact').reset()
  }

  return (
    <>
      <Box
        component="form"
        id="form-contact"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <Typography variant="h3" component="h2">
          Create contact
        </Typography>

        <div>
          <TextField
            required
            id="firstName"
            name="firtsName"
            label="Firts Name"
            margin="dense"
            {...register('firstName', { required: 'Firts Name is required' })}
            error={errors.firstName ? true : false}
            helperText={errors.firstName?.message }
          />

          <TextField
            id="outlined-error-helper-text"
            label="Last Name"
            name="lastName"
            margin="dense"
            {...register('lastName', { required: 'Last Name is required' })}
            error={errors.lastName ? true : false}
            helperText={errors.lastName?.message }
          />

        </div>
        <div>
          <TextField
            id="outlined-error-helper-text"
            label="Email"
            name="email"
            margin="dense"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
            error={errors.email ? true : false}
            helperText={errors.email?.message }

          />

          <TextField
            id="outlined-error-helper-text"
            label="Phone"
            name="phone"
            margin="dense"
            {...register('phone', { required: 'Phone is required' })}
            error={errors.phone ? true : false}
            helperText={errors.phone?.message  }
          />

        </div>
        <div>
          <Button
            color="info"
            fullWidth={true}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Create
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Create
