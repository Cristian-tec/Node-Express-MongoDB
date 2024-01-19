/* Esta funcion recibe un controlador y retornaria otra funcion que recibe
req, res y next */

module.exports = (fn)=>{
    return (req, res, next)=> {
        fn(req, res).catch((err)=>{
            next(err); //manejador de errores de express
        })
    }
}