import { server } from './Constants.json'

export const postApi = async (url = '', header = {}, body = {}, onResponse = null, onCatch = null, file = '', encrypt_data = true) => {


    var mHeader = {
        ...header,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        uid: UID
    }


    console.log(url)
    console.log(JSON.stringify(mHeader))
    console.log(JSON.stringify(body))

    fetch(server + url, {
        method: 'POST',
        headers: mHeader,
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((responseJson) => {

            onResponse && onResponse(responseJson)
        })
        .catch((e) => {

            onCatch && onCatch(e)
        })
}


export const getApi = async (url = '', header = {}, onResponse = null, onCatch = null, file = '', encrypt_data = true) => {




    var mHeader = {
        ...header,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    console.log(url)
    console.log(JSON.stringify(mHeader))

    fetch(server + url, {
        method: 'GET',
        headers: mHeader,
    })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(" response " + JSON.stringify(responseJson))

            onResponse && onResponse(responseJson)

        })
        .catch((e) => {
            onCatch && onCatch(e)

        })
}
