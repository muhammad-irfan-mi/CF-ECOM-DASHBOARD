import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider';
import Invoice from './component/Invoice';
import Plan from './component/Plan';

function BillingMain() {
  const context = useContext(ThemeContext)
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    "Plan",
    "Invoice"
  ];

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Plan />;
      case 1:
        return <Invoice />;
      default:
        return <div>No Data</div>;
    }
  };

  return (
    <div className={`h-[89vh] overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
      <div className={` h-[70vh]`}>
        <div className="flex border-b mb-5">
          <div>
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return <button
                key={index} onClick={() => setActiveIndex(index)}
                // onClick={() => setSelectedTab(tab)}
                className={`px-3 p-2 text-lg font-medium ${isActive ?
                  context.mode === 'dark'
                    ? `text-white border-b-2 border-b-white`
                    : 'text-black border-b-2 border-b-black'
                  : context.mode === 'dark' ?
                    `${context.colors.texthover}`
                    : `border-b-2 border-transparent ${context.colors.borderhover}`
                  } focus:outline-none`}
              >
                {tab}
              </button>
            })}
          </div>
        </div>
        <div className='px-5'>{renderContent()}</div>
      </div>
    </div>
  )
}

export default BillingMain
