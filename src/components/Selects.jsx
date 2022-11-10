import React from 'react';

import Brown_Mountain from '../assets/brown mountain.jpg';
import Uzbekistan from '../assets/uzbekistan.jpg';
import Li_river from '../assets/li river.jpg';
import Turkey from '../assets/turkey.jpg';
import Milan from '../assets/milan.jpg';
import Kilimanjaro from '../assets/kilimanjaro.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Brown_Mountain} text="Brown Mountain" />
      <SelectsCard bg={Uzbekistan} text="Uzbekistan" />
      <SelectsCard bg={Li_river} text="Li River" />
      <SelectsCard bg={Turkey} text="Turkey" />
      <SelectsCard bg={Milan} text="Milan" />
      <SelectsCard bg={Kilimanjaro} text="Kilimanjaro" />
    </div>
  );
}

export default Selects;