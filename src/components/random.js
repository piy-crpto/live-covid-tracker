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