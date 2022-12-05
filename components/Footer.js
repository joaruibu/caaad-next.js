
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
                <div className="xl:grid xl:grid-cols-[1fr_2fr_2fr] xl:gap-3">

                    <div className="space-y-8 xl:col-span-1 ">
                        <div>
                            <h3 className="text-base font-medium text-gray-900">Caaad.pro</h3>
                            <ul role="list" className="mt-4 grid grid-cols-2">
                                {footerLinks.web.map((item) => (
                                    <li key={item[locale === 'es' ? 'label_ES' : 'label']} >
                                        <a href={`${locale === 'es' ? `/es/${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900">
                                            {item[locale === 'es' ? 'label_ES' : 'label']}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex space-x-6">
                            {footerLinks.social.map((item) => (
                                <a key={item[locale === 'es' ? 'label_ES' : 'label']} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item[locale === 'es' ? 'label_ES' : 'label']}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques personas' : 'People blocks'}</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.personas.map((item) => (
                                        <li key={item[locale === 'es' ? 'label_ES' : 'label']}>
                                            <a href={`${locale === 'es' ? `/es/${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques autos' : 'Vehicle blocks'}</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.autos.map((item) => (
                                        <li key={item[locale === 'es' ? 'label_ES' : 'label']} >
                                            <a href={`${locale === 'es' ? `/es/${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques baños' : 'Bathroom blocks'}</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.baños.map((item) => (
                                        <li key={item[locale === 'es' ? 'label_ES' : 'label']}>
                                            <a href={`${locale === 'es' ? `/es/${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item[locale === 'es' ? 'label_ES' : 'label']}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">{locale === 'es' ? 'Bloques vivienda' : 'People living'} </h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.viviendas.map((item) => (
                                        <li key={item[locale === 'es' ? 'label_ES' : 'label']}>
                                            <a href={`${locale === 'es' ? `/es/${item.href}` : `${item.href}`}`} className="text-xs text-gray-500 hover:text-gray-900">
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
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2022 caaad. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}
