import React from 'react';

const Api=()=>{
    const API_KEY="PT9niGtUKuTsWJJbMshgSoYDoPp2";
    const URL=`https://cricapi.com/api/matches/${API_KEY}`;
    return fetch(URL)
            .then((response) => response.json())
            .catch(error =>console.log(error))
}

export default Api;