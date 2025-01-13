import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generatedAccessToken = async(userId)=>{
    console.log('key',process.env.SECRET_KEY_ACCESS_TOKEN )
    const token = await jwt.sign({ id : userId},
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn : '5h'}
    )
    console.log('token',token);
    return token
}

export default generatedAccessToken