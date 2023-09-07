'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const LoadingProvider = ({ children }) => {
    return (
        <>
            {children}
            <Next13ProgressBar height="5px" showOnShallow options={{showSpinner: false}} />
        </>
    );
};

export default LoadingProvider;