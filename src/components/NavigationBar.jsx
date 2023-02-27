import React from 'react'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,
} from '@heroicons/react/24/outline'

 import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { user, navigation, userNavigation, products, callsToAction} from '../constants'
import Header from './Header'

const solutions = [
   {
     name: 'Insights',
     description: 'Measure actions your users take',
     href: '##',
    
   },
   {
     name: 'Automations',
     description: 'Create your own targeted content',
     href: '##',
    
   },
   {
     name: 'Reports',
     description: 'Keep track of your growth',
     href: '##',
  
   },
 ]

const NavigationBar = () => {
  return (
   <>
          
          <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">

      <div className="">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

      </Popover.Panel>
      </Popover>
     
   </>
  )
}

export default NavigationBar