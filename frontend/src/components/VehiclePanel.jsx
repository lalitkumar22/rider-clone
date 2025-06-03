import Recat from 'react'

const vehiclePanel = (props) => {

    return(

<div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
   <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
      props.setVehiclePanelOpen(false)
      
   }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
   <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
   
   <div onClick={()=>{
    props.setConfirmRidePanel(true)
   }}className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
      <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" />
      <div className='ml-2 w-1/2'>
      <h4 className='font-medium text-base'>Uber Go<span><i className='ri-useer-3-fill'></i>4</span></h4>
      <h4 className='font-medium text-sm'>2 mins away </h4>
      <p className='font-normal text-xs text-grey-600'>Affordable, compact rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹193</h2>
      </div>

        <div onClick={()=>{
        props.setConfirmRidePanel(true)
        }}
      className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
      <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXFgDqA4hgTAoCQ1cbjnygbPD3UPsBo41A&s" />
      <div className='ml-2 w-1/2'>
      <h4 className='font-medium text-base'>Moto<span><i className='ri-useer-3-fill'></i>4</span></h4>
      <h4 className='font-medium text-sm'>3 mins away </h4>
      <p className='font-normal text-xs text-grey-600'>Affordable motorcycle rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹65</h2>
      </div>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        }}
       className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
      <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbOxsNo6C5DHSbdJnM7s07XE9F-se73qA6A&s" />
      <div className='ml-2 w-1/2'>
      <h4 className='font-medium text-base'>Uber Auto<span><i className='ri-useer-3-fill'></i>4</span></h4>
      <h4 className='font-medium text-sm'>3 mins away </h4>
      <p className='font-normal text-xs text-grey-600'>Affordable auto rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹118.68</h2>
      </div>
   </div>
    )
}
export default vehiclePanel