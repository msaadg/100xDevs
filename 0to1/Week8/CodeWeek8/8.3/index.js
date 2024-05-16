////////////////////////////////////////////// Fetch /////////////////////////////////////////////////////
// function main() {
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async (response) => {
//             const json = await response.json();
//             console.log(json.todos.length);
//         })
// }

// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos");
//     const json = await response.json();
//     console.log(json.todos.length);
// }


// POST
// async function main() {
//     const response = await fetch("https://www.toptal.com/developers/postbin/1709477586708-3426107864361", {
//         method: "POST",
//         body: {
//             username: "msaad",
//             password: "123456"
//         },
//         headers: {
//             "Authorization": "Bearer 123"
//         }
//     });
//     const text = await response.text();
//     console.log(text);
// }

////////////////////////////////////////////// Axios /////////////////////////////////////////////////////
const axios = require("axios")

// async function main() {
//     const response = await axios.get("https://sum-server.100xdevs.com/todos");
//     console.log(response.data.todos.length);
// }

// POST
async function main() {
    const response = await axios.post("https://httpdump.app/dumps/24bd5620-4d06-4712-bef9-b4a720df1857", {
        body: {
            username: "msaad",
            password: "123456"
        },
    }, {
        headers: {
            "Authorization": "Bearer 123"
        }
    });
    console.log(response.data);
}

main()