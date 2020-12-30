import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be 2 characters long"),
  size:yup.string().oneOf(['Small','Medium','Kiddie Pool']).required(),
  instructions:yup.string(),
  cheese:yup.boolean(),
  ham:yup.boolean(),
  pineapple:yup.boolean(),
  chicken:yup.boolean()
});