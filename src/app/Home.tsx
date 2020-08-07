import React from 'react';

import ManTeacher from '../images/man-teacher.jpg';
import importantIcon from '../images/InfoIcon.png';
import reportIcon from '../images/ReportsIcon.png';

export const Home = () => {
  return (
    <div>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Home
          </h1>
        </div>
      </header>
      <div className='pt-10'>
        <div>
          <main>
            <section className='max-w-screen-lg flex flex-col md:flex-row lg:mx-auto lg:items-center '>
              <div className='hidden md:inline md:flex-1 md:p-4 md:order-none'>
                <img
                  className='mx-auto my-4 p-6'
                  src={ManTeacher}
                  alt='male teacher'
                />
              </div>
              <div className='flex-1 p-4 order-none md:order-1'>
                <div className='flex flex-col'>
                  <div className=''>
                    <h2 className='text-4xl tracking-tight whitespace-no-wrap leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
                      Training Tutorials
                    </h2>

                    <p className='p-1 mt-4'>
                      Start here! Tutorials are available to help you navigate
                      the Web Link module. Learn more about entering data,
                      generating reports, and retrieving your pay stubs,
                      government forms, and leave balance information
                    </p>
                    <div className='pl-2 pb-2'>
                      <div className='w-48 pt-2'>
                        <button className='mt-4'>Watch Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <main>
          <section className='bg-white'>
            <div className='max-w-screen-lg flex flex-col md:flex-row py-12 lg:mx-auto'>
              <div className='flex md:m-4 md:flex-1 pt-4'>
                <div className='w-20 sm:w-16'>
                  <img src={importantIcon} alt='important sign' />
                </div>
                <div className='mx-2'>
                  <h2 className='text-2xl'>Important Information</h2>
                  <p>
                    Please contact Carolyn Smith in the Business Office with any
                    questions.
                  </p>
                </div>
              </div>
              <div className='flex md:m-4 justify-center md:flex-1 pt-4 '>
                <div className='w-40 sm:w-32'>
                  <img src={reportIcon} alt='report files' />
                </div>
                <div className='mx-2'>
                  <h2 className='text-2xl'>Reports</h2>
                  <p className=''>
                    View employee information, vendor detail or past requisition
                    information, or generate any School Accounting System report
                    that has been provided for you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
