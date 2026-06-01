function estadoTemperatura(grados) {
    if(!Number.isInteger(grados) || grados < 0)
        throw new TypeError('Grados invalidos');
    let estado;
    if(grados >= 30)
        estado = "Calor";
    else if(grados >= 15)
        estado = "Templado";
    else
        estado = "Frio";
    return estado;
}
module.exports = { estadoTemperatura };