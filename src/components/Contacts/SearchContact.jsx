import { useContext } from 'react';
import { ContactContext } from '../../context/contactContext';

import { PURPLE } from "../../helpers/colors";

const SearchContact = () => {
  const { contactSearch } = useContext(ContactContext);

  return (
    <div className="input-group mx-2 w-100" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        onChange={event => contactSearch(event.target.value)}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
