import {Component} from "react"
import Cities from "../Cities"
import News from "../News"
import {BsFillSunFill} from "react-icons/bs"
import "./index.css"

class Home extends Component {
    state = {
        degree: '',
        wind: '',
        humidity: '',
        cloudy: '',
    }
    
    componentDidMount() {
        this.getWeather()
    }
     
    getWeather = async () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=d885aa1d783fd13a55050afeef620fcb")
        .then((res) => res.json())
        .then((data) => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            const wind = data.wind.speed;
            const humidity = data.main.humidity;
            const cloudy = data.clouds.all;
            this.setState({degree: Math.round(celcius), wind, humidity, cloudy});
          })
        .catch(err => console.log(err));
    }
     
   render() {
    const {degree, wind, humidity, cloudy} = this.state
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      
      console.log(time)
       
    return (
        <div>
           <div className="background" id="sectionhome">
               <div className="anchor-deco">
                    <a className="anchor-name-deco" href="#sectionhome">Home</a>
                    <a className="anchor-name-deco" href="#sectioncities">Cities</a>
                    <a className="anchor-name-deco" href="#sectionnews">News</a>
                </div>
                <div className="weather-details">
                    <div>
                        <h2 className="heading-deco">Weather details</h2>
                    </div>
                    <div className="weather-details-div">
                        <p className="heading-deco">cloudy</p>
                        <p className="heading-deco">{cloudy}%</p>
                    </div>
                    <div className="weather-details-div">
                        <p className="heading-deco">humidity</p>
                        <p className="heading-deco">{humidity}%</p>
                    </div>
                    <div className="weather-details-div">
                        <p className="heading-deco">wind</p>
                        <p className="heading-deco">{wind}km/hr</p>
                    </div>
                </div>
            <div className="current-weather-container">
                <div className="height">
                    <h1 className="current-weather">
                      {degree}°C 
                    </h1>
                </div>
                <div className="current-weather-individual-container">
                       <p className="font-size">Hyderabad</p> 
                    <div className="date-time">
                       <p className="font-size-weight">{time}</p>
                       <p className="font-size-weight">{date}</p>  
                   </div>
                </div>
                <BsFillSunFill className="icon-deco"/> 
            </div>
            </div>
           <Cities/>
            <News/>
        </div>
    )
   }


 
}

export default Home 


                   