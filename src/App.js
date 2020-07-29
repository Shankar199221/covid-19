import React,{useState,useEffect} from 'react';
import './App.css';
import ContryList from './ContryList';
import Card from './Card';



function App() {
   
  const URL = "https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases&allowNull=true";
  const [fecth,setFecth] = useState()
  useEffect(()=>{
     const getData = async ()=>{
             await fetch(URL)
             .then(res => res.json([]))
             .then(data => {
             
               const country = data.map((data)=>({
                 id:data.countryInfo._id,
                name:data.country,
                flag:data.countryInfo.flag,
                recovered:data.recovered,
                deaths:data.deaths,
                totalCases:data.cases,
                actve:data.active,
               }))
               setFecth(country)
             })
            }
    getData()
  },[])
 console.log(fecth)

  
 return(
   <div className="app">
     <h1>Covid App</h1>
    
      <div className="container">
          <div className="container__header">
             <img className="container__header__img" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg" alt="logo" />
            <div className="container__header__sub">
              <h2>Today's Report</h2>
              <h1  className="container__header__h1">COVID-19</h1>
            </div>
             
          </div>
          <div className="container__body">
            <div className="container__body__sidebar">
              <h3>Contries List</h3>
              
              {fecth ? (fecth.map((data)=>{
                return <div key={data.name} className="lists">
                  <ContryList name={data.name} totalCases={data.totalCases}/>
                </div>
              })): <h1>Loadind Contry List ....</h1>}
              
            </div>
            <div className="container__body__main">
              {fecth ? (fecth.map((data)=>{
                console.log(data,"mappng")
                return    <Card key={data.name} name={data.name} flagCountry={data.flag}  recovered={data.recovered} deaths={data.deaths} actve={data.actve} />
                  
                
                })) :<h1>Loadind Data ....</h1>}
            </div>
          </div>
      </div>
   </div>
 )
}

export default App;
