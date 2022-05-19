export const createContactAdapter = (contact: any) => ({
  id: contact.id,
  firtsName: contact.firstName,
  lastName: contact.lastName,
  email: contact.email,
  phone: contact.phone
})