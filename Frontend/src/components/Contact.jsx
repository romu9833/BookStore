import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
<>

<div className='flex h-screen items-center justify-center '>
<div className=" w-[700px]">
<div className="modal-box">
<form onSubmit={handleSubmit(onSubmit)} method="dialog">
  {/* if there is a button in form, it will close the modal */}
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

<h3 className="font-bold text-lg">Contact</h3>
<div className=' mt-4 space-y-2'>
   <span>Name</span>
   <br />
   <input type="text" placeholder="Enter your full name" className='w-80 px-3 py-1 border rounded-md outline-one '  {...register("name", { required: true })} />
   <br />
   {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

</div>
<div className=' mt-4 space-y-2'>
   <span>Email</span>
   <br />
   <input type="email" placeholder="Enter your email" className='w-80 px-3 py-1 border rounded-md outline-one ' {...register("email", { required: true })} />
   <br />
   {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
 
  
</div>

{/* <div className='mt-4 space-y-2'>
   <span>Password</span>
   <br />
   <input type="password" placeholder="Enter your password" className='w-80 px-3 py-1 border rounded-md outline-one ' {...register("password", { required: true })} />
   <br />
   {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
</div> */}
<div className='mt-4 space-y-2'>
<span>Message</span>
  <br />
<textarea className="textarea textarea-bordered w-80 px-2 py-1 border rounded-md outline-one" placeholder="type your message"></textarea>
</div>
</form>
</div> 
</div>  
</div>

</>
  )
}

export default Contact