import React from 'react'

const TopDoctor = () => {
  return (
    <div className='mt-5'>
        <div className='text-center pb-5  '>
            <h1 className='pb-1'>Top Doctors to Book</h1>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
    <div className="card " style={{ width: '15rem', height: '22rem', }}>
      <img src="/images/assets/assets_frontend/doc1.png" alt="Card Image" className="card-img-top" style={{ maxWidth: '100%', height: 'auto', backgroundColor: '#eaefff' }} />
      <div className="card-body">
        <p className="card-title">Avalaible</p>
        <h5 className="card-text">Dr. Richard James</h5>
        <p className="card-title">General Physician</p>
      </div>
    </div>
  </div>
  )
}

export default TopDoctor