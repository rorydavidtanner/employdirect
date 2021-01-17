import React from "react";
import EmployeeData from "./EmployeeDetails";
import API from "../utils/API";
import moment from "moment";

class OmdbContainer extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    API.search()
      .then((response) => {
        let employeedata = response.data.results;
        let employeeRecordstemp = [];
        console.log(employeedata)
        for (let i = 0; i < employeedata.length; i++) {
          let efile = {
            name: employeedata[i].name.first + " " + employeedata[i].name.last,
            email: employeedata[i].email,
            image: <img alt="employee headshot" src={employeedata[i].picture.thumbnail} />,
            city: employeedata[i].location.city,
            dob: moment(employeedata[i].dob.date).format("DD-MM-YYYY"),
          };
          employeeRecordstemp.push(efile);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <h4>Search for Staff Details by Name</h4>
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default OmdbContainer;