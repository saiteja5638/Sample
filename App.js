const path = require('path')

const express = require('express')

const bodyParser = require('body-parser')

let axios = require('axios')

const app = express()


app.use(bodyParser.urlencoded({extended:false}))


app.listen(4200,()=>{
    console.log("Server is running")
})

app.get('/',async (req,res)=>{
    let a = await getReq()

    res.send(a)
})

async function getReq()
{
    try {
        let response = await axios.get('https://3a9c9c86trial-dev-sbp-hire-srv.cfapps.us10-001.hana.ondemand.com/catalog/GIT_REPO')

        return response.data.value

    } catch (error) {
        console.log(error)
    }

}

app.use((req,res,next)=>{
    res.status(404).render('pgnotfound')
})
