import React, { useState }  from 'react';

function Weather() {

  const appid = "29d2d1b6a7bbd0849e3b7f494c09922a"; 

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [aqi, setAqi] = useState(0);
  const [bclass, setClass] = useState("card text-white bg-primary mb-3");
  const [status, setStatus] = useState("Enter details to get value");
  const [co, setCo] = useState(0);
  const [no, setNo] = useState(0);
  const [no2, setNo2] = useState(0);
  const [o3, setO3] = useState(0);
  const [so2, setSo2] = useState(0);
  const [pm2, setPm2] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [nh3, setNh3] = useState(0);

  const handleLat = (event) => {
    setLatitude(event.target.value);
  }

  const handleLong = (event) => {
    setLongitude(event.target.value);
  }

  const handleSubmit = async() => {
    try{
      setAqi(0);
      const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${appid}`);
      const data = await response.json();
      const daqi = data.list[0].main.aqi;
      if(daqi === 1)
      {
        setClass("card text-white bg-success mb-3");
        setStatus("Looks healthy 😃");
      } else if(daqi === 2)
      {
        setClass("card text-white bg-primary mb-3");
        setStatus("Aha not bad 😁");
      }else if(daqi === 3)
      {
        setClass("card text-white bg-info mb-3");
        setStatus("Neutral, need some precausions ☹️");
      }
        else if(daqi === 4)
        {
          setClass("card text-white bg-warning mb-3");
          setStatus("Needs attention 😨");
        }else {
          setClass("card text-white bg-danger mb-3");
          setStatus("Worst, take necessary precausion 🥵");
        }
      setAqi(daqi);
      setCo(data.list[0].components.co);
      setNo(data.list[0].components.no);
      setNo2(data.list[0].components.no2);
      setO3(data.list[0].components.o3);
      setSo2(data.list[0].components.so2);
      setPm2(data.list[0].components.pm2_5);
      setPm10(data.list[0].components.pm10);
      setNh3(data.list[0].components.nh3);
    } 
    catch(error) 
    {
      console.log("Error occured: " + error);
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Get Started With Vaayu</h2>
        <div className="d-flex justify-content-center row justify-content-around mt-4">
          
          <div className="col-4"> 
          <label for="exampleInputEmail1" class="form-label">Enter Latitude</label>
        <input className="form-control" onChange={handleLat}/>
        <label for="exampleInputEmail1" class="form-label mt-2">Enter Longitude</label>
        <input className="form-control" onChange={handleLong}/>
        <input className="btn btn-primary mt-2" type="submit" onClick={handleSubmit}/>
          </div>

          <div className="col-4 mt-3"> 
          <div class={bclass}>
  <div class="card-header">AQI</div>
  <div class="card-body">
    <h5 class="card-title">{aqi} - {status}</h5>
  </div>
</div>
          </div>
        
        </div>
        <h2 className="text-center mt-3">Parameters</h2>
        <div className="d-flex justify-content-evenly mx-2">
        <div className="col-4 mt-3"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Carbon Monoxide - CO</div>
  <div class="card-body">
    <h5 class="card-title">{co}</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Nitric Oxide - NO</div>
  <div class="card-body">
    <h5 class="card-title">{no}</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Nitrogen Dioxide - NO<sub>2</sub></div>
  <div class="card-body">
    <h5 class="card-title">{no2}</h5>
  </div>
</div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mx-2">
        <div className="col-4 mt-3"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Ozone - O<sub>3</sub></div>
  <div class="card-body">
    <h5 class="card-title">{o3}</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Sulphur Dioxide - SO<sub>2</sub></div>
  <div class="card-body">
    <h5 class="card-title">{so2}</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Particulate Matter - PM<sub>2.5</sub></div>
  <div class="card-body">
    <h5 class="card-title">{pm2}</h5>
  </div>
</div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mx-2">
        <div className="col-4 mt-3"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Particulate Matter - PM<sub>10</sub></div>
  <div class="card-body">
    <h5 class="card-title">{pm10}</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-dark mb-3">
  <div class="card-header">Ammonia - NH<sub>3</sub></div>
  <div class="card-body">
    <h5 class="card-title">{nh3}</h5>
  </div>
</div>
          </div>
        </div>

        <h2 className="text-center mt-3">AQI Break Points</h2>
        
        <div className="d-flex justify-content-evenly mx-2">
        <div className="col-4 mt-3"> 
          <div class="card text-white bg-success mb-3">
  <div class="card-header">AQI - 1</div>
  <div class="card-body">
    <h5 class="card-title">Looks healthy 😃</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-primary mb-3">
  <div class="card-header">AQI - 2</div>
  <div class="card-body">
    <h5 class="card-title">Aha not bad 😁</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3 mx-2"> 
          <div class="card text-white bg-info mb-3">
  <div class="card-header">AQI - 3</div>
  <div class="card-body">
    <h5 class="card-title">Neutral, need some precausions ☹️</h5>
  </div>
</div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
        <div className="col-4 mt-3"> 
          <div class="card text-white bg-warning mb-3">
  <div class="card-header">AQI - 4</div>
  <div class="card-body">
    <h5 class="card-title">Needs attention 😨</h5>
  </div>
</div>
          </div>
          <div className="col-4 mt-3"> 
          <div class="card text-white bg-danger mb-3">
  <div class="card-header">AQI - 5</div>
  <div class="card-body">
    <h5 class="card-title">Worst, take necessary precausion 🥵</h5>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather;