const BaseUrl = 'http://localhost:3000/user';


let createNewUser = async (user) => {

    let res = await fetch(BaseUrl + '/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!res.ok) {
        console.log(res);
        console.error(res);
        return {
            ...res,
            ...{
                'status': 'KO'
            }
        }
    }

    let result = await res.json();

    console.log('res=>', result);
    console.log('res json=>', result);
    return {
        ...result.createdUser,
        ...{
            'status': 'OK'
        }
    }
}

let loginUser = async ({
    email,
    password
}) => {

    let res = await fetch(BaseUrl + '/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    let result = await res.json()
    if (!res.ok) {
        return {
            ...result,
            'status': 'KO'
        }

    }

    return {
        ...result,
        ...{
            'status': 'OK'
        }
    }
}
export {
    createNewUser,
    loginUser
};