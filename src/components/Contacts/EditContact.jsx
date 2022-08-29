import { useEffect, useContext } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useImmer } from "use-immer"
import { toast } from "react-toastify"

import { ContactContext } from "../../context/contactContext";
import { getContact, updateContact } from "../../services/contactService";
import { Spinner } from "../";
import { COMMENT, ORANGE, PURPLE } from "../../helpers/colors";
import { contactSchema } from "../../validations/contactValidation"

const EditContact = () => {
  const { contactId } = useParams();
  const {
    setContacts,
    setFilteredContacts,
    loading,
    setLoading,
    groups,
    contactSearch,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const [contact, setContact] = useImmer({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: contactData } = await getContact(contactId);
        setLoading(false)
        setContact(contactData);
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  const submitForm = async (values) => {
    try {
      setLoading(true);
      const { data, status } = await updateContact(values, contactId);
      if (status === 200) {
        toast.info("مخاطب با موفقیت ویرایش شد", { icon: "✏️" })
        setLoading(false);

        setContacts((draft) => {
          const contactIndex = draft.findIndex(c => c.id === parseInt(contactId));
          draft[contactIndex] = { ...data }
        });
        setFilteredContacts((draft) => {
          const contactIndex = draft.findIndex(c => c.id === parseInt(contactId));
          draft[contactIndex] = { ...data }
        })
        contactSearch(null)
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3 d-flex flex-column align-items-center overflow-hidden">
            <div className="container">
              <div className="row my-2">
                <div className="col text-center">
                  <p className="h4 fw-bold" style={{ color: ORANGE }}>
                    ویرایش مخاطب
                  </p>
                </div>
              </div>
              <hr className="" style={{ backgroundColor: ORANGE }} />
              <div
                className="row p-2 w-100 w-md-75 mx-auto d-flex flex-md-row align-items-sm-center flex-column-reverse"
                style={{ backgroundColor: "#44475a", borderRadius: "1em" }}
              >
                <div className="col-12 col-md-8">
                  <Formik
                    initialValues={contact}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                      submitForm(values);
                    }}>

                    <Form>
                      <div className="mb-2">
                        <Field
                          name="fullname"
                          type="text"
                          className="form-control fw-bold"
                          placeholder="نام و نام خانوادگی"
                        />
                        <ErrorMessage name="fullname" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="photo"
                          type="text"
                          className="form-control"
                          placeholder="آدرس تصویر"
                        />
                        <ErrorMessage name="photo" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="mobile"
                          type="text"
                          className="form-control"
                          placeholder="شماره موبایل"
                        />
                        <ErrorMessage name="mobile" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="آدرس ایمیل"
                        />
                        <ErrorMessage name="email" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="job"
                          type="text"
                          className="form-control"
                          placeholder="شغل"
                        />
                        <ErrorMessage name="job" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="group"
                          as="select"
                          className="form-control"
                        >
                          <option value="">انتخاب گروه</option>
                          {groups.length > 0 &&
                            groups.map((group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage name="group" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="address"
                          as="textarea"
                          className="form-control placeholder-white"
                          placeholder="آدرس"
                        />
                        <ErrorMessage name="moreDetails" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mb-2">
                        <Field
                          name="moreDetails"
                          as="textarea"
                          className="form-control placeholder-white"
                          placeholder="توضیحات بیشتر"
                        />
                        <ErrorMessage name="moreDetails" render={msg => <div className="text-danger text-end my-1">{msg}<i class="fas fa-exclamation mx-2"></i></div>} />
                      </div>
                      <div className="mx-2">
                        <input
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: PURPLE }}
                          value="ویرایش مخاطب"
                        />
                        <Link
                          to={"/contacts"}
                          className="btn mx-2"
                          style={{ backgroundColor: COMMENT }}
                        >
                          انصراف
                        </Link>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div className="col-12 col-md-4 mb-2 m-sm-0">
                  <img
                    alt=""
                    src={contact.photo ? contact.photo : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"}
                    className="img-fluid rounded mb-1 mb-md-0"
                    style={{ border: `1px solid ${PURPLE}` }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-1">
              <img
                alt=""
                src={require("../../assets/man-taking-note.png")}
                height="300px"
                style={{ opacity: "60%" }}
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EditContact;
