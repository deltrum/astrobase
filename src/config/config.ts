import dotenv from 'dotenv'

dotenv.config()

//* Mongo db connection
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://username:pass@dbname.z2qne.mongodb.net/dbname?retryWrites=true&w=majority'

const MONGO = {
    url: MONGO_URL,
    options: MONGO_OPTIONS
}

//* Server setup
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || 3000

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const config = {
    server: SERVER,
    mongo: MONGO
}

export default config
