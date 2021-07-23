import { Request, Response, NextFunction } from 'express'

export async function checkErrors(request: Request, response: Response, next: NextFunction) {

    if (request.method == 'POST') {
        if (Object.keys(request.body).length === 0) {
            return response.json({ error: 'Required fields' })
        }
    }
    next();


}