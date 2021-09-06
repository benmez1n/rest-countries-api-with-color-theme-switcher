import useCallback, { useEffect,useState } from 'react';
const GetCountryName = (url) => {
    const [data,setData] = useState({})
    const getdata = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }, [url]);
      useEffect(()=>{
          getdata();
      },[getdata])
      return data;
}
 
export default GetCountryName;