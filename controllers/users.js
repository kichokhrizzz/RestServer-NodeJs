const { response } = require('express');

const usersGet = (req = request, res = response) =>{
    const { q,nombre = "No Name", apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey
    });
}

const usersPut = (req, res = response) =>{
    const id = req.params.id;
    res.json({
        msg: 'put API - Controller',
        id
    });
}

const usersPost = (req, res = response) =>{
    const { nombre, edad} = req.body;
    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const usersDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API - Controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}