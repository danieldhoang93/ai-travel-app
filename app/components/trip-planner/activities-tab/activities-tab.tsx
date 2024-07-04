import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { TbBallAmericanFootball, TbBuildingSkyscraper, TbBurger, TbConfetti, TbPyramid, TbRollercoaster, TbSailboat, TbTrees } from 'react-icons/tb';

export default function ActivitiesTab () {
  const [activeTab, setActiveTab] = useState<string | null>('attractions');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="attractions" rightSection={<TbRollercoaster />}>Attractions</Tabs.Tab>
        <Tabs.Tab value="outdoor" rightSection={<TbTrees />}>Outdoor</Tabs.Tab>
        <Tabs.Tab value="museums" rightSection={<TbPyramid />}>Museums</Tabs.Tab>
        <Tabs.Tab value="restaurants" rightSection={<TbBurger />}>Restaurants</Tabs.Tab>
        <Tabs.Tab value="nightlife" rightSection={<TbConfetti />}>Nightlife</Tabs.Tab>
        <Tabs.Tab value="tours" rightSection={<TbSailboat />}>Tours</Tabs.Tab>
        <Tabs.Tab value="shopping" rightSection={<TbSailboat />}>Shopping</Tabs.Tab>
        <Tabs.Tab value="sports" rightSection={<TbBallAmericanFootball />}>Sports</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="attractions">Attractions</Tabs.Panel>
      <Tabs.Panel value="outdoor">Outdoor</Tabs.Panel>
      <Tabs.Panel value="museums">Museums</Tabs.Panel>
      <Tabs.Panel value="restaurants">Restaurants</Tabs.Panel>
      <Tabs.Panel value="nightlife">Nightlife</Tabs.Panel>
      <Tabs.Panel value="tours">Tours</Tabs.Panel>
      <Tabs.Panel value="shopping">Tours</Tabs.Panel>
      <Tabs.Panel value="sports">Sports</Tabs.Panel>
    </Tabs>
  );
}