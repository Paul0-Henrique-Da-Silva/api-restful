import mongoose from "mongoose";
import Logger from "../helpers/logger";

const password = process.env.PASSWORD
const user = process.env.USER_ATLAS

async function connect() {
    const url: string = `mongodb+srv://${user}:${password}@cluster0.1s8u7r0.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url)
        Logger.info("conecção realizada com sucesso!")
    } catch (e) {
        Logger.error(e)
        Logger.error("não foi possivel conectar ao banco!")
    }
}

export default connect
