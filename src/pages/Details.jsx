import Loading from "../components/Loading";
import UsePostDetails from "../hooks/usePostDetails";

const Details = () => {
  const { record, loading, error } = UsePostDetails();

  return (
    <Loading loading={loading} error={error}>
      <div className=" mt-5 text-center">
        {record && (
          <>
            <h3>Title: {record.title}</h3>
            <p>Description :{record.description}</p>
          </>
        )}
      </div>
    </Loading>
  );
};

export default Details;
