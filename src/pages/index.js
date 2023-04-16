import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from "public/dev-ed-wave.png";
import design from "public/design.png";
import code from "public/code.png";
import Consulting from "public/Consulting.png";
import web1 from "public/web1.png"
import web2 from "public/web2.png"
import web3 from "public/web3.png"
import web4 from "public/web4.png"
import web5 from "public/web5.png"
import web6 from "public/web6.png"
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark": ""}>
      <Head>
        <title>Mujtaba Khan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900'> 
        <section className='min-h-screen'>
          <nav className='flex justify-between py-10 mb-12'>
            <h1 className='text-lg font-burtons'>Mujtaba khan</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'> <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)}/>
              </li>
              <li className=' bg-gradient-to-r from-cyan-500 to bg-teal-500 uppercase text-white px-4 py-2 rounded-md ml-8'> <a href='#'>resume</a></li>
            </ul>
          </nav>
          <div className='p-10 text-center'>
            <h2 className='text-5xl text-teal-500 py-3 font-medium'>Mujtaba Khan</h2>
            <h3 className='text-2xl py-2'>Frontend Web developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto'>Final Year Student currently working as an intern at a IT Consulting and Services company as Frontend engineer intern with previous Wordpress Freelance Experience</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-20">
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, <span className='text-teal-500'>libero</span>eu lacinia tempor, <span className='text-teal-500'>justo</span> magna sodales enim, ac euismod turpis ipsum vel est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, libero eu lacinia tempor, justo magna sodales enim, ac euismod turpis ipsum vel est.</p>
            <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, libero eu lacinia tempor, justo magna sodales enim, ac euismod turpis ipsum vel est.</p>
          </div>
          <div className='md:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'> 
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-md pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating Elegant Designs for your needs and design theory</p>
              <h4 className='text-teal-500 py-4'>Design tools I use:</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'> 
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-md pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating Elegant Designs for your needs and design theory</p>
              <h4 className='text-teal-500 py-4'>Design tools I use:</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'> 
              <Image src={Consulting} width={100} height={100} />
              <h3 className='text-lg font-md pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating Elegant Designs for your needs and design theory</p>
              <h4 className='text-teal-500 py-4'>Design tools I use:</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
        <section>
        <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, <span className='text-teal-500'>libero</span>eu lacinia tempor, <span className='text-teal-500'>justo</span> magna sodales enim, ac euismod turpis ipsum vel est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, libero eu lacinia tempor, justo magna sodales enim, ac euismod turpis ipsum vel est.</p>
            <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis arcu ultricies varius. Morbi semper, libero eu lacinia tempor, justo magna sodales enim, ac euismod turpis ipsum vel est.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
