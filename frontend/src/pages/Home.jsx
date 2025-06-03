import React from 'react'
import { useGSAP } from '@gsap/react';
import  gsap  from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel';
import 'remixicon/fonts/remixicon.css';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  
  const submitHandler = () =>{e.preventDefault()}



  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        pading: 24
        //opacity: 1
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current, {
      height: '0%',
      opacity: 0
    })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
          transform:'translateY(0)'
    })
      }else{
        gsap.to(vehiclePanelRef.current, {
          transform:'translateY(100%)'
        }) 
      }
  },[vehiclePanel])

   useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'

      })
    } else {
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])
  
  return (
    <div className='h-screen relative overflow-hidden '>
      <img className='w-16 absolute left-5 top-5' src="https://icon2.cleanpng.com/lnd/20241123/fe/01a0c7a4bc31fd14d50f86a45d55c0.webp" alt=""/>
      
      <div className='h-screen w-screen'>
         {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://cdn.dribbble.com/users/844221/screenshots/4539927/attachments/1027442/uber-search-2.png?resize=400x300&vertical=center" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
      <div className='h-[30%] p-6 bg-white relative'>
       <h5
       ref={panelCloseRef}
       onClick={() => {setPanelOpen(false)}} 
       className='absolute opacity-0 right-6 top-6 text-2xl'>
        <i className="ri-arrow-down-wide-line"></i>
       </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {submitHandler(e)}}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
          <input 
          onClick={() => {setPanelOpen(true)}}
          value={pickup}
          onChange={(e) =>{ setPickup(e.target.value)}}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-5' 
          type="text" 
          placeholder='Add a pick-up location'/>
          <input 
          onClick={() => {setPanelOpen(true)}}
          value={destination}
          onChange={(e) =>{ setDestination(e.target.value)}}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg  w-full mb-3' 
          type="text" 
          placeholder='Enter your destination'/>
        </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel vehiclePanel={vehiclePanel} setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
       <VehiclePanel setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>

   </div>
   
    
  )
}

export default Home
