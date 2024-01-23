import { useEffect } from "react";
import PostList from "../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const { records, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <PostList records={records} isLoggedIn={isLoggedIn} />
    </Loading>
  );
};

export default Index;
