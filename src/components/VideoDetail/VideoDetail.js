import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const VideoDetail = ({ video }) => {
  if (video) {
    return (
      <div>
        <div>
          <Card>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title = 'VideoPlayer'
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
              ></iframe>
            </div>

            <CardBody>
              <CardTitle>{video.snippet.title}</CardTitle>
              <CardSubtitle>{video.snippet.channelTitle}</CardSubtitle>
              <CardText>{video.snippet.description}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default VideoDetail;
