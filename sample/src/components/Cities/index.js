import {Component} from "react"
import "./index.css"

class Cities extends Component{

    state = {
        delhiWeather: '',
        chennaiWeather: '',
        mumbaiWeather: '',
    }

    componentDidMount() {
        this.getDelhiWeather();
         this.getChennaiWeather();
         this.getMumbaiWeather();
    }

    getDelhiWeather = async () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d885aa1d783fd13a55050afeef620fcb")
        .then((res) => res.json())
        .then((data) => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            this.setState({delhiWeather: Math.round(celcius)});
          })
        .catch(err => console.log(err));
    }

    getChennaiWeather = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d885aa1d783fd13a55050afeef620fcb")
        .then((res) => res.json())
        .then((data) => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            this.setState({chennaiWeather: Math.round(celcius)});
          })
        .catch(err => console.log(err));
    }

    getMumbaiWeather = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d885aa1d783fd13a55050afeef620fcb")
        .then((res) => res.json())
        .then((data) => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            this.setState({mumbaiWeather: Math.round(celcius)});
          })
        .catch(err => console.log(err));
    }



    render(){
        const {delhiWeather, chennaiWeather, mumbaiWeather} = this.state
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
       
    return(
        <div className="background2" id="sectioncities">
               <h1 className="cities-deco">Cities</h1>
            <div className="default-cities">
                <div className="individual-container">
                    <div className="individual-container-child-1 thunder-weather">
                        <h3 className="weatherType">Thunder</h3>
                    </div>
                    <div className="individual-container-child-2">
                        <h3 className="location">{delhiWeather}°C Delhi {date}</h3>
                    </div>
                </div>
                <div className="individual-container">
                    <div className="individual-container-child-1 cloudy-weather">
                        <h3 className="weatherType">Cloudy</h3>
                    </div>
                    <div className="individual-container-child-2">
                        <h3 className="location">{chennaiWeather}°C Chennai {date}</h3>
                    </div>
                </div>
                <div className="individual-container">
                    <div className="individual-container-child-1 sunny-weather">
                        <h3 className="weatherType">Sunny</h3>
                    </div>
                    <div className="individual-container-child-2">
                        <h3 className="location">{mumbaiWeather}°C Mumbai {date}</h3>
                    </div>
                </div>
            </div>
            <input placeholder="search city" className="input-deco" type="search" />
            <div>
                <img src="https://imageio.forbes.com/specials-images/imageserve/5fe74d45a9c2a2d204db2948/At-13-51-Universal-Time-on-January-2--2021-the-Earth-reaches-91-399-453/960x0.jpg?format=jpg&width=960" className="earth-image" alt="earth" />
            </div>
        </div>
        )
     }
 }

export default Cities