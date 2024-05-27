import React from 'react'

const Why = () => {
  return (
    <div className='bg-white font-manrope'>
        <div className='grid gap-10 px-[160px] py-[128px]'>
            <h1 className='text-[32px] font-medium'>Miks tulla õppima?</h1>

            <div className='flex gap-3'>
              <div className='relative vector1 p-7 text-white'>
                <div className='grid grid-cols-1 gap-[270px]'>
                  <p></p>
                  <p></p>

                  <div className='grid gap-[8px] px-5'>
                    <h1 className='text-[18px] font-medium'>Karjäärivõimalused</h1>
                    <p className='text-[16px]'>Karjäärivõimalused erinevates valdkondades ning võimalus spetsialiseeruda konkreetsele erialale, 
                      suurendades seeläbi tööalast konkurentsivõimet.
                    </p>
                  </div>
                </div>
              </div>

              <div className='grid gap-3'>
                <div className='relative vector3 p-7 text-white'>
                  <div className='flex'>
                    <div className='grid gap-[8px] px-5 py-3'>
                      <h1 className='text-[18px] font-medium'>Võrgustiku loomine</h1>
                      <p className='text-[16px]'>
                      Võrgustiku loomine erinevate taustadega õpilaste <br/>
                      vahel võimaldab uute kontaktide loomist, <br/>
                      koostööd ning tulevaste karjäärivõimaluste <br/> avardamist.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='relative vector2 p-7 text-white'>
                  <div className='grid grid-cols-1 gap-[160px]'>
                    <p></p>
                    <p></p>

                    <div className='grid gap-[8px] px-5'>
                      <h1 className='text-[18px] font-medium'>Praktilised kogemused</h1>
                      <p className='text-[16px]'>
                        Praktilised kogemused ja oskused, mis on olulised <br/> reaalse töökeskkonna nõudmistele vastamiseks <br/>
                        ja aitavad toime tulla erinevate väljakutsetega tööl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Why