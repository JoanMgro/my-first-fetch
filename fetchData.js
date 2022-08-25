import fetch from 'node-fetch';

export default function fetchData(urlAPI){

    let data = fetch(urlAPI)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .catch(e => console.error(e));
}
