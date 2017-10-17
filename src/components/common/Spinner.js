import React from 'react';

import { PacmanLoader } from 'react-spinners'

const Spinner = () => (
  <div className="Spinner">
    <div style={{ width: '30px', margin: 'auto' }}>
      <PacmanLoader color='#28a745' />
    </div>
  </div>
);

export default Spinner;
