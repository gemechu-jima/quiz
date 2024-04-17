import React, {useState, useRef, useEffect} from 'react'

export default function ImageUpload(props) {
    const [file, setFile]=useState("")
    const [previewUrl, setPreviewUrl]=useState()
    const [isValid, setIsValid]=useState(false)
    const filePickedRef=useRef()

    useEffect(() => {
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => setPreviewUrl(fileReader.result);
        fileReader.readAsDataURL(file);
      }, [file]);
    const handleUpload=(ev)=>{
        const pickedFile = ev.target.files && ev.target.files[0];
        setFile(pickedFile);
        setIsValid(Boolean(pickedFile));
        props.setImage(pickedFile)
    }
  return (
    <div>
       {!previewUrl &&<div className='form-control'>
        <input ref={filePickedRef} type='file' accept='.jpg, .png, .jpeg' onChange={handleUpload}/>
        </div>
        }
        <div>
        {previewUrl && <img src={previewUrl} alt="preview"/>}
        {!previewUrl && <p>please pick image</p>}
        </div>
    </div>
  )
}
