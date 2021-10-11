const  signup  = async (data)=>{
    const response = await fetch ("http://localhost:8080/api/users", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    console.log(response.status);
    if(response.status===200){
        return response.json();
    }
    else {
        return response;
    }
}

const  login  = async (data)=>{
    const response = await fetch ("http://localhost:8080/api/users/login", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    console.log(response.status);
    if(response.status===200){
        return response.json();
    }
    else {
        return response;
    }
}

export {
    signup,
    login
}