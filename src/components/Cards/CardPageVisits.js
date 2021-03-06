import React from 'react';
import { pageVisits } from 'fixtures/pageVisits';
import { useTranslation } from 'react-i18next';
// components

export default function CardPageVisits() {
  const { t } = useTranslation();
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className='font-semibold text-base text-blueGray-700'>
                {t('dashboard.pageVisits.title')}
              </h3>
            </div>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
              <button
                className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
              >
                {t('buttons.seeAll')}
              </button>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  {t('dashboard.pageVisits.table.pageName')}
                </th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  {t('dashboard.pageVisits.table.visitors')}
                </th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  {t('dashboard.pageVisits.table.uniqueVisitors')}
                </th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  {t('dashboard.pageVisits.table.bounceRate')}
                </th>
              </tr>
            </thead>
            <tbody>
              {pageVisits.map((pageVisit, index) => (
                <tr key={index}>
                  <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                    {pageVisit.pageName}
                  </th>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    {pageVisit.visitors}
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    {pageVisit.uniqueVisitors}
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    <i
                      className={`fas fa-arrow-${pageVisit.bounceDirection} ${
                        pageVisit.bounceDirection === 'up'
                          ? 'text-emerald-500'
                          : 'text-orange-500'
                      } mr-4`}
                    ></i>
                    {pageVisit.bounceRate}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
