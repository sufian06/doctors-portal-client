import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening
    },
  ]

  return (
    <div className='mt-16'>
      <div className='text-center mb-16'>
        <h3 className='uppercase text-xl font-bold text-primary'>Our Services</h3>
        <h2 className='capitalize text-3xl'>Services we provide</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          servicesData.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;