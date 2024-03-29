import React from 'react';
import { redirect } from 'next/navigation'
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
    redirect('/dashboard');

    return (
        <main>
            <CircularProgress />
        </main>
    );
}
