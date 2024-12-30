import React from 'react'

export default function HomePage() {
  const {setAudioStream, setFile } = props;


  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20'>
        <h1 className='font-semibold text 5-xl sm:text-6xl md:text-7xl'>Ulti
          <span className='text-blue-400 bold'>Translate</span></h1>
          <h3 className='font-medium md:text-lg'> Record
            <span className='text-blue-400'>&rarr;</span>
            Transcribe
            <span className='text-blue-400'>&rarr;</span>
            Translate</h3>
            <button className='flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-xl'>
              <p className='text-blue-400'>Record</p>
              <i className="fa-solid fa-microphone-lines"></i>
            </button>
            <p className='tex-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'> upload <input onChange={
              (e) => {const tempFile = e.target.files(0)
                setFile(tempFile)
              }
             }
            className='hidden' type='file' accept='.mp3,.wave'/>
            </label>an mp3 file</p>
            <p className='italic text-slate-500'>Free Forever!</p>
    </main>)
}
