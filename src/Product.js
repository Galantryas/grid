import React from 'react';
// import './Product.css';
import logo from './logo.svg';
// import './App.css';

class Product extends React.Component {
    render() {
        return (
                    <div className="col m4 s1">
                        <div className="card">
                            <div class="card">
                                <div class="card-image">
                                <img src={logo}/>
                                <br/><br/><br/>
                                <span class="card-title gray-text"><b>{this.props.judul}</b></span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                                </div>
                                <div class="card-content">
                                <p>{this.props.keterangan}.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">Hapus</a>
                                </div>
                            </div>
                        </div>
                    </div>
           
        );
    }
}

export default Product;