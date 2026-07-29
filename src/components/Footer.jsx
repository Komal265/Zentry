import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Links = [
    {href: 'https://github.com/Komal265', icon: <FaGithub/>},
    {href: ' ', icon: <FaLinkedin/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black '>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row '>
            <p className='text-center test-sm md:text-left px-4 font-general uppercase text-black transition-colors duration-500 ease-in-out hover:text-white'>Komal Salunkhe</p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {Links.map((link) => (
                    <a key={link.href} href= {link.href} target= "_blank"
                    rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className='text-center text-sm  hover:underline md:text-right font-general text-black transition-colors duration-500 ease-in-out hover:text-white'>ksalunkhe830@gmail.com</div>
            
        </div>
    </footer>
  )
}

export default Footer