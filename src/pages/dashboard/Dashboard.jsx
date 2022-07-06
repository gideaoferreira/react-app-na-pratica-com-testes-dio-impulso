import React from 'react';
import { PropsWithChildren } from 'react';
import { PageProps } from '../typings';
import { useDocumentPageTitle } from '@/utils/useDocumentPageTitle';
import { AppCard } from '@/components/card/AppCard'

import { AppChart } from '@/components/chart/AppChart';
import EmailsOpen from './Higthligths/EmailsOpen';
import LocationChart from './Higthligths/LocationChart';
import { CardInfo, CardInfoType } from './card-info/CardInfo';

export const Dashboard: React.FC<PropsWithChildren<PageProps>> = ({ title }) => {
  useDocumentPageTitle(title);

  const chartData = {
          
    series: [{
      name: 'Leads em 2021',
      data: [11, 32, 45, 32, 34, 52, 4],
    }, {
      name: 'Leads em 2022',
      data: [31, 40, 28, 51, 42, 109, 4],
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'months',
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  
  };

  let dataInfo: Array<CardInfoType> = [
    {
      icon: 'fa-chart-line',
      iconType: 'fas',
      textInfo: '9745',
      label: 'Total de Leads',
      iconColor: '#4CAF50',
      bgIcon: '#F1F8E9',
    },
    {
      icon: 'fa-envelope',
      iconType: 'far',
      textInfo: '76740',
      label: 'Total de emails enviados',
      iconColor: '#42A5F5',
      bgIcon: '#E3F2FD',
    },
    {
      icon: 'fa-heart',
      iconType: 'fas',
      textInfo: '8605',
      label: 'Total ativos',
      iconColor: '#E57373',
      bgIcon: '#FFEBEE',
    },
    {
      icon: 'fa-heart-broken',
      iconType: 'fas',
      textInfo: '1140',
      label: 'Total inativos',
      iconColor: '#FB8C00',
      bgIcon: '#FFF3E0',
    }
  ]

  return (
    <>
      <h5>{title}</h5>
      <div className='row'>
        {dataInfo.map((info: CardInfoType) => {
            return (
              <div className='col-3' key={info.icon}>
                <CardInfo
                  icon={info.icon}
                  iconType={info.iconType}
                  iconColor={info.iconColor}
                  bgIcon={info.bgIcon}
                  textInfo={info.textInfo}
                  label={info.label}
                />
              </div>
            )
          })
        }
      </div>
      <div className='row mt-3'>
        <div className='col-4'>
          <AppCard>
            <AppChart options={chartData.options} series={chartData.series} type="area" />
          </AppCard>
        </div>
        {/* <div className='col-4'>
          <AppCard>
            <h6> Emails abertos por campanhas </h6>
            <hr></hr>
            <EmailsOpen></EmailsOpen>
          </AppCard>
        </div> */}
        <div className='col-4'>
          <AppCard>
            <h6> Leads por estado </h6>
            <hr></hr>
            <LocationChart></LocationChart>
          </AppCard>
        </div>
      </div>
    </>
  )
}
