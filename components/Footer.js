import Image from "next/image"
import { footerLinks } from "../assets/footerLInks"
import { useApp } from "../context";
/* This example requires Tailwind CSS v2.0+ */



export default function Footer() {

    const { tags, setTags } = useApp();
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
                                    <li key={item.name}>
                                        <a href={item.href} className="text-xs text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex space-x-6">
                            {footerLinks.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">Bloques personas</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.personas.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Bloques autos</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.autos.map((item) => (
                                        <li key={item.name} onClick={() => setTags([...tags, item.id.label])} >
                                            <a className="text-xs text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">Bloques baños</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.baños.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Bloques vivienda</h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {footerLinks.viviendas.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-xs text-gray-500 hover:text-gray-900">
                                                {item.name}
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
