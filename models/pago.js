const mongoose = require('mongoose');
const Afiliado = require('./afiliado');
const {Schema} = mongoose;

const PagoSchema = new Schema({
    afiliado:{type: Afiliado, required:true},
    fecha:{type: Date, required:true},
    monto:{type:Number, required:true},
    año:{type:Number, required:true},
    mes:{type:Number, required:true}
})


module.exports =mongoose.model('Pago', PagoSchema);