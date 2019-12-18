import React from "react";
import youtubeAPI from "../api";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount(){
    this.onTermSubmit('Calagry')
  }
  onTermSubmit = term => {
    youtubeAPI
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(res => {
        this.setState({ 
          videos: res.data.items,
          selectedVideo:res.data.items[0]
        });
      });
  };
  onVideoSelect = video => {
    console.log("From the APP", video);
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </Row>
        <Row>
          <Col xs="8">
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col xs="4">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
