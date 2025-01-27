import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ContextProvider';
import Pricing from './Pricing';
import PricingQuery from './PricingQuery';
import BillingNote from './BillingNote';

function Plan() {
  const context = useContext(ThemeContext)
  return (
    <div>
      <div className={`${context.colors.bgcolor} ${context.colors.textColor}`}>
        <Pricing />
        <div>
          <h1 className='text-center mt-5 pb-10'>* For billing related queries, contact us through support chat or mail us at team@getworkfolio.com</h1>
        </div>
        <div className='pb-5'>
          <PricingQuery />
        </div>
        <div className='pb-8'>
          <BillingNote />
        </div>
      </div>
    </div>
  );
}

export default Plan;
