import useFetch from "./useFetch";
import {useEffect , useState } from 'react';
import {  Link } from 'react-router-dom'
let url;
const Countries = ({filtra,input,numberWithCommas}) => {
    url = input ? `https://restcountries.com/v2/name/${input}` : "https://restcountries.com/v2/all"
    
    const {data,loading} = useFetch(url);
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        if(input){
           setCountries(data)
        }

        else{
            if(filtra === "All") setCountries(data)
            
            else{

                setCountries(data.filter((country)=>{
                    return country.region === filtra;
                }))

            }

        }

    },[input,data,filtra])

    return ( 
        <div className="countriesList">
            <div className="container">
                {loading && <h1 className="loading">Loading ...</h1>}
                {countries.length ? countries.map(country => {
                        const {flag,name,population,region,capital} = country;
                        return(
                            <Link to={`/${name}`} className="listItem" key={name}>
                                <img src={flag} alt={name}/>
                                <div className="info">
                                    <h2>{name}</h2>
                                    <div><h3>population:</h3><span>{numberWithCommas(population)}</span></div>
                                    {region && <div><h3>region:</h3><span>{region}</span></div>}
                                    {capital && <div><h3>capital:</h3><span>{capital}</span></div>}
                                </div>
                            </Link>
                        )
                    })
                  : <h1 className={loading ? "x" : "loading"} style={{left:"35%"}}>There is no result for your search</h1>}
            </div>
        </div>
    );
}
 
export default Countries;