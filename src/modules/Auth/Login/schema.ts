import * as yup from 'yup';

const scheme = yup.object().shape({
  email: yup.string().required('validation.fieldRequired').email('validation.auth.email_format').trim(),
  password: yup.string().trim().required('validation.fieldRequired').min(6, 'validation.auth.min_password'),
});

export default scheme;
