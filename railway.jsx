import React,{Component} from 'react'
    const railway=[{
        "trainName":"ChennaiExpress",
        "trainNumber":"2344",
         "departureTime":{
            "Hours":21,
            "Minutes":35,
            "Seconds":0
         },
         "seatsAvailable":{
            "seater":3,
            "AC":1
         }
    },
{
    "trainName":"HyderabadExpress",
    "trainNumber":"2355",
    "departureTime":{
        "Hours":20,
        "Minutes":40,
        "Seconds":1
    },
    "seatAvailable":{
        "seater":4,
        "AC":2
    }
}];
export default  function railwayreserv() {
  return (
    <div> 
        <h1>trainName:{railway[0].trainName}</h1>
        <h1>trainNumber:{railway[0].trainNumber}</h1>
        <h1>departureTime:{railway[0].departureTime.Hours}</h1>
        <h1>departureTime:{railway[0].departureTime.Minutes}</h1>
        <h1>departureTime:{railway[0].departureTime.Seconds}</h1>
        <h1>seatAvailable:{railway[0].seatAvailable}</h1>

        <h1>trainName:{railway[1].trainName}</h1>
        <h1>trainNumber:{railway[1].trainNumber}</h1>
        <h1>departureTime:{railway[1].departureTime.Hours}</h1>
        <h1>departureTime:{railway[1].departureTime.Minutes}</h1>
        <h1>departureTime:{railway[1].departureTime.Seconds}</h1>
        <h1>seatAvailable:{railway[1].seatAvailable}</h1>
    </div>
    
  );
}
