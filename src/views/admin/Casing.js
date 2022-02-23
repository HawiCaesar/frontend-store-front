import React from 'react';

export default function Casing() {
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
                    Uppercasing and lowercasing
                  </h3>
                </div>
                <div className='block px-4 w-full overflow-x-auto'>
                  <p>Example in german</p>
                  <p style={{ textTransform: 'uppercase' }}>Fleiß</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
