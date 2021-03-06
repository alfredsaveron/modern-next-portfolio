import { FaTelegram } from 'react-icons/fa'
import { FaFontAwesomeFlag } from 'react-icons/fa'

export default function Footer() {
    return (
        <section className="text-gray-500 body-font bg-gray-900">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Made with 💜 by Kaguwo Network.</h1>
                    <p className="leading-relaxed text-base">
                        Most of the components are taken from GitHub and other template websites. What is Kaguwo Network? Kaguwo Network is a group jointly managed by a group of developers and developing open source projects. So where do Kaguwo Network Developers live? In fact, we all live in Turkey. But we are all in different cities, 2 of our members live in Adana, 1 member lives in Izmir, and the other 1 member lives in Muğla.
                    </p>
                    <a className="text-purple-500 inline-flex items-center mt-4" href="https://github.com/KaguwoNetwork"> Kaguwo Network
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ASSETS AND ADDITIONAL LINKS FROM OTHER CREATORS</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                            <a className="hover:text-white" href="https://github.com/BraydenTW/react-tailwind-portfolio/">Brayden W. Card Design</a>
                        </li>
                        <hr />
                        <li className="lg:w-1/2 mb-1 w-1/3">
                            <a className="hover:text-white" href="https://alfreddo.ga">Portfolio & Main Portfolio and Photos!</a>
                        </li>
                         <hr />
                        <li className="lg:w-1/2 mb-1 w-1/3">
                            <a className="hover:text-white" href="https://mertjf.github.io/tailblocks/">Skills & Footer Design</a>
                        </li>
                        <li className="lg:w-1/2 mb-1 w-1/3">
                            <a className="hover:text-white" href="https://react-icons.github.io/icons?name=fa">Font Awesome & Icons</a>
                        </li>
                    </nav>
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 mt-12">CONTACT</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                            <a className="hover:text-white" href="https://twitter.com/alfredsaveron">
                                <FaTelegram className="ml-1 w-12 h-12 sm:w-10 sm:h-10" />
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </section>
    )
}
