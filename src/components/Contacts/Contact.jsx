import { Link } from "react-router-dom";

import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row d-flex flex-sm-row align-items-sm-center  justify-content-sm-around flex-column align-items-start justify-content-center">
            <div className="col-xl-4 col-lg-3 col-md-2 col-sm-4 d-md-block d-none">
              <img
                src={contact.photo ? contact.photo : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"}
                alt={contact.fullname}
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded "
              />
            </div>
            <div className="col-xl-7 col-lg-8 col-md-9 col-sm-7 col-sm-10 col-12">
              <ul className="list-group  p-0">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bolder">{contact.fullname}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact.mobile}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 col-12 d-flex flex-sm-column align-items-sm-center mt-sm-0 flex-row justify-content-center mt-2">
              <Link
                to={`/contacts/${contact.id}`}
                className="btn my-1  mx-1"
                style={{ backgroundColor: ORANGE }}
              >
                <i className="fa fa-eye" />
              </Link>

              <Link
                to={`/contacts/edit/${contact.id}`}
                className="btn my-1 mx-sm-0 mx-1"
                style={{ backgroundColor: CYAN }}
              >
                <i className="fa fa-pen" />
              </Link>
              <button
                onClick={deleteContact}
                className="btn my-1 mx-sm-0 mx-1"
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
