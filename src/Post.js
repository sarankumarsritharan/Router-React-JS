import React from "react";
import "./style.css"; 
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router-dom';


export default function Post(){
    const history = useHistory();
    console.log(history);
    const location = useLocation();
    console.log(location);
    const routeMatch = useRouteMatch();
    console.log(routeMatch);
    const params = useParams();
    console.log(params)

return(
<div>
    <h1>PostID</h1>
</div>       
    );
}   
    





{/* <Form onSubmit={this.handleSubmit}>
            {this.state.id && (
              <>
                <FormGroup row>
                  <Label for="userId" sm={2}>
                    Post ID
                  </Label>
                  <Col sm={10}>
                    <input
                      name="userId"
                      type="text"
                      value={this.state.id}
                      disabled
                    />
                  </Col>
                </FormGroup>
              </>
            )}

            <FormGroup row>
              <Label for="selectedUser" sm={2}>
                User Name
              </Label>
              <Col sm={10}>
                <select
                  name="selectedUser"
                  value={selectedUser}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {users.map((user) => {
                    return <option value={user.name}>{user.name}</option>;
                  })}
                </select>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="title" sm={2}>
                Title{" "}
              </Label>
              <Col sm={10}>
                <input
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="body" sm={2}>
                Body
              </Label>
              <Col sm={10}>
                <input
                  name="body"
                  type="text"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Button 
                color="secondary"
                type="submit">
                {this.state.id ? "Update" : "Add"} Post
              </Button>
            </FormGroup>
            <br />
          </Form>
          
          {this.state.comments.length > 0 ? <h2> List of Comments</h2> : null}
          {this.state.comments.map((comment) => {
            return (
              <ListGroup >
                <ListGroupItem style={{backgroundColor: '#DCDCDC'}}>{comment.body}</ListGroupItem>
              </ListGroup>
            );
          })} */}