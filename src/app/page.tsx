import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>

      <div className='flex flex-wrap justify-center  gap-4'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'></div>


        <div className='bg-slate-200 p-12 rounded-sm shadow-sm max-w-4xl w-full flex items-center justify-center border-4 border-sky-300 ' >


          {/* Background image */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='relative w-full h-full max-w-[400px] max-h-[400px]'>

              <Image src={require('../../public/images/4.jpg')} alt='background image' width={350} height={400} objectFit='cover' className='opacity-10'
              />

            </div>

          </div>

          {/* left section  */}




          <div className='w-2/3 pr-4 pt-16 relative z-10'>





            {/* logo Section */}

            <img src="/images/2.jpg" alt="card logo" className='absolute top-[-25px] left-0 w-16 h-18 z-10' />





            <p className='mb-2'>
              <span className='text-sky-500'><strong>Name:</strong> </span>
              <span className='text-black'>Mahnoor</span>
            </p>





            <p className='mb-2'>
              <span className='text-sky-500'><strong>Roll No:</strong> </span>
              <span className='text-black'>00262956</span>
            </p>




            <p className='mb-2'>
              <span className='text-sky-500'><strong>Distance learning:</strong> </span>
              <span className='text-black'>No</span>
            </p>




            <p className='mb-2'>
              <span className='text-sky-500'><strong>City:</strong> </span>
              <span className='text-black'>Karachi</span>
            </p>


            <p className='mb-2'>
              <span className='text-sky-500'><strong>Center:</strong> </span>
              <span className='text-black'>Governer House Karachi </span>
            </p>

            <p className='mb-2'>
              <span className='text-sky-500'><strong>Campus:</strong> </span>
              <span className='text-black'>Main</span>
            </p>


            <p className='mb-2'>
              <span className='text-sky-500'><strong>Days / Time:</strong> </span>
              <span className='text-black'>Friday - 7:00PM - 10:00 PM </span>
            </p>

            <p className='mb-2'>
              <span className='text-sky-500'><strong>Batch </strong> </span>
              <span className='text-black'>1</span>
            </p>




            {/* button section */}


            <div className='flex flex-col mt-4'>
              <button className='relative w-full p-1 rounded-lg border border-gray-300 bg-blue-900 text-white items-center justify-center flex'>
                <span className='absolute inset-0 bg-slate-500'
                  style={{ width: "50%" }}>
                </span>

                <span className='relative z-10'>Q2</span>

              </button>

            </div>

          </div>



          {/* Right section */}
          <div className='w-1/3 text-center relative z-10'>

            <Image
              src={require("../../public/images/3.jpg")}
              alt='profile picture'
              width={800}
              height={800}
              className='  mb-6 w-full border border-blue-600' />

            <p className='border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl'>Authorized Signature</p>

          </div>






        </div>
      </div>
    </div>
  );
}

export default Page
