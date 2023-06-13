import React, { FC, useState, CSSProperties, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel } from './TabPanel'

type TTabberPropTypes = {
  tabs: Array<TTabProp>;
  tabStyles: CSSProperties | Record<string, unknown>;
  tabsStyles?: CSSProperties | Record<string, unknown>;
  onTabClick?: (e: SyntheticEvent, tabIndex: number) => void;
};

type TTabProp = {
  title: string;
  content: React.ReactNode | string;
};

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
});

export const Tabber: FC<TTabberPropTypes> = ({ tabs, tabStyles, tabsStyles, onTabClick }) => {
  const [tabIndexValue, setTabIndexValue] = useState<number>(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabIndexValue(newValue);
    if (onTabClick !== undefined) {
      onTabClick(event, newValue);
    }
  };

  return (
    <>
      <Box>
        <Tabs
          value={tabIndexValue}
          onChange={handleTabChange}
          aria-label='simple tabs example'
          variant='fullWidth'
          indicatorColor='primary'
          sx={tabsStyles}>
          {tabs.map((tab: TTabProp, index: number) => (
            <Tab key={index} label={tab.title} {...a11yProps(index)} sx={tabStyles} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab: TTabProp, index: number) => (
        <TabPanel key={index} value={tabIndexValue} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
};

