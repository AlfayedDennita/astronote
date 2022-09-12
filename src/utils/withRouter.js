import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function withRouter(Component) {
  function Wrapper(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
      <Component
        navigate={navigate}
        params={params}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        {...props} />
    );
  }

  return Wrapper;
}

export default withRouter;
