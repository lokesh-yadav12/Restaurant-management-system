import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


const removeProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${backendUrl}/api/product/remove/${id}`,
      { headers: { token } }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};


  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className="mb-2 font-semibold text-lg">All Products List</p>
      <div className="flex flex-col gap-2 overflow-x-auto">
        {/* ---- List table title (hidden on mobile) ---- */}
        <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-semibold">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* ------ Product list ------ */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr_1fr] items-center gap-3 py-2 px-4 border rounded-lg text-sm hover:bg-gray-50 transition"
            key={index}
          >
            {/* Image */}
         

           <img
  className="w-32 h-32 object-cover"
  src={`${backendUrl}${item.image[0]}`}
  alt={item.name}
/>



            {/* Name */}
            <p className="font-medium">{item.name}</p>

            {/* Price */}
            <p className="text-gray-700">{currency}{item.price}</p>

            {/* Delete Action */}
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-500 text-right md:text-center text-lg font-bold hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default List
