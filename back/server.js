const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request-promise');
var morgan = require('morgan')


app.use(morgan("tiny"))

app.listen(3020, (res)=>{
	console.log("App listening on port ", 3020)
})

let apiUrl = "https://api.producthunt.com/v2/api/graphql";

let apiKey = "3wYhGgU6wqvFcR9gj2HUrqzUMenY9CZfEAs9Udpg2Uo";
let apiSecret = "QkoXLYiyvzbvQ6tpHVF922yiZ4_hCdRHdfdKtZ_ZWWg"

let apiToken ="7bfBj43UIMkhAELs9ENIOzFI0HjnX1rNYQL_nJ8L014"


     


app.get("/getProducts", cors(), (req, response)=>{
	let params = req.query;
	console.log(req.query)


let postedAfter = params.afterDate !== "null" && params.afterDate !== undefined ? params.afterDate : "2019-12-01T00:00:00Z";
let postedBefore = params.beforeDate !== "null" && params.beforeDate !== undefined ? params.beforeDate : (new Date()).toISOString();

let body = {
        query : `{ posts( postedAfter : "`+ postedAfter +`"  , postedBefore : "`+ postedBefore +`" )  
                    {  edges{node{ name, id,  createdAt, url, thumbnail    {url}, description, commentsCount, website   }},totalCount } 
                 }`
    	}

console.log(body.query);

request(
{   
    method: 'POST',
    url : "https://api.producthunt.com/v2/api/graphql",

    headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer 7bfBj43UIMkhAELs9ENIOzFI0HjnX1rNYQL_nJ8L014"
    },
    body : JSON.stringify(body)
    

}).then((res, resp)=>{
    //console.log(res)
    response.status(200).send(JSON.parse(res).data.posts.edges)
}) .catch(function (err) {
        console.log(err)
        response.status(200).send("-1")
    });
 

})


// _____________TEST API

 
app.post("/redirect", cors(), (req,response)=>{

	let params = req.query;

	console.log(params)

	response.status(200).send("yes")
})


