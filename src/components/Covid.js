// import React, { useEffect,useState } from 'react'
// import './Covid.css';

// const Covid = () => {
//     const [data,setData] = useState([]);
//     const  getCovidData =async()=>
//     {   
//         try {
//             const respns =  await fetch('https://data.covid19india.org/data.json');
//           const actualData  = await respns.json();
//           console.log(actualData.statewise[0]);
//           setData(actualData.statewise[0]);
//         } catch (error) {
//             console.log(error);
//         }
     
//     }


//     useEffect(() => {
//        getCovidData();
//     }, []);
    

//   return (
//     <>
//     <section>
//     <h1>LIVE</h1>
//       <h2>COVID-19 CORONA VIRUS TRACKER</h2>

//       <ul>
//           <li className='card' style={{backgroundColor:"blue"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>OUR</span> COUNTRY</p>
//                            <p className="card__total card__small">INDIA</p>
//                        </div>
//               </div>

//           </li>

//           <li className='card' style={{backgroundColor:"green"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>TOTAL</span> RECOVERED</p>
//                            <p className="card__total card__small">{data.recovered}</p>
//                        </div>
//               </div>

//           </li>

//           <li className='card' style={{backgroundColor:"gray"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>TOTAL</span> CONFIRMED</p>
//                            <p className="card__total card__small">{data.confirmed}</p>
//                        </div>
//               </div>

//           </li>

//           <li className='card' style={{backgroundColor:"yellow",color:"black"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>TOTAL</span> DEATH</p>
//                            <p className="card__total card__small">{data.deaths}</p>
//                        </div>
//               </div>

//           </li>

//           <li className='card' style={{backgroundColor:"pink"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>TOTAL</span> ACTIVE</p>
//                            <p className="card__total card__small">{data.active}</p>
//                        </div>
//               </div>

//           </li>

//           <li className='card'   style={{backgroundColor:"crimson"}}>
//               <div className="card__main">
//                        <div className="card__inner">
//                            <p className='card__name'><span>LAST</span> UPDATED</p>
//                            <p className="card__total card__small">{data.lastupdatedtime}</p>
//                        </div>
//               </div>

//           </li>
//       </ul>
//       </section>
//         </>
//   )
// }

// export default Covid


import React ,{useEffect,useState} from 'react'
import './Covid.css';


const Covid = () =>

{         const[data,setData] = useState([]);


    // const getCovidData = async() =>
    // {
    //   const res =   await fetch('http:/api.covid19india.org/data.json');
    //   const actualData = await res.json();
    //   setData(actualData.statewise);
    //  // console.log(actualData);
    // }

        const  getCovidData =async()=>
    {   
        try {
            const respns =  await fetch('https://data.covid19india.org/data.json');
          const actualData  = await respns.json();
          console.log(actualData.statewise);
          setData(actualData.statewise);
        } catch (error) {
            console.log(error);
        }
     
    }


    
          useEffect(() => {
                getCovidData();
             }, []);
    
  return(
      
      <>
      <div className="container-fluid mt-5">
      <div className="main-heading">
          <h1 className="mb-5 text-center"><span className='font-weight-bold'> INDIA </span>COVID-19 Dashboard</h1>
     </div>

     <div className="table-responsive">
        <table className="table table-hover">
            <thead className='thead-dark'>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Updated</th>
                </tr>
            </thead>

            <tbody>
             
             {
                 data.map((currElem,indx) =>
                 {
                    return (
                        <tr key={indx}>
                                            <th>{currElem.state}</th>
                                            <th>{currElem.confirmed}</th>
                                            <th>{currElem.recovered}</th>
                                            <th>{currElem.deaths}</th>
                                            <th>{currElem.active}</th>
                                            <th>{currElem.lastupdatedtime}</th>
                                        </tr>
                    )
                 })
             }
              


         
            </tbody>
        </table>
    </div>

      </div>
      </>
  )
};

export default Covid