import React from 'react'

import icon1 from '../assets/icons/Group 12.png'

const Why = () => {
  return (
    <div className='bg-[#E2E8F5] font-inter py-10 md:p-20 px-10'>
        <h1 className='text-center font-semibold text-[28px] md:text-[48px]'>Miks tulla õppima?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-56 md:py-20">
            <div className='grid grid-cols-1 gap-5 mt-14 md:mt-0 items-center'>
                <div className='flex justify-center'>
                    <img src={icon1} alt="" />
                </div>

                <div className='text-center grid gap-2'>
                    <h1 className='text-[20px] font-semibold'>Karjäärivõimalused</h1>
                    <p className='text-[16px]'>erinevates valdkondades ning võimalus spetsialiseeruda konkreetsele erialale, suurendades seeläbi tööalast konkurentsivõimet.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-5 mt-14 md:mt-0 items-center'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                        <circle cx="32.5" cy="32.5" r="31.5" stroke="#01215F" stroke-width="2"/>
                        <path d="M34.7192 27.0482C35.7092 27.5208 36.5712 28.2242 37.233 29.0991C37.8948 29.974 38.337 30.995 38.5223 32.0762C38.7077 33.1574 38.6309 34.2674 38.2984 35.3128C37.9658 36.3582 37.3873 37.3085 36.6113 38.0839L29.7558 44.9394C28.4702 46.2251 26.7264 46.9473 24.9082 46.9473C23.0901 46.9473 21.3463 46.2251 20.0607 44.9394C18.775 43.6538 18.0527 41.91 18.0527 40.0918C18.0527 38.2736 18.775 36.5299 20.0607 35.2443L22.7373 32.5676M43.0752 31.62L45.7519 28.9433C47.0376 27.6577 47.7598 25.9139 47.7598 24.0957C47.7598 22.2776 47.0376 20.5338 45.7519 19.2482C44.4663 17.9625 42.7225 17.2402 40.9043 17.2402C39.0861 17.2402 37.3424 17.9625 36.0568 19.2482L29.2013 26.1036C28.4253 26.8791 27.8467 27.8294 27.5142 28.8748C27.1817 29.9202 27.1049 31.0301 27.2902 32.1114C27.4756 33.1926 27.9178 34.2136 28.5796 35.0885C29.2413 35.9634 30.1034 36.6668 31.0934 37.1394" stroke="#01215F" stroke-width="2.03125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className='text-center grid gap-2'>
                    <h1 className='text-[20px] font-semibold'>Võrgustiku loomine</h1>
                    <p className='text-[16px]'>erinevate taustadega õpilaste vahel võimaldab uute kontaktide loomist, koostööd ning tulevaste karjäärivõimaluste avardamist.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-5 my-14 md:my-0 items-center'>
                <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <circle cx="32.5" cy="32.5" r="31.5" stroke="#01215F" stroke-width="2"/>
                    <path d="M32.0232 37.7355L40.9048 46.6172C41.6666 47.3546 42.6876 47.763 43.7477 47.7544C44.8078 47.7458 45.8221 47.3208 46.5717 46.5712C47.3214 45.8215 47.7463 44.8073 47.7549 43.7472C47.7635 42.687 47.3551 41.666 46.6177 40.9043L37.6645 31.9511M32.0232 37.7355L35.8257 33.1195C36.3086 32.5345 36.9531 32.1659 37.666 31.9526C38.5039 31.7027 39.4378 31.6662 40.3214 31.7393C41.5124 31.8416 42.7095 31.6306 43.7939 31.1274C44.8783 30.6241 45.8122 29.846 46.503 28.8704C47.1937 27.8947 47.6174 26.7554 47.7319 25.5654C47.8463 24.3755 47.6476 23.1763 47.1555 22.0868L42.1647 27.0791C41.3297 26.886 40.5657 26.4624 39.9597 25.8564C39.3537 25.2503 38.9301 24.4864 38.737 23.6514L43.7278 18.6606C42.6383 18.1685 41.4391 17.9698 40.2492 18.0842C39.0592 18.1987 37.9199 18.6224 36.9442 19.3131C35.9685 20.0039 35.1905 20.9378 34.6872 22.0222C34.184 23.1066 33.973 24.3037 34.0753 25.4947C34.2139 27.1339 33.9671 28.9438 32.6981 29.9889L32.5427 30.1184M32.0232 37.7355L24.9316 46.3475C24.5879 46.7665 24.1603 47.1088 23.6763 47.3526C23.1923 47.5963 22.6626 47.7359 22.1214 47.7626C21.5801 47.7892 21.0393 47.7022 20.5337 47.5072C20.0281 47.3122 19.5689 47.0135 19.1858 46.6303C18.8026 46.2472 18.5039 45.788 18.3089 45.2824C18.1139 44.7768 18.0269 44.236 18.0535 43.6947C18.0802 43.1535 18.2198 42.6238 18.4635 42.1398C18.7073 41.6558 19.0496 41.2282 19.4686 40.8845L29.8843 32.3075L23.6275 26.0508H21.481L18.0533 20.3379L20.3384 18.0527L26.0513 21.4805V23.627L32.5412 30.1168L29.8828 32.306M42.6187 42.6182L38.6197 38.6191M22.0401 43.7607H22.0523V43.7729H22.0401V43.7607Z" stroke="#01215F" stroke-width="2.03125" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>

                <div className='text-center grid gap-2'>
                    <h1 className='text-[20px] font-semibold'>Praktilised kogemused</h1>
                    <p className='text-[16px]'>ja oskused, mis on olulised reaalse töökeskkonna nõudmistele vastamiseks ja aitavad toime tulla erinevate väljakutsetega tööl.</p>
                </div>
            </div>
        </div>
        
        <div>
            <a href="/" className='flex justify-center'>
                <button className='btn py-3 px-5 bg-[#F99B49] hover:bg-[#e58a3f] duration-200 text-white flex items-center justify-center gap-1 rounded-full'>LOE LÄHEMALT</button>
            </a>
        </div>
    </div>
  )
}

export default Why