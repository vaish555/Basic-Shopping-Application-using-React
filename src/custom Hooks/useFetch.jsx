import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(url) {

    let [items,setItem]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(false)
    let fetchData=async()=>{
        setLoading(true)
        try{
            let {data}=await axios(url);
            setItem(data);
            setLoading(false)
        }
        catch(err){
            console.log(err)
            setLoading(false);
            setError(true);
        }
        
    } 

    useEffect(()=>{
        fetchData()
    },[])
  return [items,loading,error]
}

export {useFetch}
