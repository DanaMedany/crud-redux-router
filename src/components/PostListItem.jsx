import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../state/postSlice";
import { Link, useNavigate } from "react-router-dom";

const PostListItem = ({ records, isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = (item) => {
    if (window.confirm(`Do you want to delete the record: ${item.title}`)) {
      dispatch(deletePost(item.id));
    }
  };

  const data =
    records &&
    records.map((record, index) => (
      <tr key={record.id}>
        <td>#{++index}</td>
        <td>
          <Link to={`post/${record.id}`}>{record.title}</Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => navigate(`post/${record.id}/edit`)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteHandler(record)}
              disabled={!isLoggedIn}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    ));

  return <>{data}</>;
};

export default PostListItem;
