import React from 'react'
import { committees } from './constant'
import { useParams } from 'react-router-dom'

export default function CommitteePDF() {
    const { id } = useParams()
    console.log(typeof id)
    const filteredCommittee = committees.filter((committee) => (
        committee.id === id
    ))[0]

    console.log(filteredCommittee)
    return (
        <>
            <h1>{filteredCommittee.name}</h1>
            <embed
                src={filteredCommittee.pdf}
                className='com-pdf'
            />
        </>
    )
}
