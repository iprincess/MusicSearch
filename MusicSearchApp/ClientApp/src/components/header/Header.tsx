import './Header.scss';
import React from 'react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="flex-container flex-col center-items">   
      <Logo /> 
      <h1 className="sr-only">Apple Music Search </h1>  
    </header>
  );
}