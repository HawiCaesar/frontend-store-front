import { useTranslation } from 'react-i18next';
import React from 'react';

// components

import CardStats from 'components/Cards/CardStats.js';

export default function HeaderStats() {
  const { t } = useTranslation();
  return (
    <>
      {/* Header */}
      <div className='relative bg-lightBlue-600 md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle={t('dashboard.stats.trafficCard.traffic')}
                  statTitle='350,897'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron={t('dashboard.stats.trafficCard.lastMonth')}
                  statIconName='far fa-chart-bar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle={t('dashboard.stats.newUsersCard.newUsers')}
                  statTitle='2,356'
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron={t('dashboard.stats.newUsersCard.lastWeek')}
                  statIconName='fas fa-chart-pie'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle={t('dashboard.stats.salesCard.sales')}
                  statTitle='924'
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron={t('dashboard.stats.salesCard.yesterday')}
                  statIconName='fas fa-users'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle={t(
                    'dashboard.stats.performanceCard.performance'
                  )}
                  statTitle='49,65%'
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron={t('dashboard.stats.trafficCard.lastMonth')}
                  statIconName='fas fa-percent'
                  statIconColor='bg-lightBlue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
