import React, { Component } from "react";
import "./index.css";
export class Customerlist extends Component {
  state = {
    applytitle: "Customers",
    customerCount: 5,
    customer: [
      {
        id: 1,
        name: "Jack",
        phone: "345-567",
        adress: { city: "London", country: "England" },
        image: "https://picsum.photos/id/1005/200/300",
      },
      {
        id: 2,
        name: "Joe",
        phone: "567-467",
        adress: { city: "Georgia", country: "USA" },
        image: "https://picsum.photos/id/1004/200/300",
      },
      {
        id: 3,
        name: "Jenny",
        phone: "648-758",
        adress: { city: "Berlin", country: "Germany" },
        image: "https://picsum.photos/id/1003/200/300",
      },
      {
        id: 4,
        name: "Rajat",
        phone: null,
        adress: { city: "Mumbai", country: "India" },
        image: "https://picsum.photos/id/1002/200/300",
      },
      {
        id: 5,
        name: "Saketh",
        phone: null,
        adress: { city: "Kolkata", country: "India" },
        image: "https://picsum.photos/id/1001/200/300",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h4 className="p-2 ">
          {this.state.applytitle}
          <span className="m-2  number">{this.state.customerCount}</span>
          <button className="btn btn-info m-1" onClick={this.RefreshonClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {/* {
                    this.state.customer.map((cust)=>{
                      return(<tr key={cust.id}>
                      <td>{cust.id}</td>
                      <td>{cust.name}</td>
                      <td>{cust.phone==null?"No number":cust.phone}</td>
                      <td>{cust.adress.city}</td>
                    </tr>);
                    })
                  } 
                   */}
            {this.GetRow()};
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  //when refresh is clicked
  RefreshonClick = () => {
    // we use arrow function else the this keyword will refer to the button and not to the main component class and will give an error
    //    console.log("Refreshed");
    this.setState({ customerCount: 7 });
  };
  //this function renders each row of the table made
  GetRow = () => {
    return this.state.customer.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.image} className="image"></img>
            <button
              className="btn btn-sm btn-secondary m-2"
              onClick={() => {
                this.ButtonOnClick(index);
              }}
            >
              Click here
            </button>
          </td>
          <td>{cust.name}</td>
          {/* <td>{cust.phone==null?"No number":cust.phone}</td> */}
          <td>{this.GetPhoneNumber(cust)}</td>
          <td>{cust.adress.city}</td>
          <td>{cust.adress.country}</td>
        </tr>
      );
    });
  };
  // this function conditionally renders the phone number
  GetPhoneNumber = (cust) => {
    if (cust.phone) return cust.phone;
    else return <div className="bg-danger">No phone Number</div>;
  };
  ButtonOnClick = (index) => {
    var custArr = this.state.customer;
    custArr[index].image = "//picsum.photos/id/1005/200/300";
    this.setState({ customer: custArr });
  };
}
