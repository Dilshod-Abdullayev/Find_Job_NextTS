import React from 'react';
import Header from '@/components/Header/Header';
import SearchPanel from '@/components/SearchPanel/SearchPanel';
import Statistic from '@/components/Statistic/Statistic';
export default function Page() {
  return (
    <div>
      <Header />
      <SearchPanel />
      <Statistic />
    </div>
  );
}