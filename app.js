const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true 
  }
})
.help()
.argv;

// const respuesta = lugar.getLugarLatLng( argv.direccion )
// .then(  console.log )
// .catch( err => console );

// clima.getClima(41.43550, 2.19301).then(console.log);

const getInfo = async (direccion) => {
  let coords ;
  try {
    coords = await lugar.getLugarLatLng( direccion );
    const climaResp = await clima.getClima(coords.lat, coords.lon);
    return `El clima de ${ coords.direccion } es de ${climaResp.temperatura}`;
  } catch (error) {
    if(!coords){
       return `No se pudo encontrar las coordenadas de ${ direccion }`;
    }
    return `No se pudo encontrar la temperatura de ${ coords.direcion }`;
  }

}

getInfo(argv.direccion)
  .then(console.log);