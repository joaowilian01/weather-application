const APIKey = 'X9xjlMytryPoY5Om2GlNBZA06lnEC2Yr'

const getCityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityData] = await response.json()
    return cityData
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

getCityData('São Paulo')