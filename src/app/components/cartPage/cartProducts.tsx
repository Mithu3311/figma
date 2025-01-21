// 'use client'
// import Image from 'next/image';
// import React from 'react'

// import { FaPlus, FaMinus, FaTrash} from "react-icons/fa";
// import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
// import { addCart, delItem, subtractCart } from '@/app/store/features/cart';
// import { Button } from '@/components/ui/button';

// const CartCard = () => {
//   const cartArray = useAppSelector((state) => state.cart);
//   const dispatch = useAppDispatch();
//   return (
//     <>
//     {cartArray.length>=1 && cartArray.map((item, i)=>(
//       <div key={i} className='flex px-10 py-3'>
//       {/* Image */}
//       <Image 
//       src={item.image[0]} 
//       alt={item.title} 
//       width={80} 
//       height={80} 
//       className='w-[100px] h-[100px]'/>
//       {/* some info */}
//       <div className='flex px-5 justify-between items-center w-full'>
//         <div>
//           {/* Title */}
//         <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead mb-3'>{item.title}</h2>
//         <div className='mt-2 flex items-center'>
//         <Button onClick={() => dispatch(subtractCart(item))} className='group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded text-sm duration-300'>
//           <FaMinus className='h-2 w-2 group-hover:text-myBlackHead'/>
//         </Button>
//         <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80'>
//         {item.qty}
//         </div>
//         <Button onClick={() => dispatch(addCart(item))} className='group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded text-sm duration-300'>
//           <FaPlus className='h-2 w-2 group-hover:text-myBlackHead'/>
//         </Button>
//       </div>
//       {/* for Mobile Screen */}
//        {/* Price and Delete */}
//        <div onClick={()=>dispatch(delItem(item.uuid))} className='mt-2 lg:hidden flex flex-col gap-3'>
//         <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'><span>Price:&nbsp;</span>&#x20A8;{item.discount>0?(item.price-(item.price*item.discount)/100)* item.qty:item.price * item.qty}</h3>
//         <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
//       </div>
//         </div>
//       </div>
//       {/* For Desktop */}
//       {/* Price and Delete */}
//       <div onClick={()=>dispatch(delItem(item.uuid))} className='hidden lg:flex flex-col items-end gap-5'>
//         <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'><span>Price:&nbsp;</span>&#x20A8;{item.discount>0?(item.price-(item.price*item.discount)/100)* item.qty:item.price * item.qty}</h3>
//         <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
//       </div>
//     </div>
//     ))}
//     </>
//   )
// }

// export default CartCard
