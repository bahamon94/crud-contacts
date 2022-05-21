import {Contacts} from "../models";
import {loadAbort} from "../utilities";
import axios from "axios";

export const createContactService = (contact: Contacts): Contacts[] => {
  const controller = loadAbort()
  return {
    call: axios.post<Contacts>('https://bkbnchallenge.herokuapp.com/contacts', contact,
      {signal: controller.signal}),
    controller
  }
}

export const getContact = (id: string): Contacts => {
  const controller = loadAbort()
  return {
    call: axios.get<Contacts>(`https://bkbnchallenge.herokuapp.com/contacts/${id}`,
      {signal: controller.signal}),
    controller
  }
}

export const deleteContact = (id: string): Contacts => {
  const controller = loadAbort()
  return {
    call: axios.delete<Contacts>(`https://bkbnchallenge.herokuapp.com/contacts/${id}`,
      {signal: controller.signal}),
    controller
  }
}
