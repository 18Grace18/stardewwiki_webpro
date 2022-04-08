const express = require('express');
const search = express.Router()

// Use this code if you want to connect with DB
const SearchMng = require('../search-model').SearchMng;
const searchMng = new HomeMng();

search.get('/search', async function(req, res){
    console.log("From DB");
    const results = await searchMng.getAllInformation();
    res.render('search',{'result': results});
})

module.exports = search;
