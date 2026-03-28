import React from 'react'

function About() {
  return (
    <div>
       <div className="flex justify-center items-center pt-10">
    <img 
        className="w-[15vw] h-auto rounded-xl shadow-lg border-2 border-gray-100 object-cover" 
        src="https://i.pinimg.com/736x/c0/7e/a0/c07ea06c28f63ec65396c0ca541cc45a.jpg" 
        alt="Centered UI Image" 
    />
</div>
     <h1 className='text-center text-2xl sm:text-5xl font-medium'> About</h1>
     <p className='text-center py-2 font-medium'>The name Arslan (also spelled Aslan, Arsalan) is a Turkic masculine given name originating from Old Turkic, translating directly to "lion". It is often used figuratively to denote bravery, fearlessness, and leadership. Throughout history, it has been associated with rulers, warriors, and noble figures across Central Asian, Persian, and Turkish cultures.</p>
    </div>
  )
}

export default About
