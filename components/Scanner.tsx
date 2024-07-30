import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DocumentScanAnimation from './Animations/DocumentScanAnimation';
import SignStampAnimation from './Animations/SignStampAnimation';
import MultiplePageScanAnimation from './Animations/MultiplePageScanAnimation';
import UniqueFiltersAnimation from './Animations/UniqueFiltersAnimation';
import AllRoundConversionAnimation from './Animations/AllRoundConversionAnimation';

interface TabData {
  id: number;
  title: string;
  sub_title: string;
  text: string;
  url: string;
  icon: string;
  active_icon: string;
  component: JSX.Element;
}

export default function Scanner() {
  const data: TabData[] = [
    {
      id: 1,
      title: 'Scan with Ease',
      sub_title: 'Document Scanner',
      text: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format.',
      url: '#',
      icon: '/assets/images/icons/document_scanner_icon.svg',
      active_icon: '/assets/images/icons/document_scanner_icon_active.svg',
      component: <DocumentScanAnimation />,
    },
    {
      id: 2,
      title: 'One-Tap Focus',
      sub_title: 'Sign & Stamp',
      text: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
      url: '#',
      icon: '/assets/images/icons/sign_stamp_icon.svg',
      active_icon: '/assets/images/icons/sign_stamp_icon_active.svg',
      component: <SignStampAnimation />,
    },
    {
      id: 3,
      title: 'Multiple Page Scan',
      sub_title: 'Batch Scanning',
      text: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
      url: '#',
      icon: '/assets/images/icons/batch_scanning_icon.svg',
      active_icon: '/assets/images/icons/batch_scanning_icon_active.svg',
      component: <MultiplePageScanAnimation />,
    },
    {
      id: 4,
      title: 'Unique Filters',
      sub_title: 'Advanced filters',
      text: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
      url: '#',
      icon: '/assets/images/icons/advanced_filters_icon.svg',
      active_icon: '/assets/images/icons/advanced_filters_icon_active.svg',
      component: <UniqueFiltersAnimation />,
    },
    {
      id: 5,
      title: 'All-Round Conversion',
      sub_title: 'export & share',
      text: 'Export your scans as PDF, JPG, ZIP, TXT and Word.',
      url: '#',
      icon: '/assets/images/icons/export_share_icons.svg',
      active_icon: '/assets/images/icons/export_share_icons_active.svg',
      component: <AllRoundConversionAnimation />,
    },
  ];

  const [activeTab, setActiveTab] = useState<TabData>(data[0]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center sm:items-start">
      <div className="xl:w-1440 bg-white flex flex-col justify-center w-full sm:py-6 sm:px-6 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full px-32 flex items-center lg:px-20 md:px-8 sm:flex-col-reverse sm:justify-center sm:p-0"
          >
            <figure className="sm:w-full sm:flex sm:items-center sm:justify-center">
              {activeTab.component}
            </figure>
            <div className="flex flex-col gap-1 items-end h-full justify-center text-right flex-1 sm:text-center sm:items-center">
              <strong className="text-base font-extrabold text-primary_blue uppercase sm:text-xs">
                {activeTab.sub_title}
              </strong>
              <h2 className="font-bold text-5xl sm:text-2xl">
                {activeTab.title}
              </h2>
              <p className="text-xl leading-8 tracking-wide sm:text-xs my-8 sm:my-3 sm:leading-5">
                {activeTab.text}
              </p>
              <a
                href={activeTab.url}
                title={activeTab.title}
                className="px-6 h-54 border-05 border-button_border rounded-sm sm:mt-0 flex items-center sm:h-12"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="w-full overflow-x-auto border-t border-opacity-08">
          <div className="w-full flex items-center min-w-1260 sm:min-w-920 xl:w-full">
            {data.map((item, index) => (
              <button
                onClick={() => setActiveTab(item)}
                key={item.id}
                className={`h-124 flex items-center sm:h-auto  lg:h-28 sm:py-3 sm:px-6 justify-center hover:bg-primary_blue hover:bg-opacity-5 flex-auto ${index !== data.length - 1 && 'border-r border-opacity-08'}`}
              >
                <div className="flex items-center gap-4 lg:gap-3 sm:flex-col sm:gap-2">
                  <figure
                    className={`relative w-14 h-14 sm:w-10 sm:h-10 rounded-full border border-opacity-08 flex items-center justify-center`}
                  >
                    <svg
                      width="62"
                      height="62"
                      viewBox="0 0 60 60"
                      className="absolute -left-1 -top-1 sm:-left-[3px] sm:-top-3 sm:w-11"
                    >
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        className={`circle-border ${activeTab.id === item.id ? 'animate' : ''}`}
                      />
                    </svg>
                    <img
                      src={
                        activeTab.id === item.id ? item.active_icon : item.icon
                      }
                      width={32}
                      height={32}
                      alt={item.title}
                      className="sm:w-6 sm:h-6 absolute z-10"
                    />
                  </figure>
                  <span className="text-xl font-medium lg:text-lg sm:text-lg">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
