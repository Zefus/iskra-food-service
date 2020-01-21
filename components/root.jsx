import ReactDOM from "react-dom";
import React from "react";

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      orderList: [],
      totalPrice: 0
    };
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
    var orderList = this.state.orderList;
    orderList.push(product);
    var totalPrice = this.state.totalPrice + product.price;
    this.setState({ orderList: orderList, totalPrice: totalPrice });
  }

  remove(order) {
    var index = this.state.orderList.indexOf(order);
    var orderList = this.state.orderList;
    orderList.splice(index, 1);
    var totalPrice = this.state.totalPrice - order.price;
    this.setState({ orderList: orderList, totalPrice: totalPrice });
  }

  render() {
    return <div className="grid-container">
            <div className="bg-image"></div>
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
                                   className="btn btn-success btn-item"
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
                             className="btn btn-danger btn-item"
                             onClick={this.remove.bind(null, order)}>Remove</button>
                    </div>
                   </li>
                 })
               }
              </ul>
             </div>
             <div className="grid-group">
              <div className="group-label">
               <div className="total-price-label">
                {this.state.totalPrice}
               </div>
              </div>
              <button type="button"
                      className="btn btn-primary button-order">Order</button>
             </div>
           </div>
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<Root />, root);
}
