import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";

const PostList = ({ records, isLoggedIn }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem records={records} isLoggedIn={isLoggedIn} />
      </tbody>
    </Table>
  );
};

export default PostList;
