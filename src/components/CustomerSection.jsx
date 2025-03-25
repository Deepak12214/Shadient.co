import React from 'react';
import CustomerCard from './CustomerCard';

const customers = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
    name: 'Brooklyn Simmons',
    role: 'manam',
    description:
      'Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
    name: 'Esther Howard',
    role: 'Offmax',
    description:
      'Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Arlene McCoy',
    role: 'bloopixel',
    description:
      'Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas quam gravida tempor. Libero, consectetur urna eu enim magna. Est.',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Jane Cooper',
    role: 'uppsell',
    description:
      'Amet aliquam, volutpat nibh, duis sed ut. Vehicula proin consectetur risus dictumst non netus consequat et tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.',
  },
];

const CustomerSection = () => {
  return (
    <section className="bg-black px-6 md:px-20 py-16 text-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold text-white">Hear what our customers say :)</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8   flex items-center justify-center">
              <img src='/left.svg' className="w-12 h-12 text-[#FFA800]" />
            </button>
            <button className="w-8 h-8   flex items-center justify-center">
              <img src='/right.svg' className="w-12 h-12 text-[#FFA800]" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {customers.map((customer, idx) => (
            <CustomerCard
              key={idx}
              avatarUrl={customer.avatarUrl}
              name={customer.name}
              role={customer.role}
              description={customer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
