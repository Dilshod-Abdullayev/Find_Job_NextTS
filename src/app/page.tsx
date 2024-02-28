import Header from '@/components/Header/Header'
import SearchPanel from '@/components/SearchPanel/SearchPanel'
import Statistic from '@/components/Statistic/Statistic'
import React from 'react'
export default function page() {
  return (
    <div>
      <Header />
      <SearchPanel />
      <Statistic/>
    </div>
  )
}
