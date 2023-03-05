
import Link from "next/link"
import { useRouter } from "next/router"
import { footerLinks } from "../assets/footerLInks"




export default function Footer() {
    const { locale } = useRouter()

    return (
        <footer className="" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className=" py-12 lg:py-16">
                <div className="xl:grid xl:grid-cols-[2fr_2fr] xl:gap-y-8">

                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad personas' : 'People caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.people.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad transporte' : 'Transport caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.transport.map((item) => (
                                        <li key={item.label} >
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad baños' : 'Bathroom caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.bathroom.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad de salón' : 'Living room caad blocks'} </h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.livingRoom.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad cocina' : 'Kitchen caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.kitchen.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad decor' : 'Decor caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.decor.map((item) => (
                                        <li key={item.label} >
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad muebles de autor' : 'Author furniture caad blocks'}</h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.authorFurniture.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques Autocad de iluminación' : 'Ilumination caad blocks'} </h3>
                                <ul role="list" className="mt-1">
                                    {footerLinks.ilumination.map((item) => (
                                        <li key={item.label}>
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">Caaad.pro</h3>
                                <ul role="list" className="mt-4 grid grid-cols-2">
                                    {footerLinks.web.map((item) => (
                                        <li key={item.label} >
                                            <a href={`${locale === 'es' ? `/es${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900 cursorHover">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>





                    </div>

                </div>

                <div className="mt-3 border-t border-gray-200 pt-3">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} caaad. All rights reserved.</p>
                </div>

            </div>
        </footer >
    )
}
