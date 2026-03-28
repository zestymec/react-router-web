import React from 'react'

function About() {
    return (
        <>
            <div className="container m-3 px-6 text-gray-600 md:px-12 xl:px-6 py-3">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                    <img
                    className="w-[15vw] h-auto rounded-xl shadow-lg border-2 border-gray-100 object-cover"
                    src="https://i.pinimg.com/736x/c0/7e/a0/c07ea06c28f63ec65396c0ca541cc45a.jpg"
                    alt="Centered UI Image"
                />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The name Arslan (also spelled Aslan, Arsalan) is a Turkic masculine given name originating from Old Turkic, translating directly to "lion". It is often used figuratively to denote bravery, fearlessness, and leadership. Throughout history, it has been associated with rulers, warriors, and noble figures across Central Asian, Persian, and Turkish cultures.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
