import React, { useState } from 'react';


const DonationMake = () => {
  const [amount, setAmount] = useState('');
  const [otherAmount, setOtherAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    if (e.target.value !== 'Other') {
      setOtherAmount('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    
    <div className="relative min-h-fit m-4 rounded-lg flex items-center justify-center bg-cover bg-center"
    style={{
        backgroundImage: `url('https://www.raialyoum.com/wp-content/uploads/2023/03/2023-03-15_06-38-39_609693.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      
      
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>

      <form onSubmit={handleSubmit} className="m-10 relative max-w-xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
        <h2 className="text-2xl text-blue-800 font-bold mb-2 text-center">Make a Donation</h2>
        <p className="text-gray-600 italic mb-4 text-center">
          Every donation, no matter how big or small, makes a significant difference to our cause. 
          Thank you for doing your part to help.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 p-2 rounded-full"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 p-2 rounded-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Donation amount</label>
          <div className="flex flex-wrap gap-4">
            {['20', '40', '60', '80', '100', 'Other'].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="amount"
                  value={value}
                  onChange={handleAmountChange}
                  className="mr-2"
                  checked={amount === value}
                />
                {value === 'Other' ? 'Other' : `$${value}`}
              </label>
            ))}
          </div>
          {amount === 'Other' && (
            <input
              type="number"
              placeholder="Amount"
              value={otherAmount}
              onChange={(e) => setOtherAmount(e.target.value)}
              className="mt-4 border border-gray-300 p-2 rounded-md w-full"
            />
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Company name (if applicable)"
            className="border border-gray-300 p-2 rounded-full w-full"
          />
        </div>
        <button
          type="submit"
          className=" bg-red-500 hover:bg-red-600 font-semibold text-white p-3 rounded-full w-full transition">
          Submit Donation
        </button>
      </form>
    </div>
    
    
  );
};

export default DonationMake;