import * as Yup from "yup";

const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;

export const contactSchema = Yup.object().shape(
  {
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    photo: Yup.string().url("آدرس  معتبر نیست"),
    mobile: Yup.string().required("شماره موبایل الزامی میباشد").matches(mobileReg, 'شماره موبایل معتبر نیست'),
    email: Yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامی میباشد"),
    job: Yup.string().nullable(),
    group: Yup.string().required("انتخاب گروه الزامی میباشد"),
    address: Yup.string(),
    moreDetails: Yup.string()
  }
);