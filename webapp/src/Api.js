import axios from "axios";

const baseUrl = 'https://firestore.googleapis.com/v1/projects/team-bookmark-41340/databases/(default)/documents';

const get = async (_url, callback) => {
    const url = baseUrl + _url;
    axios.get(url)
        .then(res => {
            const documents = res.data.documents;
            const array = [];
            for (let i = 0; i < documents.length; ++i) {
                // ***************************************
                // ***********レスポンスの整形箇所***********
                // ***************************************
                const eraseUrl = 'projects/team-bookmark-41340/databases/(default)/documents'
                const obj = {
                    id: documents[i].name.replace(eraseUrl + _url + '/', ''),
                    fields: documents[i].fields,
                    updateTime: documents[i].updateTime
                }
                array.push(obj);
            }
            callback(array);
        })
        .catch(error => {
            console.log('ERROR in GET API');
            console.log(error);
        })
}

const getById = async (_url, id, callback) => {
    const url = baseUrl + _url;
    axios.get(url)
        .then(res => {
            const document = res.data;
            // ***************************************
            // ***********レスポンスの整形箇所***********
            // ***************************************
            const eraseUrl = 'projects/team-bookmark-41340/databases/(default)/documents'
            const obj = {
                id: document.name.replace(eraseUrl + _url + '/', ''),
                fields: document.fields,
                updateTime: document.updateTime
            }
            callback(obj);
        })
        .catch(error => {
            console.log('ERROR in GET API');
            console.log(error);
        })
}

const post = async (_url, obj) => {
    const url = baseUrl + _url;
    axios.post(url, obj)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log('ERROR in POST API');
            console.log(error);
        })
}

export default {get, getById, post}