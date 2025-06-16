

// import React from 'react';
// import { Link } from 'react-router-dom';
// import clouds from '../assets/clouds.png';
// import Weather from './Weather';


// const Home = () => {
//     return (
//         <div className="bg-gradient-to-t from-[#52D4FF] to-white to-75% relative">
//             <div>
//                 <img src= { clouds } alt="cloud_1" className='absolute -top-[250px] -right-[150px] w-[600px] h-[700px]'/>
//                 <img src= { clouds } alt="cloud_2" className='absolute top-[80px] -left-[100px] w-[600px] h-[700px]'/>
//                 <img src= { clouds } alt="cloud_3" className='absolute -bottom-[-100px] -right-[150px] w-[600px] h-[700px]'/>
//             </div>

//             <header className='flex flex-col items-center justify-center pt-[115px] gap-8'>
//               <span className='text-sm text-gray-500 border px-3 py-1.5 items-center justify-center rounded-full bg-neutral-300 mt-10'>
//                 see weather like never before, {" "}
//                 <Link to = {"/weather"} className='font-semibold'>
//                 view 🌥️
//                 </Link>
//               </span>

//               <span className="max-w-3xl">
//                 <h1 className='text-center text-7xl'>
//                   The Only Competitor to the Weather Channel
//                 </h1>
//               </span>

//               <div className='flex items-center justify-center gap-5'>
//                 <Link to= {"/weather"} className='border border-[#52D4FF] rounded-full bg-[#C3F2FF] px-7 py-3 font-bold text-[#1999D5]'>See Demo</Link>
//                 <a href="https://github.com/Atanu-18/" target='_blank' className='text-gray-500 font-bold underline text-2xl hover:cursor-pointer'>Start at github</a>
//               </div>

//               <span className='text-[#37A5CA] font-bold'>
//                 see this cool demo
//               </span>

//               <div>
//                 <img src="https://placehold.co/750x500" alt="demo-pic" className="rounded-t-lg border-2 border-gray-400]"/>
                
//               </div>

//             </header>
//         </div>
//     )
// }


// export default Home;









import React from 'react';
import { Link } from 'react-router-dom';
import clouds from '../assets/clouds.png';

const Home = () => {
    return (
        <div className="bg-gradient-to-t from-[#52D4FF] to-white to-75% relative overflow-hidden">
            {/* Background Cloud Images */}
            <div>
                <img
                    src={clouds}
                    alt="cloud_1"
                    className='absolute -top-[200px] -right-[100px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto opacity-70'
                />
                <img
                    src={clouds}
                    alt="cloud_2"
                    className='absolute top-[50px] -left-[100px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto opacity-70'
                />
                <img
                    src={clouds}
                    alt="cloud_3"
                    className='absolute bottom-0 -right-[100px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto opacity-70'
                />
            </div>

            {/* Main Content */}
            <header className='flex flex-col items-center justify-center pt-[100px] gap-8 px-4 sm:px-8 lg:px-16 text-center relative z-10'>

                <span className='text-sm text-gray-600 border px-4 py-2 rounded-full bg-neutral-200'>
                    see weather like never before,{" "}
                    <Link to={"/weather"} className='font-semibold text-blue-700'>
                        view 🌥️
                    </Link>
                </span>

                <div className="max-w-4xl">
                    <h1 className='font-bold text-3xl sm:text-5xl lg:text-7xl leading-snug'>
                        The Only Competitor to the Weather Channel
                    </h1>
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <Link
                        to={"/weather"}
                        className='border border-[#52D4FF] rounded-full bg-[#C3F2FF] px-6 py-2 font-bold text-[#1999D5] hover:shadow-lg transition'
                    >
                        See Demo
                    </Link>
                    <a
                        href="https://github.com/Atanu-18/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 font-semibold underline text-lg hover:text-gray-900 transition'
                    >
                        Start at GitHub
                    </a>
                </div>

                <span className='text-[#37A5CA] font-bold text-base sm:text-lg'>
                    see this cool demo
                </span>

                <div className='w-full max-w-[750px] px-4'>
                    <img
                        src="https://placehold.co/750x500"
                        alt="demo-pic"
                        className="w-full rounded-lg border border-gray-300 shadow-md"
                    />
                </div>

            </header>
        </div>
    );
};

export default Home;
