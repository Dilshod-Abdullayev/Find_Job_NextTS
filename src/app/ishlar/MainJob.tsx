import React, { Suspense } from 'react'
import JobPanel from './JobPanel'
import ResultJobs from './ResultJobs'
export default function MainJob() {
    return (
        <div className='flex'>
            <JobPanel />
            <Suspense fallback={'<h1>Loading</h1>'}>
                <ResultJobs />
            </Suspense>
        </div>
    )
}
