import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Api'
import axios from 'axios'
import moment from 'moment'
import './playvideo.css'
import { useParams } from 'react-router'

const Playvideo = ({ converter, day }) => {
    const [api, setapi] = useState(null)
    const [imgdata, setimgdata] = useState(null)
    const [comment, setcomment] = useState([])
    const { videoid } = useParams()

    const fetchvideodata = async () => {
        const videodetail = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API_KEY}`)
        setapi(videodetail.data.items[0])


    }
    useEffect(() => {
        fetchvideodata()
    }, [videoid])


    const channelimg = async () => {
        try {
            const channeldata = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API_KEY}`);
            setimgdata(channeldata.data.items[0]);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        channelimg()
    }, [api])

    const commentdata = async () => {
        const commentdetail = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoid}&key=${API_KEY}`)
        setcomment(commentdetail.data.items)
    }
    useEffect(() => {
        commentdata()
    }, [videoid])

    return (
        <>
            <div className=' float-left w-[60%] flex flex-col items-center'>
                <iframe width="914" height="514" src={`https://www.youtube.com/embed/${videoid}?autoplay=1`} className='iframesize rounded-lg' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='playvideoresponsive1 text-white flex flex-col justify-evenly'>
                    <h1 className='titlesize text-2xl mb-4 mt-2 font-bold '>{api?.snippet?.title || 'loading'}</h1>
                    <div className='adjustment flex justify-evenly items-center capitalize'>

                        <img src={imgdata ? imgdata.snippet.thumbnails.default.url : ''} alt=""
                            className='rounded-full h-8' />
                        <div className=''>
                            <h1 className='font-semibold text-zinc-300'>{api?.snippet?.channelTitle || 'loading...'}</h1>
                            <h1 className='font-thin text-xs text-zinc-300 mt-1'>{converter(imgdata?.statistics.subscriberCount || '')} Subscribers</h1>
                        </div>
                        <button className='bg-zinc-700 py-1 px-3 rounded-2xl font-semibold'>Join</button>
                        <button className='bg-white rounded-2xl py-1 px-2 text-black font-semibold'>Subscribe</button>
                        <div className='bg-zinc-700  rounded-2xl font-semibold text-center flex items-center justify-center'> <button className='bg-zinc-700 px-3 py-1 rounded-2xl font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><span className='ml-1'>{converter(api?.statistics?.likeCount || '')}</span></button> <span className='mr-2'>|</span>
                            <button className='bg-zinc-700 px-2 py-1 rounded-2xl font-semibold  ml-1 flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffff" fill="none ">
                                <path d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button></div>
                        <button className='bg-zinc-700 py-1 px-3 rounded-2xl font-semibold'>Share</button>
                        <button className='bg-zinc-700 py-1 px-3 rounded-2xl font-semibold'>Download</button>
                        <button className='bg-zinc-700  font-semibold rounded-full w-[33px] h-[33px] text-center'>...</button>
                    </div>
                    <div>
                        <div className='descriptionsize bg-zinc-800 mt-3 px-4 py-2 rounded-2xl text-justify'>
                            <span className='mr-5'>{converter(api?.statistics?.viewCount || '')} Views</span>
                            <span>{day(moment(api?.snippet?.publishedAt).fromNow())}</span>
                            <p className='mt-3'>{api?.snippet?.description || "No description available."}</p>
                        </div>

                        <div className='commentsize1 font-bold text-xl mt-3'>{converter(api?.statistics?.commentCount || '')} Comments</div>
                        {comment.map((data, i) => {
                            return (<div className='commentsize2 mt-3' key={i}>
                                <div className='flex mt-1'>
                                    <div>{data.snippet.topLevelComment.snippet.authorDisplayName}</div>
                                    <div className='ml-3'>{day(moment(data.snippet.topLevelComment.snippet.publishedAt).fromNow())}</div>
                                </div>
                                <p>{data.snippet.topLevelComment.snippet.textOriginal}</p>
                                <div>
                                    <div className='flex mt-2 gap-3'>
                                        <button className='bg-zinc-700 py-1 px-2 rounded-2xl font-semibold flex '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                            <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg><span className='ml-1'>{data.snippet.topLevelComment.snippet.likeCount}</span></button>
                                        <button className='bg-zinc-700 py-1 px-2 rounded-2xl font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffff" fill="none ">
                                            <path d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></button>
                                        <button className='bg-zinc-700 py-1 px-2 rounded-2xl font-semibold flex'>reply</button>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playvideo