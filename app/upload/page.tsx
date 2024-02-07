'use client'
import React, { useState } from 'react'
import { CldUploadWidget , CldImage } from 'next-cloudinary'
 
interface CloudinartResult {
    public_id: string
}


const UploadPage = () => {
    const [publicId,setPublicId] = useState('')
    return (
        <>
        {publicId && <CldImage src={publicId} width={270} height={180}  alt='Image'/>}
        <CldUploadWidget uploadPreset='kwsny4so'
         onUpload={(result,widget)=>{
            const info = result.info as CloudinartResult;
            setPublicId(info.public_id)
            console.log(info.public_id)
         }}
         options={{
            sources:['local'],
            multiple:false,
            maxFiles:5
         }}>
            {({ open }) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
        </>
    )
}

export default UploadPage
