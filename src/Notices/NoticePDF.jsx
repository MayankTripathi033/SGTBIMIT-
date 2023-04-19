import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import { Loader2 } from '../Components'


export default function NoticePDF() {
  const [isPending, setIsPending] = useState(true)

  const { id } = useParams()
  const { data: notices } = useFetch("http://localhost:5000/Notice/Notice_Data_Display")

  const filteredNotice = notices ? notices.filter((notice) => (
    notice._id === id
  ))[0] : ''

  useEffect(() => {
    setIsPending(false)
  }, [])
  return (
    <>
      {isPending && <Loader2 />}
      {!isPending &&
        <>
          <h1 
          style={{
            fontFamily: "SF Pro Display-Bold"
          }}
          >{filteredNotice.Name}</h1>
          <embed
            src={`http://localhost:5000/Notice/Notice_File_Display/${id}`}
            className='embed-pdf'
            type='application/pdf'
          >
          </embed>
        </>
      }
    </>
  )
}
