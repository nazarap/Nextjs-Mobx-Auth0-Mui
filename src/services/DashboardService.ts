'use server'
import mockRequest from '@/services/mockRequest';
import { IUser } from '@/interfaces/IUser';

export const getUsers = async(): Promise<IUser[]> => {
    'use server'
    const users: IUser[] = [
        { id: 1, name: 'James Bond', email: 'james.bond@gmail.com' },
        { id: 2, name: 'James Bond2', email: 'james.bond2@gmail.com' },
        { id: 3, name: 'James Bond3', email: 'james.bond3@gmail.com' },
        { id: 4, name: 'James Bond4', email: 'james.bond4@gmail.com' },
        { id: 5, name: 'James Bond5', email: 'james.bond5@gmail.com' },
    ];
    return mockRequest(users).then(response => response.data);
}
