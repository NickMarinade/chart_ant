import React from 'react';
import { Timeline } from 'antd';

const DeliveryInProgress: React.FC = () => {
 

  return (
    <div>
      <Timeline
        pending="Out for delivery..."
        
        items={[
          {
            color: 'red',
            children: 'Failed to pick up the parcel / 01-07-2023 ',
          },
          {
            color: 'green',
            children: 'Parcel picked up from warehouse / 02-07-2023',
          },
          {
            color: 'green',
            children: 'Parcel is checked by the driver',
          },
        ]}
      />
      
    </div>
  );
};

export default DeliveryInProgress;