import { Button, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useGetImageQuery } from "../features/api/apiSlice";

const Home = () => {
  const { refetch, data, isFetching, isLoading, isSuccess, isError, error } =
    useGetImageQuery();

  const onClick = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="home-page">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="home-page">
        {toast.error(
          "error: Something went wrong please refresh your page",
          error
        )}
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="home-page">
        <Loading />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <Container className="home-page text-center d-flex flex-column align-items-center">
        <Image src={data?.url} fluid={true} className="img my-3" rounded />
        <Button className="w-25 my-2" onClick={onClick}>
          Next Image
        </Button>
      </Container>
    );
  }
};

export default Home;
