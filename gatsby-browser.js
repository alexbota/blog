import React from 'react';
import { AppProvider } from './src/context/GlobalContextProvider'

export const wrapRootElement = ({ element }) => {
    return (
        <AppProvider>
            {element}
        </AppProvider>
    )
}