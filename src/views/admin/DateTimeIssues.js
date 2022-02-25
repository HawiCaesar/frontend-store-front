import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import enGBLocaleData from 'date-fns/locale/en-GB';
import fr from 'date-fns/locale/fr';
import enUS from 'date-fns/locale/en-US';

import 'react-datepicker/dist/react-datepicker.css';

export const datePickerMap = {
  'af-ZA': 'af',
  en: 'en-GB',
  'fr-FR': 'fr'
  // sw: 'sw' Swahili not available in Date-fns, default to en-GB
};

const importDateFNSLocale = async (locale) => {
  return await import('date-fns/locale/' + locale);
};

export default function DateTimeIssues() {
  const { i18n } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());
  const [importedLocale, setImportedLocale] = useState(enGBLocaleData);
  console.log(importedLocale, '&&&&&');

  useEffect(() => {
    importDateFNSLocale(datePickerMap[i18n.language])
      .then((res) => {
        setImportedLocale(res.default);
      })
      .catch((error) => {
        console.log(error, 'IMPORT ERROR');
        setImportedLocale(enGBLocaleData);
      });
  }, [i18n]);

  const localizedDateTime = new Intl.DateTimeFormat(i18n.language, {
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(new Date());

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
                    Localizing date and time
                  </h3>
                </div>
                <div className='block my-10 px-4 w-full overflow-x-auto'>
                  <p>Correctly localized example:</p>
                  <p>{localizedDateTime}</p>

                  <p className='py-2'>Localized date lib based on i18n</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={importedLocale?.formatLong?.date({
                      width: 'short'
                    })}
                    locale={importedLocale}
                  />
                </div>
                <div className='block my-10 px-4 w-full overflow-x-auto'>
                  <p className='py-2'>English (US) calendar</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={enUS?.formatLong?.date({
                      width: 'short'
                    })}
                    locale={enUS}
                  />
                </div>
                <div className='block my-10 px-4 w-full overflow-x-auto'>
                  <p className='py-2'>French Calendar</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={fr?.formatLong?.date({
                      width: 'short'
                    })}
                    locale={fr}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
