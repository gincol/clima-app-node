const axios = require('axios');

const getClima = async (latitud, longitud) => {
  
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=b4e020e59b65155eef293b7e93d53a13&units=metric`);
  if(resp.data.length === 0) {
    throw new Error(`No hay resultados para la latitud ${ latitud } y longitud ${ longitud }`);
  } 

  temperatura = resp.data.main.temp;
  
  return {
    temperatura
  }

}

module.exports = {
  getClima
}