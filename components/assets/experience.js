import { FaHtml5 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaSwift } from 'react-icons/fa'

export default function Skills() {
    return (
        <section className="text-black bg-gray-100 body-font dark:text-white dark:bg-gray-800">
            <div className="container px-4 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font text-black mb-4 dark:text-white">About</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Hello, I'm Alf, I'm currently living in Izmir, Turkey and yes I'm Turkish Front-end Developer at Switch Inc. Community Coordinator - Manager at Kaguwo's Pub and GAPI. Senior Moderator at Switch Industries and Discord Extreme List. Turkish Translator at AdBlock, WordPress, GearBot, DEL and more. Mostly using these languages for my projects and more, JavaScript and Python.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-72 h-1 rounded-full bg-purple-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0 dark:bg-gray-200">
                            <FaHtml5 className="text-5xl mx-auto inline-block" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3 dark:text-white">HTML</h2>
                            <p className="leading-relaxed text-base">
                                When I started to learn front-end development from scratch, it was hard. It's just <strong>hard.</strong> First month of learning HTML & CSS needs patience for write more understandable code blocks on your editor. After the first month, I tried to find easy ways to add more amazing stuff on my website and I found some frameworks whose supports plugins. Angular, Vue etc. but one of them impressed me. It was React. With this eco-system and understandable syntax, that day is the wonderful day for me. 💙
                            </p>
                            <a className="mt-3 text-blue-500 inline-flex items-center hover:underline" href="https://github.com/alfredsaveron">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0 dark:bg-gray-200">
                            <FaJsSquare className="text-5xl mx-auto inline-block" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3 dark:text-white">JavaScript</h2>
                            <p className="leading-relaxed text-base">
                                Everyone who interacts with programming is very familiar with this wonderful language, JavaScript, so at least I think so. My work on JavaScript is very -maybe- old. I developed multiple projects with the help of JavaScript. I feel free to use JavaScript, you can do whatever you dream of -maybe anything lol- . I think the best opportunity to start is with JavaScript, a programming language that is superior in usability and functionality with a lot of service areas.
                            </p>
                            <a className="mt-3 text-yellow-500 inline-flex items-center hover:underline" href="https://www.javascript.com/">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-600 mb-5 flex-shrink-0 dark:bg-gray-200">
                            <FaSwift className="text-5xl mx-auto inline-block" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3 dark:text-white">Swift</h2>
                            <p className="leading-relaxed text-base">
                                Well, September 5 - 2019... I remember very well when I bought my first MacBook with 4 months of summer work. I was fill-in happiness when I opening the box. It was exciting... But there's a reason I bought my MacBook. Swift Programming Language. On these days, I was using iPhone 6 and I want to create a special application for myself. So I researched about iOS, watchOS and macOS apps, I saw that there's a one optimised, created by Apple. You guesssed, it's Swift. So far I've created 3 apps, they all suck. So I stopped learning Swift and decided to learn React Native for the easiest way. 😂
                            </p>
                            <a className="mt-3 text-yellow-600 inline-flex items-center hover:underline" href="https://swift.org/">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
