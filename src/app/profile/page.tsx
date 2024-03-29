import { getSession } from '@auth0/nextjs-auth0';
import UserContent from '@/app/profile/UserContent';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
    let { user } = await getSession() || {};

    if (!user) {
        redirect('/api/auth/login')
        return;
    }

    return (
        <UserContent user={user} />
    );
}

export default ProfilePage;