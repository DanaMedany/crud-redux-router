import { useEffect } from "react";
import { detailPost } from "../state/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UsePostDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { record, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(detailPost(id));
  }, [dispatch, id]);

  return { record, loading, error };
};

export default UsePostDetails;
