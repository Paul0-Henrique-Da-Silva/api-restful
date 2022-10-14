import morgan,{ StreamOptions } from "morgan";
import Logger from "../helpers/logger";


const stream: StreamOptions = {
    write: (message) =>Logger.http(message)
}

const config = process.env.D_ENV

const skip = () => {
    const env = config || "development"
    return env !== "development"
}

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {stream, skip}
)

export default morganMiddleware
