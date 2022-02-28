import React from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export default function Concatenation() {
  const [count, setCount] = React.useState(0);
  const { user } = React.useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-12 px-4'>
          <div
            className={
              'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'
            }
          >
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3
                    className={
                      'font-semibold text-lg text-blueGray-700 text-white'
                    }
                  >
                    {t('concatenation.title')}
                  </h3>
                </div>
                <div className='block px-4 w-full overflow-x-auto'>
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                    type='button'
                  >
                    {t('concatenation.button')}
                  </button>
                  <p>
                    {user.first_name} {t('concatenation.changed')} {count}{' '}
                    {t('concatenation.times')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
