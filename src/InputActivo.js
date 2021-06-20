import React from 'react';

export const InputActivo = () => {

  return (
    <div>
      <h1>
        Introducción a Unit Test
      </h1>
      <div className='container'>
        <span num={3} active={false}>Primero</span>
        <span num='4' active='false'>Segundo</span>
      </div>
      <input type='text'></input>
    </div>
  );
}