import React from 'react';

import VerticalNav4 from '../components/vertical-navs/VerticalNav4';
import HowItWorks3 from '../components/how-it-works/HowItWorks3';

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav4
        content={{
          'brand-mobile': {
            text: 'Dhanai Fruits',
            image: 'nereus-assets/img/nereus-light.png',
            width: '110',
          },
          link1: 'Home',
          link2: 'Fruits',
          link3: 'Vegitables',
          link4: 'Support',
        }}
        bucketMain={[<HowItWorks3 content={null} />]}
      />
    </React.Fragment>
  );
}

