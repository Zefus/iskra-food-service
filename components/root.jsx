import ReactDOM from "react-dom";
import React from "react";

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      orderList: [],
    };
    //this.index = 1;
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    fetch(`/api/data`)
    .then(res => res.json())
    .then(body => {
      this.setState({ products: body });
    }).catch((error) => {
      console.log(error);
    });
  }

  add(product) {
    console.log(product);
    var orderList = this.state.orderList;
    orderList.push(product);
    console.log(orderList);
    this.setState({ orderList: orderList });
  }

  remove(order) {
    var index = this.state.orderList.indexOf(order);
    var orderList = this.state.orderList;
    orderList.splice(index, 1);
    console.log(orderList);
    this.setState({ orderList: orderList });
  }

  render() {
    return <div className="grid-container">
             <div className="grid-product-list">
              <ul className="list-group">
              {
                this.state.products.map(product => {
                  return <li className="list-group-item" key={product}>
                          <div className="grid-group-item">
                           <div className="title-label">
                            {product.title}
                           </div>
                           <div className="price-label">
                            {product.price}
                           </div>
                           <button type="button"
                                   className="btn btn-success"
                                   onClick={this.add.bind(null, product)}>Add</button>
                          </div>
                        </li>
                })
              }
              </ul>
             </div>
             <div className="grid-order-list">
              <ul className="list-group">
              {
                 this.state.orderList.map(order => {
                  return <li className="list-group-item" key={order}>
                    <div className="grid-group-item">
                     <div className="title-label">
                      {order.title}
                     </div>
                     <div className="price-label">
                      {order.price}
                     </div>
                     <button type="button"
                             className="btn btn-danger"
                             onClick={this.remove.bind(null, order)}>Remove</button>
                    </div>
                   </li>
                 })
               }
              </ul>
             </div>
             <div className="grid-group">
             </div>
           </div>
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<Root />, root);
}
