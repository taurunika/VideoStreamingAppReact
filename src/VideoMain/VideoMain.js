import React from 'react'
import classes from './VideoMain.module.css'
import Playlist from '../VideoCards/VideoCards'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import axios from 'axios'

class StreamVideo extends React.Component {

    state = {
        show: false,
        videoData: {},
        update: true,
        video: 0
    }

    showVideo = () => {
        this.setState({ show: true, update: true });
    }

    rerenderVideoPlayer = () => {
        const search = this.props.location.search;
        const videoid = search.split("=")[1];
        console.log(videoid)
        axios.get(`https://5ee4ea29ddcea00016a37041.mockapi.io/video/${videoid}`)
            .then(response => {
                this.setState({ videoData: response.data, video: videoid })
                console.log(response.data);
            })
            .catch(err => {
                console.log("Call Failed")
            })
    }

    componentDidMount() {
        axios.get("https://5ee4ea29ddcea00016a37041.mockapi.io/video/1")
            .then(response => {
                this.setState({ videoData: response.data })
            })
            .catch(err => {
                console.log("Call Failed")
            })
    }


    render() {
        return (
            <div>
                <h1 className={classes.Heading}>The Video Player</h1>
                <main className={classes.VideoContainer}>
                    <VideoPlayer showVideo={this.state.show} videoData={this.state.videoData == [] ? null : this.state.videoData} />
                    <Playlist showVideo={this.showVideo} rerenderVideoPlayer={this.rerenderVideoPlayer} video={this.state.video} />
                </main>
            </div>
        )
    }
}

export default StreamVideo;