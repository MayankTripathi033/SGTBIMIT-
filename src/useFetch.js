import { useEffect, useState } from 'react'


export default function  useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then(result => result.json())
        .then(data => setData(data))
      }, [url])
      return data
}
