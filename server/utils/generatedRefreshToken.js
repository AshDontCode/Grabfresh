import UserModel from "../models/user.model.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { refreshToken } from "../controllers/user.controller.js"
dotenv.config()

const genertedRefreshToken = async(userId)=>{
    const token = await jwt.sign({ id : userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        { expiresIn : '7d'}
    )

    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id : userId},
        {   
            refresh_token : token
        }
    )
    console.log('refresh', refreshToken)
    return token
}

export default genertedRefreshToken