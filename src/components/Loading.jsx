import { cloneElement } from "react";

const Loading = ({ children, error, loading }) => {
  const elementType = children?.type?.render?.displayName;
  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = cloneElement(children, { disabled: true }, "Loading");
      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>
                <br />
                {error && <p>Error from server.....</p>}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? (
          <p>The Data is Loading please wait....</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };

  return renderHandler();
};

export default Loading;
