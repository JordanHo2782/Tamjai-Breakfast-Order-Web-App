import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function App() {

    const [Records, setRecords] = useState([])

    useEffect(()=>{
        const FetchDataAndSetState = async(Link, ModifyJSONFunction, SetStateFunction)=>{
            const JSONData = await fetch(Link).then((response)=>{return response.json()});
            const DataModified = ModifyJSONFunction(JSONData);
            SetStateFunction(DataModified);
        }
        FetchDataAndSetState(
            "/api/get/order", 
            (data)=>{
                return data.map((datum)=>{
                    console.log(Object.values(JSON.parse(datum.options_selected)).map((datum)=>{ return datum.english_name }))
                    return {
                        ID: datum.order_id,
                        Restaurant: datum.restaurant_name,
                        DineLocation: datum.dine_location,
                        SitNumber: datum.sit_number,
                        ProductName: datum.product_english_name,
                        ProductPrice: datum.price,
                        OptionsSelected: Object.values(JSON.parse(datum.options_selected)).map((data)=>{return data.english_name}),
                        OrderTime: datum.created_at,
                        UUID: datum.order_identifier
                    }
                })
            },
            (Result)=>{
                setRecords(Result)
                console.log(Result[1].OptionsSelected)
                console.log(Result)})
        fetch("/api/get/order").then((Response)=>{return Response.json()}).then((data)=>console.log(data))
    },[])

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header text-center">Record</div>
                        <div class="card-body">
                            <table class="table table-striped table-hover text-center" style={{
                                fontSize: "0.5rem"
                            }}>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Restaurant</th>
                                        <th scope="col">Dine Location</th>
                                        <th scope="col">Sit Number</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Options</th>
                                        <th scope="col">Order Time</th>
                                        <th scope="col">UUID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { Records.map((Record)=>{
                                        return <tr>
                                            <th scope="row">{Record.ID}</th>
                                            <td>{Record.Restaurant}</td>
                                            <td>{Record.DineLocation}</td>
                                            <td>{Record.DineLocation!=="Dine In"?"Not Applicable":Record.SitNumber}</td>
                                            <td>{Record.ProductName}</td>
                                            <td>{Record.ProductPrice}</td>
                                            <td>
                                                { Record.OptionsSelected.length>0 && <ol className="text-left">
                                                { 
                                                    Record.OptionsSelected.map((name)=>{
                                                        return <li>{name}</li>
                                                    })
                                                }
                                                </ol>}
                                                { Record.OptionsSelected.length<=0 && "No Options"}
                                            </td>
                                            <td>{Record.OrderTime}</td>
                                            <td>{Record.UUID}</td>
                                        </tr>
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

if (document.getElementById('record')) {
    ReactDOM.render(<App/>, document.getElementById('record'));
}