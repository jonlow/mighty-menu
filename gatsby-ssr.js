import React from 'react';
import PopUpProvider from './src/context/PopUpContext';

export const wrapRootElement = ({ element }) => <PopUpProvider>{element}</PopUpProvider>;
