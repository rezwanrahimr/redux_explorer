import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import LoadDatas from "../../redux/thunk/LoadData";

const LoadData = (data) => {
  const dispatch = useDispatch();
  const { isLoading } = data?.data;
  const { data: information } = data?.data?.data;

  useEffect(() => {
    dispatch(LoadDatas());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      <section className="grid grid-cols-3 gap-4">
        {information?.map((item, index) => {
          return (
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item?.title}</h2>
                <p>{item?.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.loadData,
  };
};
export default connect(mapStateToProps, null)(LoadData);
