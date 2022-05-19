import {Contacts} from "../models";
import {loadAbort} from "../utilities";
import axios from "axios";

export const createContactService = (contact: Contacts) => {
  const controller = loadAbort()
  return {
    call: axios.post<Contacts>('https://bkbnchallenge.herokuapp.com/contacts', contact,
      {signal: controller.signal}),
    controller
  }
}
