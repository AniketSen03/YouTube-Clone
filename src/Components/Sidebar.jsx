import React, { useState } from 'react'
import './sidebar.css'
const Sidebar = ({ toggle, category, setcategory }) => {

    return (
        <>
            <div className={`${toggle ? 'zindexsidebar transition-all 1s ease-in text-zinc-300 font-light small flex flex-col justify-center items-center float-left w-[14%]':'toggle'}`} >
                <div className= 'list-none pt-4 mt-8 '>
                    <button className={`${category === 0 ? 'active' : ''} `} onClick={() => { setcategory(0) }} >
                        <li className=' ml-4 h-full my-2  flex items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-house-door-fill" viewBox="0 0 16 16" >
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                            </svg>
                            <span className='text-xl ml-4 '>Home</span></li>
                    </button>
                    <button className={`${category === 42 ? 'active' : ''}`} onClick={() => { setcategory(42) }}>
                        <li className=' ml-4 h-full my-2  flex items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fill-rule="evenodd"></path></svg>
                            <span className=' text-xl  ml-4 '>Shorts</span></li>
                    </button>
                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2 flex items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl  ml-4 '>Subscriptions</span></li>
                    </button>
                </div>
                <hr className='bg-white h-2 w-[11em]' />
                <div className=' items-center list-none pt-4'>
                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full flex'>
                            <span className='text-xl font-bold'>Subscriptions</span></li>
                    </button>

                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <img src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/491872716_1192376109025827_1592062212087948190_n.jpg?ccb=11-4&oh=01_Q5Aa1wGURYT4n_F3Yj6wfbAO01z4RgWjcPgzx_wSdCWzopb8NA&oe=68590D5E&_nc_sid=5e03e0&_nc_cat=104" alt="" className='rounded-full' width={24} />
                            <span className='channelreduce text-xl ml-4'>Aniket Sen</span></li>
                    </button>
                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/DD_News_New_Logo.png" alt="" className='rounded-full' width={24} />
                            <span className='channelreduce text-xl ml-4 '>DD News</span></li>
                    </button>

                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <img src="https://yt3.googleusercontent.com/ytc/AIdro_m1WLxquYeEO9VgyA7-cYFrn_hd2dSaNtmL8-NIHMCQIuPQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='rounded-full' width={24} />
                            <span className='text-xl ml-4'>Aaj Tak</span></li>
                    </button>
                    <button className={`${category === 'UCx8Z14PpntdaxCt2hakbQLQ' ? 'active' : ''}`} onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <img src="https://yt3.googleusercontent.com/CdR2ybs_Tz3mnJANjVWszTsYsSQbVmFUdYnqndK-K7j-tKRYH6Yz8gZpHb5bOvEtgFyHyAzMgQ=s900-c-k-c0x00ffffff-no-rj" alt="" className='rounded-full' width={24} />
                            <span className='channelreduce text-xl ml-4'>The Lallantop</span></li>
                    </button>
                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M5 8.5c.828 0 1.5-.672 1.5-1.5S5.828 5.5 5 5.5 3.5 6.172 3.5 7 4.172 8.5 5 8.5ZM8 7c0-.414.336-.75.75-.75h11.5c.414 0 .75.336.75.75s-.336.75-.75.75H8.75C8.336 7.75 8 7.414 8 7Zm.75 4.25c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8.75Zm0 5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8.75ZM6.5 12c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5ZM5 18.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z" fill-rule="evenodd"></path></svg>
                            <span className='channelreduce text-xl ml-4'>All subscriptions</span></li>
                    </button>
                </div>
                <hr className='bg-white h-2 w-[11em]' />
                <div className=' items-center list-none pt-4 '>
                    <button onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full flex'>
                            <span className='text-xl font-bold'>Explore</span></li>

                    </button>
                    <button className={`${category === 22 ? 'active' : ''}`} onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl ml-4'>Trending</span></li>
                    </button>
                    <button className={`${category === 26 ? 'active' : ''}`} onClick={() => { setcategory() }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M12 2.5c-.328 0-.653.065-.957.19-.303.126-.579.31-.81.542-.233.232-.417.508-.543.811-.125.304-.19.629-.19.957v1h5V5c0-.328-.065-.653-.19-.957-.126-.303-.31-.579-.542-.81-.232-.233-.508-.417-.811-.543-.304-.125-.629-.19-.957-.19ZM16 5v1h3.5c.828 0 1.5.672 1.5 1.5V18c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7.5C3 6.672 3.672 6 4.5 6H8V5c0-.525.103-1.045.304-1.53.201-.486.496-.927.868-1.298.371-.372.812-.667 1.297-.868C10.955 1.104 11.475 1 12 1c.525 0 1.045.103 1.53.304.486.202.927.496 1.298.868.372.371.667.812.867 1.297C15.896 3.955 16 4.475 16 5Zm-4 7.5c-.328 0-.653-.065-.957-.19-.303-.126-.579-.31-.81-.542-.233-.232-.417-.508-.543-.811-.125-.304-.19-.629-.19-.957 0-.414-.336-.75-.75-.75S8 9.586 8 10c0 .525.103 1.045.304 1.53.201.486.496.927.868 1.298.371.372.812.667 1.297.867.486.201 1.006.305 1.531.305.525 0 1.045-.104 1.53-.305.486-.2.927-.495 1.298-.867.372-.371.667-.812.867-1.297.201-.486.305-1.006.305-1.531 0-.414-.336-.75-.75-.75s-.75.336-.75.75c0 .328-.065.653-.19.957-.126.303-.31.579-.542.81-.232.233-.508.417-.811.543-.304.125-.629.19-.957.19Zm-7.5-5h15V18c0 1.38-1.12 2.5-2.5 2.5H7c-1.38 0-2.5-1.12-2.5-2.5V7.5Z" fill-rule="evenodd"></path></svg>
                            <span className=' text-xl ml-4 '>Shopping</span></li>
                    </button>

                    <button className={`${category === 10 ? 'active' : ''}`} onClick={() => { setcategory(10) }}>
                        <li className=' ml-4 h-full my-2 mr-5 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M19 3c0-.271-.146-.521-.383-.654-.237-.133-.527-.127-.758.014l-9 5.5c-.223.136-.359.379-.359.64v7.901C8.059 16.146 7.546 16 7 16c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-7.08l7.5-4.583v6.064c-.441-.255-.954-.401-1.5-.401-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3Zm-1.5 13c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm-9 3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm9-13.42L10 10.162V8.92l7.5-4.584V5.58Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl ml-4'>Music</span></li>
                    </button>
                    <button className={`${category === 1 ? 'active' : ''}`} onClick={() => { setcategory(1) }}>
                        <li className=' ml-4 h-full my-2  mr-5 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m3.116 5.998 16.79-2.66.157.988-16.79 2.66-.157-.988Zm-1.481.235c-.13-.819.428-1.587 1.247-1.717l16.79-2.659c.819-.13 1.587.429 1.716 1.247l.157.988.234 1.481-1.481.235L6.463 7.999H22v11.5c0 .829-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.671-1.5-1.5V8.539L1.79 7.22l-.156-.987Zm7.698 3.266h-2L9 11.999H6l-1.667-2.5H3.5v10h17v-10h-3.167L19 12h-3l-1.667-2.501h-2L14 12h-3L9.333 9.499Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl ml-4'>Flim</span></li>
                    </button>

                    <button className={`${category === 20 ? 'active' : ''}`} onClick={() => { setcategory(20) }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m12 7.75-.772-.464-4.186-2.511L2.5 7.803v6.307L12 19.29l9.5-5.181V7.803l-4.542-3.028-4.186 2.511L12 7.75ZM12 6 7.814 3.488c-.497-.298-1.122-.283-1.604.039L1.668 6.555C1.251 6.833 1 7.3 1 7.803v6.307c0 .548.3 1.054.782 1.316l9.5 5.182c.447.244.989.244 1.436 0l9.5-5.182c.482-.262.782-.768.782-1.316V7.803c0-.502-.25-.97-.668-1.248L17.79 3.527c-.482-.322-1.107-.337-1.604-.039L12 6Zm3.5 6.25c0 .69-.56 1.25-1.25 1.25S13 12.94 13 12.25 13.56 11 14.25 11s1.25.56 1.25 1.25ZM7 8c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C7.75 8.336 7.414 8 7 8Zm10.75 3c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl ml-4'>Gaming</span></li>
                    </button>
                    <button className={`${category === 25 ? 'active' : ''}`} onClick={() => { setcategory(25) }}>
                        <li className=' ml-4 h-full my-2  flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z" fill-rule="evenodd"></path></svg>
                            <span className='text-xl ml-4'>News</span></li>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Sidebar