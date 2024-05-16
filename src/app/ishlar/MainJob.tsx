import React, { Suspense } from 'react'
import JobPanel from './JobPanel'
import ResultJobs from './ResultJobs'
import Loading from '@/components/Loading'
export default function MainJob() {
    return (
        <div className='flex max-md:flex-col'>
            <JobPanel />
            <Suspense fallback={<Loading/>}>
                <ResultJobs />
            </Suspense>
        </div>
    )
}