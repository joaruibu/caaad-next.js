import Image from 'next/image';
import React, { useState } from 'react';




function SliderImg({ imgs }) {
    const slides = [
        {
            url: 'https://res.cloudinary.com/dwsa2s0pn/video/upload/v1686849054/premium-autocad-block-mp4/Grabacio%CC%81n_de_pantalla_2023-04-27_a_las_18.36.36_tgmhgh.mp4'
        },
        {
            url: 'https://res.cloudinary.com/dwsa2s0pn/video/upload/v1686849054/premium-autocad-block-mp4/Grabacio%CC%81n_de_pantalla_2023-04-27_a_las_18.36.36_tgmhgh.mp4'
        },
        {
            url: 'https://res.cloudinary.com/dwsa2s0pn/video/upload/v1686849039/premium-autocad-block-mp4/Prueba_mdagfm.mp4'
        },

        // {
        //     url: 'https://res.cloudinary.com/dwsa2s0pn/image/upload/v1671648010/free-autocad-block-image/Verner_Panton_-_Amoebe_seat_-_signature_furniture_-_perspective_-_autocad_block_-_bloque_de_autocad_-_be_interior_designer_ky5wcr.png',
        // },
        // {
        //     url: 'https://res.cloudinary.com/dwsa2s0pn/image/upload/v1671696974/free-autocad-block-image/Verner_Panton_-_Cone_Chair_-_signature_furniture_-_elevation_-_autocad_block_-_bloque_de_autocad_-_be_interior_designer_zevewf.png',
        // },
        // {
        //     url: 'https://res.cloudinary.com/dwsa2s0pn/image/upload/v1671735554/free-autocad-block-image/Verner_Panton_-_Cone_Chair_-_signature_furniture_-_side_view_-_autocad_block_-_bloque_de_autocad_-_be_interior_designer_ncop4r.png',
        // },

        // {
        //     url: 'https://res.cloudinary.com/dwsa2s0pn/image/upload/v1671748171/free-autocad-block-image/Verner_Panton_-_Heart_Cone_Chair_-_signature_furniture_-_side_view_-_autocad_block_-_bloque_de_autocad_-_be_interior_designer_mvc0lo.png',
        // },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (

        <div className=' w-full m-auto grid content-center relative group'>
            {/* <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div> */}
            {/* <Image layout="responsive" width={250} height={165} alt={`Descargar bloque Autocad`} src={slides[currentIndex].url} priority className='duration-200' /> */}

            <video autoPlay loop >
                <source className='duration-200' src={slides[currentIndex].url} />
            </video>
            {/* <video src={slides[currentIndex].url}></video> */}
            {/* Left Arrow */}
            <div onClick={prevSlide} className='-rotate-180 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            {/* Right Arrow */}
            <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div >
    );
}

export default SliderImg;