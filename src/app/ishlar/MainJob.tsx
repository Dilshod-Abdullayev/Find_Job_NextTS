import React from 'react'
import JobPanel from './JobPanel'
import ResultJobs from './ResultJobs'

export default function MainJob() {
    return (
        <div className='flex'>
            <JobPanel />
            <ResultJobs />
        </div>
    )
}
