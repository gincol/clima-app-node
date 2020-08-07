const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

  let lat;
  let lon;
  
  const params = {
    auth: '251632536721112304587x6936',
    locate: dir,
    json: '1'
  }
  
  const resp = await axios.get('https://geocode.xyz', {params});
  if(resp.data.length === 0) {
    throw new Error(`No hay resultados para la dirección ${ direccion}`);
  } 

  direccion = resp.data.standard.city;
  country = resp.data.standard.countryname;
  lat = resp.data.latt;
  lon = resp.data.longt;

  return {
    direccion,
    country,
    lat,
    lon
  }

}

module.exports = {
  getLugarLatLng
}

