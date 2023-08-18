import connection from '../db/mongoose.js';

const penasBetisSchema = new connection.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
},{
    strict: false
});

const PenasBetis = connection.model('PenasBetis', penasBetisSchema);

export default PenasBetis;