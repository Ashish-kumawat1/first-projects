        // DOM Elements
        const cityInput = document.getElementById('city-input');
        const searchBtn = document.getElementById('search-btn');
        const cityName = document.getElementById('city-name');
        const dateElement = document.getElementById('date');
        const temperature = document.getElementById('temperature');
        const weatherIcon = document.getElementById('weather-icon');
        const weatherDescription = document.getElementById('weather-description');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');
        const feelsLike = document.getElementById('feels-like');
        const pressure = document.getElementById('pressure');
        const forecastContainer = document.getElementById('forecast-container');
        const themeToggle = document.getElementById('theme-toggle');
        const cityMarkers = document.querySelectorAll('.city-marker');

        // Indian cities data (mock data for demonstration)
        const citiesData = {
            "Delhi": { temp: 32, humidity: 45, wind: 12, feelsLike: 35, pressure: 1012, condition: "Sunny" },
            "Mumbai": { temp: 29, humidity: 78, wind: 15, feelsLike: 33, pressure: 1008, condition: "Cloudy" },
            "Chennai": { temp: 35, humidity: 65, wind: 10, feelsLike: 39, pressure: 1010, condition: "Sunny" },
            "Kolkata": { temp: 31, humidity: 72, wind: 8, feelsLike: 36, pressure: 1009, condition: "Partly Cloudy" },
            "Bangalore": { temp: 27, humidity: 68, wind: 11, feelsLike: 30, pressure: 1011, condition: "Rainy" },
            "Hyderabad": { temp: 33, humidity: 55, wind: 9, feelsLike: 36, pressure: 1010, condition: "Sunny" }
        };

        // Forecast data
        const forecastData = [
            { day: "Tue", temp: 33, condition: "Sunny" },
            { day: "Wed", temp: 34, condition: "Sunny" },
            { day: "Thu", temp: 31, condition: "Partly Cloudy" },
            { day: "Fri", temp: 29, condition: "Rainy" },
            { day: "Sat", temp: 30, condition: "Cloudy" }
        ];

        // Initialize with Delhi data
        updateWeatherUI("Delhi");

        // Update current date
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = now.toLocaleDateString('en-US', options);
        }

        // Update weather UI
        function updateWeatherUI(city) {
            const data = citiesData[city];
            if (!data) return;
            
            cityName.textContent = city;
            temperature.textContent = data.temp;
            humidity.textContent = `${data.humidity}%`;
            windSpeed.textContent = `${data.wind} km/h`;
            feelsLike.textContent = `${data.feelsLike}°C`;
            pressure.textContent = `${data.pressure} hPa`;
            weatherDescription.textContent = data.condition;
            
            // Update weather icon based on condition
            updateWeatherIcon(data.condition);
            
            // Update forecast
            updateForecast();
            
            // Update date
            updateDate();
        }

        // Update weather icon based on condition
        function updateWeatherIcon(condition) {
            const iconMap = {
                "Sunny": "fas fa-sun",
                "Cloudy": "fas fa-cloud",
                "Partly Cloudy": "fas fa-cloud-sun",
                "Rainy": "fas fa-cloud-rain",
                "Thunderstorm": "fas fa-bolt",
                "Snow": "fas fa-snowflake"
            };
            
            weatherIcon.className = iconMap[condition] || "fas fa-cloud";
        }

        // Update forecast
        function updateForecast() {
            forecastContainer.innerHTML = '';
            
            forecastData.forEach(day => {
                const forecastCard = document.createElement('div');
                forecastCard.className = 'forecast-card';
                
                const iconMap = {
                    "Sunny": "fas fa-sun",
                    "Cloudy": "fas fa-cloud",
                    "Partly Cloudy": "fas fa-cloud-sun",
                    "Rainy": "fas fa-cloud-rain"
                };
                
                forecastCard.innerHTML = `
                    <div class="forecast-day">${day.day}</div>
                    <i class="${iconMap[day.condition] || "fas fa-cloud"} forecast-icon"></i>
                    <div class="forecast-temp">${day.temp}°C</div>
                    <div class="forecast-desc">${day.condition}</div>
                `;
                
                forecastContainer.appendChild(forecastCard);
            });
        }

        // Event listeners
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city && citiesData[city]) {
                updateWeatherUI(city);
            } else {
                alert('City not found. Try: Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad');
            }
        });

        cityInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                const city = cityInput.value.trim();
                if (city && citiesData[city]) {
                    updateWeatherUI(city);
                } else {
                    alert('City not found. Try: Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad');
                }
            }
        });

        // Add click events to city markers
        cityMarkers.forEach(marker => {
            marker.addEventListener('click', () => {
                const city = marker.getAttribute('data-city');
                updateWeatherUI(city);
                cityInput.value = city;
            });
        });

        // Theme toggle functionality
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save theme preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }

        // Initialize
        updateDate();
        updateForecast();
    