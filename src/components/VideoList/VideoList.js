import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";


const VideoItem = ({ video,onVideoSelect }) => {
  // console.log(video);
  return (
    <ListGroupItem tag="button" action onClick={()=>onVideoSelect(video)}>
      <Card>
        <Row className="no-gutters">
          <Col xs='4'>
            <CardImg
              src={video.snippet.thumbnails.high.url}
              className="img-fluid"
              alt="thumbnail"
            />
          </Col>
          <Col xs="8">
            <CardBody>
              <CardTitle className="d-flex justify-content-between align-items-center">
                <h9>{video.snippet.title}</h9>
              </CardTitle>
              {/* <CardText className="mb-1">
                {video.snippet.description}
              </CardText> */}
              <CardText><small>{video.snippet.channelTitle}</small></CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </ListGroupItem>
  );
};

const VideoList = ({ videos,onVideoSelect }) => {
  return (
    <div>
      <ListGroup>
        {videos.map(video => {
          return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>;
        })}
      </ListGroup>
    </div>
  );
};

export default VideoList;
