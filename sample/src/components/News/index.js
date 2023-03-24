import "./index.css"

const News = () => (
    <div className="background3" id="sectionnews">
            <h1 className="news-deco">News</h1>
        <div className="default-cities">
            <div className="weather-in-cities thunder-weather-1">
                <h3 className="weatherDescription">Thunder strikes Delhi</h3>
            </div>
            <div className="weather-in-cities cloudy-weather-1">
                <h3 className="weatherDescription">Cloudstorms in manipur</h3>
            </div>
            <div className="weather-in-cities sunny-weather-1">
                <h3 className="weatherDescription">It's summer season in Mumbai</h3>
            </div>
            </div>
        <footer className="contact-us">
            <p>
                WEATHERAPP
            </p>
            <div className="contacts-section">
                <div className="contacts-individual-section">
                    <p>Home</p>
                    <p>Cities</p>
                    <p>News</p>
                </div>
                <div className="contacts-individual-section">
                    <p>Contact us</p>
                    <p>FAQs</p>
                </div>
            </div>
        </footer>
    </div>
)
export default News