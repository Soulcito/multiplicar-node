// requires

const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`EL valor introducido en base ${ base } o limite ${ limite } no es un número`)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`EL valor introducido en base ${ base } o limite ${ limite } no es un número`)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}