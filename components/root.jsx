import ReactDOM from "react-dom";
import React from "react";

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
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
                           <button type="button" className="btn btn-success">Добавить</button>
                          </div>
                        </li>
                })
              }
              </ul>
             </div>
           </div>;
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<Root />, root);
}
