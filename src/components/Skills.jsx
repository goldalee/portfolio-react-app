import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Postgres from '../assets/postgres.png'
import Mongo from '../assets/mongo.png'
import Golang from '../assets/golang.png'
import Python from '../assets/python.png'
import CProg from '../assets/Cprog.png'
import RProg from '../assets/Rprog.png'
import TailwindS from '../assets/tailwind.png'
import VueIcon from '../assets/vue.png'
import GitHubIcon from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
    {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>
            <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TailwindS} alt="Tailwind icon"></img>
                <p className='my-4'>Tailwind</p>
            </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon"></img>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt="React icon"></img>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={VueIcon} alt="Vue icon"></img>
                    <p className='my-4'>Vue</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postgres} alt="Postgresql icon"></img>
                    <p className='my-4'>Postgres</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon"></img>
                    <p className='my-4'>Mongo DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Golang} alt="Go icon"></img>
                    <p className='my-4'>Go</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon"></img>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CProg} alt="C icon"></img>
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={RProg} alt="R icon"></img>
                    <p className='my-4'>R</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills