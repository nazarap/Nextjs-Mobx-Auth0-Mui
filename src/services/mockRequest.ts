'use server'
import {getAccessToken, getSession} from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'

interface IResponse<T> {
    data: T,
    status: number,
}

const mockRequest = async <T>(data: T, status = 200): Promise<IResponse<T>> => {
    'use server'

    let token;
    try {
        const accessToken = await getAccessToken();
        token = accessToken.accessToken;
        // validate token
    } catch (e) {
        redirect('/api/auth/login');
        return Promise.reject({
            status: 403
        });
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (status < 400) {
                res({
                    status,
                    data
                });
            } else {
                rej({
                    status
                });
            }
        }, 2000);
    })
}

export default mockRequest;
