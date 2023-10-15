import User from './../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from './../utils/error.js';
import jwt from 'jsonwebtoken'

export const signUp = async (req, res, next) => {
    console.log(req.body)

    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })

    try {
        await newUser.save()
        res.status(201).json({
            message: "User created successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const signIn = async (req, res, next) => {

    const { email, password } = req.body

    console.log(`AAAAAAAAAAAAAAAAAAAA `)

    try {
        const validUser = await User.findOne({ email: email })
        if (!validUser) return next(errorHandler(401, 'Incorrect email or password'))
        const validPassword = await bcryptjs.compare(password, validUser.password)
        console.log(`bycrypt compare: ${password} VS ${validUser.password}`)
        console.log(`bycrypt compare boolean: ${validPassword}`)
        if (!validPassword) return next(errorHandler(401, 'Incorrect email or password'))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc

        res
            .cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
            .status(200)
            .json(rest)

    } catch (error) {
        next(error)
    }
}