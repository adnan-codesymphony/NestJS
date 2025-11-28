import React, { useState } from 'react'
import { tabs } from '../Data/tabs'

function TabbingSystem() {

  let [activeTab, setActiveTabs] = useState(0)
 
  let changeData = (index) => {
    setActiveTabs(index)
  }

  return (
    <div>
        <div className='w-[1170px] m-auto text-center'>
            <h1 className='text-[40px] text-left'>Tabbing System</h1>
            <ul className='flex m-0 p-0 gap-[10px] mt-10'>
                {
                    tabs.map((tabsItems,index)=>{

                        return (
                           <li key={index}><button onClick={()=>changeData(index)} className={activeTab==index ? 'bg-red-500 text-white py-[0.5rem] px-[20px] mr-[18px] font-semibold cursor-pointer' :'bg-gray-300 text-black py-[0.5rem] px-[20px] mr-[18px] font-semibold cursor-pointer'}>{tabsItems.title}</button></li>

                        )
                    })   
                }
            </ul>
            {
                tabs[activeTab]!==undefined ?
                <p className='mt-5'>{tabs[activeTab].description}</p>
                :
                ''
            }
            
        </div>
    </div>
  )
}

export default TabbingSystem


 //let [activeContent, setActiveContent] = useState(tabs[0])
 //setActiveContent(tabs[index])