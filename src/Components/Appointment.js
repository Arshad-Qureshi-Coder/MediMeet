import React from 'react';

const Appointment = () => {
  return (
    <>
      <div
        className="text-black font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
        style={{
          width: '100%',
          backgroundColor: '#e9ecef',
          marginTop: '5rem',
        }}
      >
        <div className="flex items-center justify-evenly">
          <div className="font-bold">
            <h1 className="text-black font-bold pb-5">
              Book Appointment <br />
              With 100+ Trusted Doctors
            </h1>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Create Account
            </button>
          </div>

          {/* Outer and inner border structure */}
          <div
            className="relative"
            style={{
              width: '30rem',
              height: '30rem',
              borderRadius: '50%',
              padding: '5px',
              border: '30px solid #cbcbcb',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
          >
            {/* Inner border div */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: '#71d5b8',
                border: '20px solid #fff',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Image inside the circle */}
              <img
                src="/images/assets/assets_frontend/appointment_img.png"
                alt="doctors-appointment"
                className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '34rem',
                  height: '33rem',
                  left: '50%',
                  top: '44%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
