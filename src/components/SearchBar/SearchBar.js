import React from "react";
import { Button, Form, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  handleChange = event => {
    this.setState({ term: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log(event);
    //TODO: Make sure call the callback from parents
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Row xs="12">
              {/* <Col xs="2">Youtube-Clone</Col> */}
              <Col xs="10">
                <InputGroup>
                  <Input
                    placeholder="Search..."
                    value={this.state.term}
                    onChange={this.handleChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
