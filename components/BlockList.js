import React, { useEffect } from 'react'
import { bloques } from '../assets/bloques';
import Block from './Block';

const BlockList = () => {

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `http://localhost:3000/api/hello`;
            const respuesta = await fetch(url);
            const bloquesa = await respuesta.json();


            return bloquesa
        }

        consultarAPI()
    }, [])

    return (
        <section className='grid grid-cols-4 gap-12'>
            {bloquesa.maps}

        </section>
    )
}

// export async function getStaticProps() {
//     const url = `http://localhost:3000/api/hello`;
//     const respuesta = await fetch(url);
//     const bloques = await respuesta.json();

//     console.log(bloques)
//     return {
//         props: {
//             bloques
//         }
//     }
// }

export default BlockList