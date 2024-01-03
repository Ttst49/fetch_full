//constante de l'url de base
const baseUrl = "https://b1messenger.imatrythis.com/"
let token = ""
let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${getToken()}`);
myHeaders.append("Content-Type", "application/json",)

// fetch les donnees avec une methode donnée, une url et des donnees
async function getFetch(token = null,method ,url , data = {}) {
    if (method === "GET"){
        const response = await fetch(url, {
            method: method,
            withCredentials: true,
            credentials: 'include',
            redirect: "follow",
            headers: myHeaders,
        });
        return response.json();
    }else {
        const response = await fetch(url, {
            method: method,
            withCredentials: true,
            credentials: 'include',
            redirect: "follow",
            headers: myHeaders,
            body: JSON.stringify(data),
        });
        return response.json();
    }
}

let FullData = {"username":"Harry pOTTER","password":"azerty"}

function getToken(){
    return token = window.localStorage.getItem("bearerToken")
}

function getFetchWithOptionAndMethod(option,method,data = FullData){
    if (option === "login"){
        getFetch(null,method,baseUrl+option,data).then(response => response['token'])
            .then(response=>window.localStorage.setItem("bearerToken",response))
        getToken()
            return token
    }else {
        getFetch(getToken(),method,baseUrl+option,data)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}



getFetchWithOptionAndMethod("login","POST")
getFetchWithOptionAndMethod("api/messages","GET")
