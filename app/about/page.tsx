import Link from 'next/link';
import React from 'react';
import Head from 'next/head'

const About: React.FC = () => {
  return (
    <>
      <p className='text-gray-700 dark:text-gray-300 pb-2'>
        Olá! Seja bem vindos a nossa cervejaria.
      </p>
      <Link
        href='https://github.com/fabioNog'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-center text-lg text-white bg-violet-500 rounded-2xl p-2 my-4'>
        Meu Github
      </Link>
    </>
  );
};

export default About;
