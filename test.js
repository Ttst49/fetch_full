var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDI3MjE0NDAsImV4cCI6MTcwMjcyNTA0MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiSGFycnkgcE9UVEVSIn0.UULxeBfMJTSf7VQoTC_KHt3lBaUYZb-Pna4bwR2mk-zFbU5dd5C7CJDBKJA_bcy97WhZlFpNeK8kI0M1Dbx08aLggk02V4mIQIfruhPbhjEaj2B-GwZ2ZoYvno8AxTuYcPJm1FsZmdHqfQdUjFO4YWRr_bxE86oweNjam15qlz2eqMWCLhyE8q00WCXG1HuZk9BVctvZAEELPvdwqoxUngIbzUW7AnoPcmzjHZqFJpKwaNjXUSUoEqdsCvGAIDO8ZivbnsECsZqg7AXBG_39Ud-MZyXfIrypbXEyg-k5P49UXNHG1Vz2etLKuhxij1cYowsxjqTc_h7CjOnCSMPSWA");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://b1messenger.imatrythis.com/api/messages", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));