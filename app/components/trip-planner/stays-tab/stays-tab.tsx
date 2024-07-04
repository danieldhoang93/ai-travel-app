import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { TbBrandAirbnb, TbBuildingSkyscraper } from 'react-icons/tb';

export default function StaysTab () {
  const [activeTab, setActiveTab] = useState<string | null>('hotels');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="hotels" rightSection={<TbBuildingSkyscraper />}>Hotels</Tabs.Tab>
        <Tabs.Tab value="airbnb" rightSection={<TbBrandAirbnb />}>AirBnbs</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="hotels">Hotels</Tabs.Panel>
      <Tabs.Panel value="airbnb">AirBnbs</Tabs.Panel>
    </Tabs>
  );
}