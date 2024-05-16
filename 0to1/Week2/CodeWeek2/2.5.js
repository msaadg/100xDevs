// const express = require('express');

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for(let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// app.get('/', function(req, res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send(`The sum of first ${n} natural numbers is ${ans}`);
// })

// app.listen(3000);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express")
const app = express();
var users = [{
    name: 'John', 
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy).length;
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Kidney added"
    })
})

app.put("/", function(req, res) {
    if (atleastOneUnhealthyKidney()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "All kidneys are healthy"
        })
    }
    else {
        res.status(411).json({
            msg: "All kidneys are healthy"
        })
    }
})

app.delete("/", function (req, res) {
    if (atleastOneUnhealthyKidney()) {
        users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
        res.json({
            msg: "All unhealthy kidneys removed"
        })
    }
    else {
        res.status(411).json({
            msg: "All kidneys are healthy"
        })
    }
})

function atleastOneUnhealthyKidney() {
    return users[0].kidneys.filter(kidney => !kidney.healthy).length > 0;
}

app.listen (3000);