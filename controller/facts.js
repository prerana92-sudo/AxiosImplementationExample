const express = require('express');
const axios = require('axios');

let getFacts = async()=>{

    let response = await axios("https://catfact.ninja/fact");
    return response;
}

module.exports = async(req,res)=>{

    try{

       let getData = await getFacts();
       res.send(getData.data);


    }catch(e){

        console.log(e);



    }
}



