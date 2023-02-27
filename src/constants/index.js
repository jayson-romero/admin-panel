import {
   ArrowPathIcon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
 } from '@heroicons/react/24/outline'

 import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export const user = {
   name: 'Tom Cook',
   email: 'tom@example.com',
   imageUrl:
     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
 export const navigation = [
   { name: 'Dashboard', href: '#', current: true },
   { name: 'Products', href: '#', current: false },
   { name: 'Orders', href: '#', current: false },
   { name: 'Customers', href: '#', current: false },
   { name: 'Statistics', href: '#', current: false },
   { name: 'Reviews', href: '#', current: false },
   { name: 'Transactions', href: '#', current: false },
   { name: 'Hot Offers', href: '#', current: false },
   { name: 'Appearance', href: '#', current: false },
 ]
 export const userNavigation = [
   { name: 'Your Profile', href: '#' },
   { name: 'Settings', href: '#' },
   { name: 'Sign out', href: '#' },
 ]
 

 export const products = [
   { name: 'Analytics',
    description: 'Get a better understanding of your traffic',
     href: '#',
      icon: ChartPieIcon },
      
   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
 ]
 export  const callsToAction = [
   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
   { name: 'Contact sales', href: '#', icon: PhoneIcon },
 ]