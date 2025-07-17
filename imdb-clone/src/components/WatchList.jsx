import React from 'react'

function Watchlist() {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white bg-blue-400 font-bold mx-4'>Action</div>
      <div className='flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white bg-gray-400 font-bold'>Action</div>
    </div>



    <div className='flex justify-center my-4'>
      <input type="text" className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' placeholder='Search for any movie'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
            <tr className='border-b-2'>
              <td className='flex item-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqF1VCtS_saDYXIgaE51zRyeL0h4wxWrdz5w&s'}/>
                <div className='mx-10'>KALKI 2898AD</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Mythology</td>
              <td className='text-red-800'>Delete</td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default Watchlist