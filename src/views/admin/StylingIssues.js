import React from 'react';
import { showAlert } from 'toastHelper';

export default function StylingIssues() {
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
                    Styling issues
                  </h3>
                </div>
                <div className='block px-4 w-full overflow-x-auto'>
                  <button
                    onClick={() =>
                      showAlert(
                        'error',
                        'This a notificaton telling the user that they have successfully deactivated a user. This is a repeated notificaton telling the user that they have successfully deactivated a user'
                      )
                    }
                    className='bg-lightBlue-500 text-white active:bg-lightBlue-600 w-20 px-4 py-2 font-bold text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                    type='button'
                  >
                    What's saddening you?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
