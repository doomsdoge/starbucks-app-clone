import Reward1 from '../assets/rewards-carousel-1.webp'
import Reward2 from '../assets/rewards-carousel-2.webp'
import Reward3 from '../assets/rewards-carousel-3.webp'
import IcedDrink from '../assets/iced_drink.webp'
import HotDrink from '../assets/hot_drink.webp'
import SbuxForLife from '../assets/starbucks-for-life.webp'
import SbuxSkyMiles from '../assets/sbux-skymiles.jpg'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    IconButton,
    Link
  } from '@chakra-ui/react'
import {MoonIcon, PhoneIcon, LockIcon, StarIcon, SunIcon, TimeIcon} from '@chakra-ui/icons'
import { Link as RouteLink } from 'react-router-dom'

export default function Home (){
    return (
        <>
            <div className="flex flex-1 justify-between">
                <div className="">
                    <div className="bg-white w-2/5 fixed left-0 top-0 h-screen pt-[100px] text-4xl font-bold flex items-center pl-[120px] z-20 shadow-md" >
                        <div className="">
                            Joy to you 🎁
                        </div>
                    </div>
                </div>
                <div className="bg-white w-3/5 h-auto z-0 shadow-inner">
                    <div className="bg-white h-[470px] px-10 pt-5">
                        <div className="my-5 font-bold text-md text-slate-800 tracking-widest">
                            STARBUCKS® REWARDS
                        </div>
                        <div className="flex justify-between items-start">
                            <div className='w-[310px]'>
                                <img src={Reward1} alt="" className=' rounded-xl' />
                                <div className='my-[20px] font-medium text-gray-700 text-[19px]'>
                                    Let us treat you—earn and redeem Stars for free drinks, food and more.
                                </div>
                            </div>
                            <div className='w-[310px]'>
                                <img src={Reward2} alt="" className=' rounded-xl' />
                                <div className='my-[20px] font-medium text-gray-700 text-[19px]'>
                                    Customize your order in the app and pick it up when it’s ready.
                                </div>
                            </div>
                            <div className='w-[310px]'>
                                <img src={Reward3} alt="" className=' rounded-xl' />
                                <div className='my-[20px] font-medium text-gray-700 text-[19px]'>
                                    Stop in on your birthday for a special treat on the house.
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                                <Link as={RouteLink} to='/register' _hover={{textDecoration:'none'}}>
                                    <button className="bg-black hover:bg-slate-800 border text-white font-bold px-4 py-2 rounded-full mr-3">
                                        Join now
                                    </button>
                                </Link>
                            </span>
                            <span>
                                <Link as={RouteLink} to='/' _hover={{textDecoration:'none'}}>
                                    <button className="bg-white hover:bg-slate-100 text-black font-bold px-4 py-2 rounded-full border border-slate-900">
                                        Learn More
                                    </button>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="bg-gray-50 h-[1600px] px-10 pt-[50px] flex flex-col items-center justify-start gap-7">
                        <div className='bg-white h-[400px] w-[500px] rounded-2xl shadow-sm px-5 py-5 flex flex-col justify-between'>
                            <div className='font-bold text-3xl'>
                                Answer a few questions to find something new
                            </div>
                            <hr />
                            <div>
                                What type of drink are you looking for?
                            </div>
                            <Link as={RouteLink} to='/' _hover={{textDecoration:'none'}}>
                                <div className='flex justify-between items-center bg-[#d4e9e2] h-[100px] rounded-xl pl-5 pr-7 overflow-hidden'>
                                    <div className='basis-4/5 flex flex-col justify-start items-start'>
                                        <div className='font-bold text-lg'>Iced</div> 
                                        <div className='text-lg'>Cool off and uplift</div>
                                    </div>
                                    <div className='basis-1/5 flex justify-end'>
                                        <img src={IcedDrink} alt="" className='w-[60px] mt-[40px]'/>
                                    </div>
                                </div>
                            </Link>
                            <Link as={RouteLink} to='/' _hover={{textDecoration:'none'}}>
                                <div className='flex justify-between items-center bg-[#d4e9e2] h-[100px] rounded-xl pl-5 overflow-hidden'>
                                    <div className='basis-4/5 flex flex-col justify-start items-start'>
                                        <div className='font-bold text-lg'>Hot</div> 
                                        <div className='text-lg'>Warm up and get going</div>
                                    </div>
                                    <div className='basis-1/5 flex justify-end'>
                                        <img src={HotDrink} alt="" className='w-[100px] mb-[30px]'/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='bg-white h-[490px] w-[500px] rounded-2xl shadow-sm overflow-hidden'>
                            <img src={SbuxForLife} alt="" className='w-[500px]'/>
                            <div className='flex flex-col gap-2 px-5 py-5'>
                                <div className='font-medium text-lg'>Play for your chance to win</div>
                                <div>
                                    Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more.
                                </div>
                                <Link as={RouteLink} to='/' _hover={{textDecoration:'none'}} className='flex justify-end'>
                                    <button className="bg-[#02754b] hover:bg-[#167a56] text-white font-bold mt-3 px-4 py-2 rounded-full">
                                        Join now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='bg-white h-[510px] w-[500px] rounded-2xl shadow-sm overflow-hidden'>
                            <img src={SbuxSkyMiles} alt="" className='w-[500px]'/>
                            <div className='flex flex-col gap-2 px-5 py-5'>
                                <div className='font-medium text-lg'>Closer to moments that matter</div>
                                <div>
                                Add extra cheer this holiday season by joining Starbucks® Rewards, linking it to Delta SkyMiles® to unlock 1 mile per $1 spent at Starbucks (excludes taxes & tips).
                                </div>
                                <Link as={RouteLink} to='/' _hover={{textDecoration:'none'}} className='flex justify-end'>
                                    <button className="bg-[#02754b] hover:bg-[#167a56] text-white font-bold mt-2 px-4 py-2 rounded-full">
                                        Sign up + link
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[1000px] px-10 pt-10 z-5 flex flex-col items-start justify-start gap-5 shadow-[0_-1px_20px_rgba(0,0,0,0.05)]">
                        <Accordion width='100%' allowMultiple allowToggle>
                            <AccordionItem border={'0px'}>
                                <AccordionButton px='0px' fontSize={24} fontWeight='medium' mb='30px' _hover={''} >
                                    <Box as='span' flex='1' textAlign={'left'}>
                                        About Us
                                    </Box>
                                    <AccordionIcon _hover={{bgColor:'#f8fafc', borderRadius:'20px'}}/>
                                </AccordionButton>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Our Company</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Our Coffee</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Stories and News</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Starbucks Archive</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Investor Relations</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Customer Service</Link>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem border={'0px'}>
                                <AccordionButton px='0px' fontSize={24} fontWeight='medium' mb='30px' _hover={''} >
                                    <Box as='span' flex='1' textAlign={'left'}>
                                        Careers
                                    </Box>
                                    <AccordionIcon _hover={{bgColor:'#f8fafc', borderRadius:'20px'}}/>
                                </AccordionButton>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Culture and Values</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Inclusion, Diversity, and Equity</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>College Achievement Plan</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Alumni Community</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>U.S. Careers</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>International Careers</Link>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem border={'0px'}>
                                <AccordionButton px='0px' fontSize={24} fontWeight='medium' mb='30px' _hover={''} >
                                    <Box as='span' flex='1' textAlign={'left'}>
                                        Social Impact
                                    </Box>
                                    <AccordionIcon _hover={{bgColor:'#f8fafc', borderRadius:'20px'}}/>
                                </AccordionButton>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>People</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Planet</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Environmental and Social Impact Reporting</Link>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem border={'0px'}>
                                <AccordionButton px='0px' fontSize={24} fontWeight='medium' mb='30px' _hover={''} >
                                    <Box as='span' flex='1' textAlign={'left'}>
                                        For Business Partners
                                    </Box>
                                    <AccordionIcon _hover={{bgColor:'#f8fafc', borderRadius:'20px'}}/>
                                </AccordionButton>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Landlord Support Center</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Suppliers</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Corporate Gift Card Sales</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Office and Foodservice Coffee</Link>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem border={'0px'}>
                                <AccordionButton px='0px' fontSize={24} fontWeight='medium' mb='30px' _hover={''} >
                                    <Box as='span' flex='1' textAlign={'left'}>
                                        Order and Pickup
                                    </Box>
                                    <AccordionIcon _hover={{bgColor:'#f8fafc', borderRadius:'20px'}}/>
                                </AccordionButton>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Order on the App</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Order on the Web</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Delivery</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Order and Pickup Options</Link>
                                </AccordionPanel>
                                <AccordionPanel fontSize={20} color='grey'>
                                    <Link as={RouteLink} to='/' _hover={{textDecoration:'none', color:'black'}}>Explore and Find Coffee for Home</Link>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <hr className='bg-[#f8fafc] w-full h-[1px]' />
                        <div className='flex justify-start items-center gap-4 py-5'>
                            <IconButton
                                as='a'
                                aria-label='spotify'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<PhoneIcon color={'white'} />}
                            />
                            <IconButton
                                as='a'
                                aria-label='facebook'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<MoonIcon color={'white'} />}
                            />
                            <IconButton
                                as='a'
                                aria-label='path'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<SunIcon color={'white'} />}
                            />
                            <IconButton
                                as='a'
                                aria-label='instagram'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<LockIcon color={'white'} />}
                            />
                            <IconButton
                                as='a'
                                aria-label='youtube'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<StarIcon color={'white'} />}
                            />
                            <IconButton
                                as='a'
                                aria-label='twitter'
                                size={'lg'}
                                bgColor='black'
                                isRound='true'
                                href='/'
                                _hover={{bgColor:'#02754b'}}
                                icon={<TimeIcon color={'white'} />}
                            />
                        </div>
                        <div className='flex flex-col items-start justify-center gap-5 mb-5'>
                            <Link as={RouteLink} to='/' fontWeight='medium' fontSize={20}>Privacy Notice</Link>
                            <Link as={RouteLink} to='/' fontWeight='medium' fontSize={20}>Terms of Use</Link>
                            <Link as={RouteLink} to='/' fontWeight='medium' fontSize={20}>Do Not Share My Personal Information</Link>
                            <Link as={RouteLink} to='/' fontWeight='medium' fontSize={20}>CA Supply Chain Act</Link>
                            <Link as={RouteLink} to='/' fontWeight='medium' fontSize={20}>Cookie Preferences</Link>
                        </div>
                        <div className='text-gray-500'>
                            © 2022 Starbucks Coffee Company. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[100px] z-30 px-10 flex justify-end items-start fixed bottom-0">
                <Link as={RouteLink} to='/menu'>
                    <button 
                        className="bg-[#02754b] text-xl text-white font-bold px-7 py-5 rounded-full shadow-md"
                    >
                        Start an Order
                    </button>
                </Link>
            </div>
        </>
    )
}