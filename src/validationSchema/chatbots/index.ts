import * as yup from 'yup';

export const chatbotValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  account_id: yup.string().nullable(),
});
