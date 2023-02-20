
const state = {
    icons:[
        {loc: "https://cdn-icons-png.flaticon.com/512/60/60817.png", name: "Home"},
        {loc: "https://static.thenounproject.com/png/456181-200.png", name: "Subscriptions"},
        {loc: "https://static.thenounproject.com/png/2481186-200.png", name: "Library"},
        {loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "History"},
        {loc: "https://static.thenounproject.com/png/1261644-200.png", name: "Your videos"},
        {loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "Watch Later"},
        {loc: "https://cdn4.iconfinder.com/data/icons/interface-vol-3/16/time-watch-later-clock-512.png", name: "Your videos"},
        {loc: "https://cdn-icons-png.flaticon.com/512/25/25297.png", name: "Liked videos"},
    ],
    menuOn: false,
    imgPerCol: 'repeat(4, 1fr)',

    subscribed: [],
    videos: [
        {id:1, name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg", uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:2,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:3,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:4,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:5,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:6,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:7,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:8,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:9,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
        {id:10,name: "Random name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},

    
    ]



}





export default {
  state,

}