import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => { },
  setContacts: () => { },
  setFilteredContacts: () => { },
  contacts: [],
  filteredContacts: [],
  groups: [],
  errors: [],
  deleteContact: () => { },
  createContact: () => { },
  contactSearch: () => { },
});
