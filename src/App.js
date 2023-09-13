import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { AddUser, removeUser } from "./redux/allActions/index"

function App(props) {
  const [state, setState] = useState({
    data: [],
    userDetail: {
      id: null,
      addUserName: "",
      addUserFatherName: "",
    }
  })

  useEffect(() => {
    const { userData } = props;
    setState({ data: userData });
  }, []);

  const handleChange = (field, e) => {
    if (typeof e.target.value !== "undefined") {
      setState((prevState) => ({ ...prevState, userDetail: { ...prevState.userDetail, [field]: e.target.value } }))
    }
  }

  const handleAdd = () => {
    const { data, userDetail } = state;
    if (userDetail && userDetail.id === null) {
      data.push({ id: data.length + 1, name: userDetail && userDetail.addUserName, father_name: userDetail.addUserFatherName })
      setState((prevState) => ({ ...prevState, data, userDetail: { addUserName: "", addUserFatherName: "" } }))
      props.addUser(data);
    }
    if(userDetail && userDetail.id !== null){
      data.map((userItem) => {
        console.log("userItem::::",userDetail);
        if (userItem.id === userDetail.id) {
            userItem['id'] = userDetail.id;
            userItem['name'] = userDetail.addUserName;
            userItem['father_name'] = userDetail.addUserFatherName;
        }
        return userItem;
      })
      setState((prevState)=>({...prevState,data}));
      props.addUser(data);
    }
    setState((prevState) => ({ ...prevState, data, userDetail: { addUserName: "", addUserFatherName: "" } }))
    
  }

  const handleRemove = (id) => {
    const { data } = state;
    setState((prevState) => ({ ...prevState, data: data.filter(item => item.id !== id) }));
    props.removeUser(data);
  }

  const handleUpdate = (id) => {
    const { data } = state;
    let d = data.filter(item => item.id === id);
    setState((prevState) => ({
      ...prevState, userDetail: {
        id: d[0].id,
        addUserName: d[0].name, addUserFatherName: d[0].father_name
      }
    }));
  }

  const { data, userDetail } = state;
  return (
    <div>
      <h1><center>User Data</center></h1>
      <center>
        <div style={{ width: "60%", marginBottom: "5px" }}>
          <input style={{ marginRight: "10px" }} type="text" name="addUserName" value={userDetail && userDetail.addUserName} onChange={(e) => handleChange("addUserName", e)} />
          <input style={{ marginRight: "5px" }} type="text" name="addUserFatherName" value={userDetail && userDetail.addUserFatherName} onChange={(e) => handleChange("addUserFatherName", e)} />
          <button disabled={userDetail && userDetail.addUserName === "" || userDetail && userDetail.addUserFatherName === ""} onClick={handleAdd}>ADD USER</button>
        </div>
        <table border="1" style={{ width: "60%", padding: "5px" }}>
          <thead>
            <tr>
              <th style={{ padding: "5px" }}>Sr.No.</th>
              <th style={{ padding: "5px" }}>Name</th>
              <th style={{ padding: "5px" }}>Father Name</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((studentItem, key) => {
                return <>
                  <tr key={key}>
                    <td style={{ padding: "5px" }}>{key + 1}</td>
                    <td style={{ padding: "5px" }}>{studentItem.name}</td>
                    <td style={{ padding: "5px" }}>{studentItem.father_name}</td>
                    <td style={{ padding: "5px" }}>
                      <button style={{ cursor: "pointer", marginRight: "5px" }} onClick={() => handleUpdate(studentItem.id)}>Edit</button>
                      <button style={{ cursor: "pointer", marginRight: "5px" }} onClick={() => handleRemove(studentItem.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              })
            }
          </tbody>
        </table></center>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (data) => { dispatch(AddUser(data)) },
    removeUser: (data) => { dispatch(removeUser(data)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);