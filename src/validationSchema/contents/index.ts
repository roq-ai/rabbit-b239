import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  type: yup.string().required(),
  details: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
