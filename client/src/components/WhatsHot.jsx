import React from 'react';
import ChristmasBox from './ChristmasBox';
import NewYearBox from './NewyearBox';
import ValentineBox from './ValentineBox';

const WhatsHot = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-grow text-center">
          <h2 className="[font-family:'Inria_Serif',Helvetica] text-2xl font-bold">
            WHAT'S HOT
          </h2>
        </div>
        <a href="/subscribe" className="text-base md:text-xs font-thin whitespace-nowrap">
          GET STARTED {'>'}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChristmasBox />
        <NewYearBox />
        <ValentineBox />
      </div>
    </div>
  );
};

export default WhatsHot;
