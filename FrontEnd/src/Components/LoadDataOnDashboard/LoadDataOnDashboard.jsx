import { connect, useDispatch } from "react-redux";
import DeleteItem from "../../redux/thunk/DeleteItem";

const LoadDataOnDashboard = (data) => {
  const dispatch = useDispatch();
  const { isLoading } = data?.data;
  const { data: information } = data?.data?.data;
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Descriptor</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {information?.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{index}</th>
                  <td>{item?.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(DeleteItem(item._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.loadData,
  };
};

export default connect(mapStateToProps, null)(LoadDataOnDashboard);
