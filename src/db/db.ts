import mongoose from "mongoose";


const password = process.env.PASSWORD
const user = process.env.USER_ATLAS

async function connect() {
    const url: string = `mongodb+srv://${user}:${password}@cluster0.1s8u7r0.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url)
        console.log("connecção realizada com sucesso!")
    } catch (error) {
        console.log(error)
        console.log("não foi possivel conectar ao banco!")
    }
}

export default connect
