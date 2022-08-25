
import fetch from 'node-fetch';

let prom = fetch('https://catfact.ninja/fact');

prom.then(response => response.json())
.then(resultado => console.log(resultado.fact))
.catch(e => console.error(e));

