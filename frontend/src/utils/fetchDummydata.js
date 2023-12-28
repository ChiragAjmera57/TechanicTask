export const fechDummyData = ()=>{
    return new Promise((resolve,reject)=>{
        fetch("http://localhost:8080/sample-data").then((res)=>{
            if(!res.ok){
                reject('Request failed with status: ' + res.status)
            }
            return res.json();
            
        }).then((data)=>{
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}