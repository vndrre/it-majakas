import React from 'react'

import icon1 from '../assets/icons/Group 12.png'

const Why = () => {
  return (
    <div className='bg-[#E2E8F5] font-inter py-10 md:p-20 px-10'>
        <h1 className='text-center font-semibold text-[28px] md:text-[48px]'>Miks tulla õppima?</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:hidden gap-10 md:mx-56 md:py-20">
            <div className='grid grid-cols-1 gap-5 mt-14 md:mt-0 items-center'>
                <div className='flex justify-center'>
                    <img src={icon1} alt="" />
                </div>

                <div className='text-center lg:text-left grid gap-2'>
                    <h1 className='text-[20px] lg:text-[28px] font-semibold'>Karjäärivõimalused</h1>
                    <p className='text-[16px] lg:text-xl'>erinevates valdkondades ning võimalus spetsialiseeruda konkreetsele erialale, suurendades seeläbi tööalast konkurentsivõimet.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-5 mt-14 md:mt-0 items-center'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                        <circle cx="32.5" cy="32.5" r="31.5" stroke="#01215F" stroke-width="2"/>
                        <path d="M34.7192 27.0482C35.7092 27.5208 36.5712 28.2242 37.233 29.0991C37.8948 29.974 38.337 30.995 38.5223 32.0762C38.7077 33.1574 38.6309 34.2674 38.2984 35.3128C37.9658 36.3582 37.3873 37.3085 36.6113 38.0839L29.7558 44.9394C28.4702 46.2251 26.7264 46.9473 24.9082 46.9473C23.0901 46.9473 21.3463 46.2251 20.0607 44.9394C18.775 43.6538 18.0527 41.91 18.0527 40.0918C18.0527 38.2736 18.775 36.5299 20.0607 35.2443L22.7373 32.5676M43.0752 31.62L45.7519 28.9433C47.0376 27.6577 47.7598 25.9139 47.7598 24.0957C47.7598 22.2776 47.0376 20.5338 45.7519 19.2482C44.4663 17.9625 42.7225 17.2402 40.9043 17.2402C39.0861 17.2402 37.3424 17.9625 36.0568 19.2482L29.2013 26.1036C28.4253 26.8791 27.8467 27.8294 27.5142 28.8748C27.1817 29.9202 27.1049 31.0301 27.2902 32.1114C27.4756 33.1926 27.9178 34.2136 28.5796 35.0885C29.2413 35.9634 30.1034 36.6668 31.0934 37.1394" stroke="#01215F" stroke-width="2.03125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className='text-center lg:text-left grid gap-2'>
                    <h1 className='text-[20px] lg:text-[28px] font-semibold'>Võrgustiku loomine</h1>
                    <p className='text-[16px] lg:text-xl'>erinevate taustadega õpilaste vahel võimaldab uute kontaktide loomist, koostööd ning tulevaste karjäärivõimaluste avardamist.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-5 my-14 md:my-0 items-center'>
                <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <circle cx="32.5" cy="32.5" r="31.5" stroke="#01215F" stroke-width="2"/>
                    <path d="M32.0232 37.7355L40.9048 46.6172C41.6666 47.3546 42.6876 47.763 43.7477 47.7544C44.8078 47.7458 45.8221 47.3208 46.5717 46.5712C47.3214 45.8215 47.7463 44.8073 47.7549 43.7472C47.7635 42.687 47.3551 41.666 46.6177 40.9043L37.6645 31.9511M32.0232 37.7355L35.8257 33.1195C36.3086 32.5345 36.9531 32.1659 37.666 31.9526C38.5039 31.7027 39.4378 31.6662 40.3214 31.7393C41.5124 31.8416 42.7095 31.6306 43.7939 31.1274C44.8783 30.6241 45.8122 29.846 46.503 28.8704C47.1937 27.8947 47.6174 26.7554 47.7319 25.5654C47.8463 24.3755 47.6476 23.1763 47.1555 22.0868L42.1647 27.0791C41.3297 26.886 40.5657 26.4624 39.9597 25.8564C39.3537 25.2503 38.9301 24.4864 38.737 23.6514L43.7278 18.6606C42.6383 18.1685 41.4391 17.9698 40.2492 18.0842C39.0592 18.1987 37.9199 18.6224 36.9442 19.3131C35.9685 20.0039 35.1905 20.9378 34.6872 22.0222C34.184 23.1066 33.973 24.3037 34.0753 25.4947C34.2139 27.1339 33.9671 28.9438 32.6981 29.9889L32.5427 30.1184M32.0232 37.7355L24.9316 46.3475C24.5879 46.7665 24.1603 47.1088 23.6763 47.3526C23.1923 47.5963 22.6626 47.7359 22.1214 47.7626C21.5801 47.7892 21.0393 47.7022 20.5337 47.5072C20.0281 47.3122 19.5689 47.0135 19.1858 46.6303C18.8026 46.2472 18.5039 45.788 18.3089 45.2824C18.1139 44.7768 18.0269 44.236 18.0535 43.6947C18.0802 43.1535 18.2198 42.6238 18.4635 42.1398C18.7073 41.6558 19.0496 41.2282 19.4686 40.8845L29.8843 32.3075L23.6275 26.0508H21.481L18.0533 20.3379L20.3384 18.0527L26.0513 21.4805V23.627L32.5412 30.1168L29.8828 32.306M42.6187 42.6182L38.6197 38.6191M22.0401 43.7607H22.0523V43.7729H22.0401V43.7607Z" stroke="#01215F" stroke-width="2.03125" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>

                <div className='text-center grid lg:text-left gap-2'>
                    <h1 className='text-[20px] lg:text-[28px] font-semibold'>Praktilised kogemused</h1>
                    <p className='text-[16px] lg:text-xl'>ja oskused, mis on olulised reaalse töökeskkonna nõudmistele vastamiseks ja aitavad toime tulla erinevate väljakutsetega tööl.</p>
                </div>
            </div>
        </div>

        <div className='hidden md:hidden lg:grid grid-cols-3 gap-14'>
            <div className='grid gap-5 py-20'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" className='bg-[#01215F] rounded-full p-4 w-[70px] h-[70px]'>
                        <path d="M37.9689 26.5312V34.5C37.9689 36.5512 36.4932 38.3175 34.4589 38.5875C30.5457 39.1069 26.5539 39.375 22.5001 39.375C18.4464 39.375 14.4545 39.1069 10.5414 38.5875C8.50698 38.3175 7.03135 36.5512 7.03135 34.5V26.5312M37.9689 26.5312C38.4141 26.1443 38.7703 25.6657 39.013 25.1281C39.2558 24.5905 39.3793 24.0067 39.3751 23.4169V16.3238C39.3751 14.2969 37.9351 12.5456 35.9307 12.2456C33.8069 11.9277 31.6724 11.6856 29.5314 11.52M37.9689 26.5312C37.6051 26.8406 37.1814 27.0844 36.707 27.2437C32.1249 28.7641 27.3278 29.5365 22.5001 29.5312C17.5351 29.5313 12.7595 28.7269 8.29323 27.2437C7.83059 27.0899 7.40209 26.8479 7.03135 26.5312M7.03135 26.5312C6.58612 26.1443 6.22991 25.6657 5.98716 25.1281C5.74442 24.5905 5.62091 24.0067 5.6251 23.4169V16.3238C5.6251 14.2969 7.0651 12.5456 9.06948 12.2456C11.1933 11.9277 13.3278 11.6856 15.4689 11.52M29.5314 11.52V9.84375C29.5314 8.72487 29.0869 7.65181 28.2957 6.86064C27.5045 6.06947 26.4315 5.625 25.3126 5.625H19.6876C18.5687 5.625 17.4957 6.06947 16.7045 6.86064C15.9133 7.65181 15.4689 8.72487 15.4689 9.84375V11.52M29.5314 11.52C24.8508 11.1583 20.1494 11.1583 15.4689 11.52M22.5001 23.9062H22.5151V23.9213H22.5001V23.9062Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className='text-center grid gap-5'>
                    <h1 className='text-[32px] font-medium'>Karjäärivõimalused</h1>
                    <p className='text-[20px]'>erinevates valdkondades ning võimalus spetsialiseeruda konkreetsele erialale, suurendades seeläbi tööalast konkurentsivõimet.</p>
                </div>
            </div>

            <div className='grid gap-5 py-20'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" className='bg-[#01215F] rounded-full p-4 w-[70px] h-[70px]'>
                        <path d="M24.7313 16.2901C25.9497 16.8718 27.0108 17.7374 27.8253 18.8142C28.6398 19.8911 29.1839 21.1476 29.4121 22.4784C29.6403 23.8092 29.5457 25.1752 29.1365 26.4619C28.7272 27.7485 28.0151 28.9182 27.0601 29.8726L18.6226 38.31C17.0402 39.8924 14.8941 40.7814 12.6563 40.7814C10.4185 40.7814 8.2724 39.8924 6.69005 38.31C5.1077 36.7277 4.21875 34.5816 4.21875 32.3438C4.21875 30.106 5.1077 27.9599 6.69005 26.3776L9.98443 23.0832M35.0157 21.9169L38.31 18.6226C39.8924 17.0402 40.7814 14.8941 40.7814 12.6563C40.7814 10.4185 39.8924 8.2724 38.31 6.69005C36.7277 5.1077 34.5816 4.21875 32.3438 4.21875C30.106 4.21875 27.9599 5.1077 26.3776 6.69005L17.9401 15.1276C16.985 16.0819 16.2729 17.2516 15.8636 18.5382C15.4544 19.8249 15.3598 21.1909 15.588 22.5217C15.8162 23.8525 16.3603 25.109 17.1748 26.1859C17.9893 27.2627 19.0504 28.1283 20.2688 28.7101" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className='text-center grid gap-5'>
                    <h1 className='text-[32px] font-medium'>Võrgustiku loomine</h1>
                    <p className='text-[20px]'> erinevate taustadega õpilaste vahel võimaldab uute kontaktide loomist, koostööd ning tulevaste karjäärivõimaluste avardamist.</p>
                </div>
            </div>

            <div className='grid gap-5 py-20'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" className='bg-[#01215F] rounded-full p-4 w-[70px] h-[70px]' >
                        <path d="M21.4121 28.4438L32.3434 39.375C33.2809 40.2825 34.5375 40.7852 35.8423 40.7746C37.147 40.764 38.3954 40.241 39.318 39.3184C40.2406 38.3957 40.7637 37.1474 40.7743 35.8427C40.7848 34.5379 40.2822 33.2812 39.3746 32.3438L28.3553 21.3244M21.4121 28.4438L26.0921 22.7625C26.6865 22.0425 27.4796 21.5888 28.3571 21.3263C29.3884 21.0188 30.5378 20.9738 31.6253 21.0638C33.0912 21.1896 34.5645 20.93 35.8991 20.3106C37.2337 19.6912 38.3832 18.7336 39.2334 17.5328C40.0835 16.3319 40.605 14.9297 40.7458 13.4651C40.8867 12.0006 40.6422 10.5246 40.0365 9.18375L33.894 15.3281C32.8663 15.0905 31.926 14.5691 31.1802 13.8232C30.4343 13.0774 29.9129 12.1371 29.6753 11.1094L35.8178 4.96687C34.4769 4.36118 33.0009 4.11664 31.5364 4.25753C30.0718 4.39842 28.6696 4.91983 27.4687 5.77003C26.2679 6.62023 25.3103 7.76965 24.6909 9.10424C24.0715 10.4388 23.8119 11.9122 23.9378 13.3781C24.1084 15.3956 23.8046 17.6231 22.2428 18.9094L22.0515 19.0688M21.4121 28.4438L12.684 39.0431C12.261 39.5588 11.7347 39.9801 11.139 40.2801C10.5433 40.58 9.8914 40.7519 9.22525 40.7847C8.5591 40.8175 7.89347 40.7104 7.2712 40.4704C6.64892 40.2304 6.0838 39.8628 5.61219 39.3912C5.14058 38.9196 4.77294 38.3545 4.53294 37.7322C4.29293 37.1099 4.18588 36.4443 4.21867 35.7781C4.25145 35.112 4.42336 34.4601 4.72331 33.8644C5.02326 33.2687 5.44461 32.7424 5.96025 32.3194L18.7796 21.7631L11.079 14.0625H8.43713L4.21838 7.03125L7.03088 4.21875L14.0621 8.4375V11.0794L22.0496 19.0669L18.7778 21.7613M34.4528 34.4531L29.5309 29.5313M9.12525 35.8594H9.14025V35.8744H9.12525V35.8594Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className='text-center grid gap-5'>
                    <h1 className='text-[32px] font-medium'>Praktilised kogemused</h1>
                    <p className='text-[20px]'>ja oskused, mis on olulised reaalse töökeskkonna nõudmistele vastamiseks ja aitavad toime tulla erinevate väljakutsetega tööl</p>
                </div>
            </div>
        </div>
        
        <div>
            <a href="/" className='flex justify-center'>
                <button className='btn lg:scale-125 py-3 px-5 bg-[#F99B49] hover:bg-[#e58a3f] duration-200 text-white flex items-center justify-center gap-1 rounded-full'>LOE LÄHEMALT</button>
            </a>
        </div>
    </div>
  )
}

export default Why