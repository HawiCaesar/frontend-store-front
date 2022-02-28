import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

export const LanguageSelection = () => {
  const { t, i18n } = useTranslation();
  const [language, changeLanguage] = useState(i18n.language);

  const localeDetails = new Intl.Locale(i18n.language);
  const displayLanguage = new Intl.DisplayNames([localeDetails.language], {
    type: 'language'
  });

  const options = [
    { value: 'en', label: 'English' },
    { value: 'sw', label: 'Kiswahili' }
  ];

  const dropdownOptions = () =>
    options.map((opt) => {
      return {
        value: opt.value,
        label: displayLanguage.of(opt.value)
      };
    });

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <div className='grid place-items-center mx-2 my-20 sm:my-auto'>
        <div
          className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                    px-6 py-10 sm:px-10 sm:py-6 
                    bg-white rounded-lg shadow-md lg:shadow-lg'
        >
          <p>{t('languageSelection.selectPrompt')}</p>

          <Select
            defaultValue={language}
            placeholder={t('languageSelection.select')}
            options={dropdownOptions()}
            onChange={(selected) => {
              i18n.changeLanguage(selected.value);
              changeLanguage(selected.value);
            }}
          />
          <button
            className='w-full py-3 mt-10 bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none'
            onClick={() => window.location.replace('/')}
          >
            {t('languageSelection.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};
