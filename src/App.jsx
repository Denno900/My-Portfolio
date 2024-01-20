import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { BiLogoGmail } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io"
import { GrReactjs } from "react-icons/gr";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaSun } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { useState, useRef } from 'react';
import Swal from 'sweetalert2'
import 'animate.css'
import './App.css'

import emailjs from '@emailjs/browser';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({})
  const form = useRef()

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jyv72e', 'template_h1fbxkn', form.current, 'FOsuf5qzsPvRGmc5u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFormData({
        email: '',
        message: '',
        subject: '',
        name: ''
      })

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email sent successfully",
        showConfirmButton: false,
        timer: 1500
      });
  };
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="scroll-watcher w-full top-0 fixed h-2 bg-cyan-500 bg-gradient-to-r from-cyan-500 to-green-500 dark:bg-gray-300"></div>
      <main className='bg-white max-w-screen-2xl  px-8 md:px-20 lg:mx-auto lg:px-30 dark:bg-gray-900'>
        <section className='min-h-fit'>
          <nav className='py-6 mb-5 flex justify-between border-b-2 border-black dark:border-b-2 dark:border-gray-300'>
            <h1 className='text-3xl font-bold dark:text-gray-400 animate__animated animate__fadeInDown'>NixCode</h1>
            <ul className='flex items-center animate__animated animate__fadeInDown'>
              { 
                darkMode ? 
                <li><FaSun onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-white'/></li>
                :
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              }
              <li>
                <a href="#contact" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8 lg:block'>Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className='md:flex flex-row-reverse items-center'>
          <div className='md:text-left text-center p-5 animate__animated animate__backInRight'>
            <h2 className='text-5xl py-2 md:text-6xl lg:text-7xl gradient-text'>Mwaniki Dennis</h2>
            <h3 className='text-2xl py-2 md:text-3xl font-bold dark:text-gray-400'>Web Developer and Designer</h3>
            <p className='text-md py-5 mx-auto leading-8 text-gray-800 dark:text-white max-w-xl md:text-xl'>
              I am a Web Developer and Designer, bringing Creativity to life in the Digital realm. With a keen eye for Detail, I Transform Ideas into Visually Stunning and functionally flawless Websites.
            </p>
          </div>
          <img className='my-5 aspect-square min-h-56 max-h-80 lg:rounded-md rounded-full mx-auto object-cover animate__animated animate__backInLeft' src="assets/IMG_4367.jpg" alt="my picture" />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-4 font-bold dark:text-gray-400'> Services I offer</h3>
            <p className='text-md py-2 text-gray-800 leading-8 dark:text-white lg:text-lg'>
              As a graduate from Moringa school I have experience of the workplace. I have done remote work for <span className='text-teal-500'>startups</span> and worked with a capable 
              team to build <span className='text-teal-500'>e-commerce websites</span> for various companies in the cargo tracking business and online shopping market. 
            </p>
          </div>
          <div className='sm:flex sm:flex-wrap gap-10 my-8'>
            <div className='my-3 mx-auto max-w-80 text-center hover-up dark:bg-gray-50 shadow-xl p-3 rounded-xl '>
              <img className='mx-auto rounded-xl h-1/2' src="assets/webdesign.png" alt="" />
              <h3 className='text-2xl font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='px-6'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-0'>Design tools I use</h4>
              <div className='flex justify-center items-center my-3 text-white bg-teal-500 rounded-full mx-auto w-1/2 shadow-md'>
                <SiFigma className='text-xl'/>
                <p className='pl-2 text-2xl'>Figma</p>
              </div>
            </div>
            <div className='my-3 mx-auto max-w-80 text-center hover-up dark:bg-gray-50 shadow-xl p-3 rounded-xl'>
              <img className='mx-auto rounded-xl h-1/2' src="assets/responsive.png" alt="" />
              <h3 className='text-2xl font-medium pt-8 pb-2'>Responsive Websites</h3>
              <p className='px-6'>
                Developing Websites that are seamlessly accessible from all devices.
              </p>

              <div className='flex justify-center items-center my-3 text-white bg-cyan-500 rounded-full mx-auto w-1/2 shadow-md'>
                <SiTailwindcss className='text-xl'/>
                <p className='pl-2 text-2xl'>Tailwind</p>
              </div>
            </div>
            <div className='my-3 mx-auto max-w-80 text-center hover-up dark:bg-gray-50 shadow-xl p-3 rounded-xl'>
              <img className='mx-auto rounded-xl h-1/2 ' src="assets/database.png" alt="" />
              <h3 className='text-2xl font-medium pt-8 pb-2'>Functional Databases</h3>
              <p className='px-6'>
                Building Databases that are secure and highly optimized.
              </p>
              <h4 className='py-0'>The Tool I use</h4>
              <div className='flex justify-center items-center my-3 text-white bg-cyan-600 rounded-full mx-auto w-1/2 shadow-md'>
                <SiPostgresql className='text-xl'/>
                <p className='pl-2 text-xl'>PostgreSQL</p>
              </div>
            </div>
          </div>
        </section>
        <section>
         <div>
          <h3 className='text-3xl py-1 font-bold dark:text-gray-400'>Portfolio</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white lg:text-lg'>
            These are my Recent Projects
          </p>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='card fade basis-1/3 flex-1 rounded-lg shadow-lg'>
              <div className='card-content rounded-lg h-full'>
                <h1 className='text-2xl md:text-4xl text-gray-100'>Cargo Flow</h1>
                <a href='https://mysite-jzde.onrender.com/' target='_blank' className='text-teal-500 inline-flex items-center rounded-md border border-transparent bg-cyan-100 px-3 py-2 text-sm font-medium leading-4  hover:bg-cyan-200 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'>Visit site</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 rounded-lg shadow-lg '>
              <img className='fade rounded-lg object-cover w-full' src="assets/cargoflow1.png" alt="" />
            </div>
            <div className='card-2 fade basis-1/3 flex-1 rounded-lg shadow-lg'>
              <div className='card-content rounded-lg h-full'>
                <h1 className='text-2xl md:text-4xl text-gray-100'>Shoppers Haven</h1>
                <a href="https://shopperhaven.netlify.app/" target="_blank" className='text-teal-500 inline-flex items-center rounded-md border border-transparent bg-cyan-100 px-3 py-2 text-sm font-medium leading-4  hover:bg-cyan-200 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'>Visit site</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 rounded-lg shadow-lg'>
              <img className='fade rounded-lg object-cover w-full' src="assets/shoppers1.png" alt="" />
            </div>
            <div className='card-3 fade basis-1/3 flex-1 rounded-lg shadow-lg'>
              <div className="card-content rounded-lg h-full">
                <h1 className='text-2xl text-gray-100 md:text-4xl'>Fit Track</h1>
                <a href="https://fittracks.netlify.app/" target='_blank' className='text-teal-500  inline-flex items-center rounded-md border border-transparent bg-cyan-100 px-3 py-2 text-sm font-medium leading-4  hover:bg-cyan-200 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'>Visit site</a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 rounded-lg shadow-lg' >
              <img className='fade rounded-lg object-cover w-full' src="assets/fittrack2.png" alt="" />
            </div>
          </div>
        </div>
        </section>
        <section>
          <div className='py-3'>
            <h1 className='text-3xl font-bold dark:text-gray-400 py-3'>Experience</h1>
            <p className='text-md dark:text-white text-gray-800 leading-8 py-3 lg:text-lg'>Over the years I have Garnered experience on the <span className='text-teal-500'>Software Development Industry</span>.
               I am a full-stack developer with the following stacks;
            </p>
            <div className='flex gap-3 flex-wrap justify-around py-4'>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <FaHtml5 className='text-orange-500 ml-auto'/> 
                <h1 className='px-2 mr-auto'>HTML</h1>
              </div>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <IoLogoCss3 className='text-blue-700 ml-auto'/>
                <h1 className='px-2 mr-auto'>CSS</h1>
              </div>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <IoLogoJavascript className='text-yellow-400 ml-auto'/>
                <h1 className='px-2 mr-auto'>JavaScript</h1>
              </div>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <GrReactjs className='text-sky-600 ml-auto'/>
                <h1 className='px-2 mr-auto'>React</h1>
              </div>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <DiRuby className='text-red-600 ml-auto'/>
                <h1 className='px-2 mr-auto'>Ruby</h1>
              </div>
              <div className='lg:p-0 p-1 flex sm:basis-1/4 rounded-lg shadow-lg text-3xl items-center border-2 border-double dark:text-gray-200 border-gray-700'>
                <SiRubyonrails className='text-red-600 ml-auto'/>
                <h1 className='px-2 mr-auto'>Rails</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div>
          <div className="mx-auto max-w-7xl py-24 sm:py-32">
            <h2 className="text-3xl dark:text-gray-400 font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-6 max-w-3xl text-lg dark:text-gray-50 text-gray-800">
            Thank you for exploring my portfolio! If you have any inquiries, collaboration ideas, or just want to say hello,
             I'd love to hear from you. Feel free to drop me a message using the form below, and I'll get back to you as soon as possible.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-xl font-medium dark:text-gray-400 text-gray-900 flex items-center"><span className='mr-3'><FaPhoneSquareAlt/></span>Call Me</h3>
                <p className="mt-2 text-base dark:text-gray-50 text-gray-500">
                  <span className="block">0743345572</span>
                </p>
              </div>
              <div>
              <h3 className="text-xl font-medium dark:text-gray-400 text-gray-900 flex items-center"><span className='mr-3'><BiLogoGmail/></span>Email</h3>
                <p className="mt-2 text-base dark:text-gray-50 text-gray-500">
                  <span className="block">mwaniksdenno@gmail.com</span>
                </p>
              </div>
              <div>
              <h3 className="text-xl font-medium dark:text-gray-400 text-gray-900 flex items-center"><a href='https://www.instagram.com/mwa.ni_kie/' target='_blank' className='mr-3'><GrInstagram/></a>Instagram</h3>
                <p className="mt-2 text-base dark:text-gray-50 text-gray-500">
                  <span className="block">@mwa.ni_kie</span>
                </p>
              </div>
              <div>
              <h3 className="text-xl font-medium dark:text-gray-400 text-gray-900 flex items-center"><a href='https://github.com/Denno900' target='_blank' className='mr-3 no-underline'><FaGithub/></a>Github</h3>
                <p className="mt-2 text-base dark:text-gray-50 text-gray-500">
                  <span className="block">Denno900</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section id='contact'>
          <div className="flex min-h-full pb-10">
            <div className="flex flex-1 flex-col justify-center pb-12 lg:flex-none sm:pr-4 lg:pr-20 xl:pr-24">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight dark:text-gray-400 text-gray-900">Contact Me</h2>
                </div>
                <div className="mt-8">
                  <div className="mt-6">
                    <form onSubmit={sendEmail} ref={form} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium dark:text-gray-50 text-gray-700">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="user_email"
                            placeholder='name@example.com'
                            type="email"
                            autoComplete="email"
                            onChange={handleChange}
                            value={formData.email}
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium dark:text-gray-50 text-gray-700">
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="user_name"
                            type="text"
                            placeholder='Anthony'
                            onChange={handleChange}
                            value={formData.name}                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="subject" className="block text-sm font-medium dark:text-gray-50 text-gray-700">
                          Subject
                        </label>
                        <div className="mt-1">
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder='Business'
                            onChange={handleChange}
                            value={formData.subject}
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="message" className="block text-sm font-medium dark:text-gray-50 text-gray-700">
                          Message
                        </label>
                        <div className="mt-1">
                          <input
                            id="message"
                            name="message"
                            type="message"
                            onChange={handleChange}
                            value={formData.message}
                            required
                            className="block w-full h-24 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                      </div>
                      <div>
                        <input
                          type="submit"
                          value={"Send"}
                          className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 hover:cursor-pointer to-teal-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-md"
                src="assets/my-pic.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

