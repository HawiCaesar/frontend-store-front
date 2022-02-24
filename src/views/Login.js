import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { AuthContext } from '../contexts/AuthContext';
import { showAlert } from '../toastHelper';

export function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <div className='grid place-items-center mx-2 my-20 sm:my-auto'>
        <div
          className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg'
        >
          <h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
            {t('login.title')}
          </h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = t('login.validations.email.required');
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = t('login.validations.email.invalid');
              }

              if (!values.password) {
                errors.password = t('login.validations.password');
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const response = await login(values);

              if (!response.errorMessage) {
                return navigate('/admin');
              }

              showAlert('error', response.errorMessage);

              setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              errors,
              touched,
              handleSubmit,
              handleBlur,
              isValid,
              dirty
            }) => {
              return (
                <form className='mt-10' onSubmit={handleSubmit}>
                  <label
                    htmlFor='email'
                    className='block text-xs font-semibold text-gray-600 uppercase'
                  >
                    {t('labels.input.email')}
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder={t('labels.input.email')}
                    autoComplete='off'
                    className='block w-full py-3 px-1 mt-2 
                                text-gray-800 appearance-none 
                                border-b-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <span className='text-red-400'>
                    {errors.email && touched.email && errors.email}
                  </span>

                  <label
                    htmlFor='password'
                    className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
                  >
                    {t('labels.input.password')}
                  </label>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder={t('labels.input.password')}
                    autoComplete='off'
                    className='block w-full py-3 px-1 mt-2 mb-4
                                text-gray-800 appearance-none 
                                border-b-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />

                  <span className='text-red-400'>
                    {errors.password && touched.password && errors.password}
                  </span>

                  <button
                    type='submit'
                    className='w-full py-3 mt-10 bg-gray-800 rounded-sm
                                font-medium text-white uppercase
                                focus:outline-none hover:bg-gray-700 hover:shadow-none disabled:opacity-75'
                    disabled={!isValid || !dirty}
                  >
                    {t('buttons.login')}
                  </button>

                  <div className='sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center'>
                    <a href='forgot-password' className='flex-2 underline'>
                      {t('login.forgotPassword')}
                    </a>

                    <p className='flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto'>
                      {t('login.or')}
                    </p>

                    <a href='/register' className='flex-2 underline'>
                      {t('login.createAccount')}
                    </a>
                  </div>
                </form>
              );
            }}
          </Formik>

          <a
            href='/language-selection'
            className='text-center flex-2 underline'
          >
            {t('login.changeLanguage')}
          </a>
        </div>
      </div>
    </div>
  );
}
