import React from 'react'

const Footer = () => {
  return (
    <div className="h-[40vh] w-full">
        <div 
        className="container border-b border-gray-300 flex justify-between mt-[12rem] pb-2 ">
        <div>
        <img
            src="/images/assets/medi-meet-removebg.png"
            alt="Logo"
            className="w-50 h-30 mr-3"
          />
          <p className='pl-3'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> 
            industry. Lorem Ipsum has been the industry's standard dummy <br/>
            text ever since the 1500s, when an unknown printer took a galley of <br/>
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
            <h1  className='text-[25px] md: text-[20px]'>COMPANY</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>
        <div>
        <h1 className='text-[25px] md: text-[20px]'>GET IN TOUCH</h1>
            <div>
                <ul>
                    <li>
                        +0-000-000-000
                    </li>
                    <li > <a href='#' className='no-underline'>medimeet@xyz.com</a></li>
                </ul>
            </div>
        </div>
        </div>
        <div>
            <p className='text-center mt-3'>Copyright 2024 @ MediMeet.dev - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer