import React, { Component } from 'react'

export default class Item extends Component {


    renderItem = () => {

        let itemArr = [];
        for (var i = 0; i < 4; i++) {
            itemArr.push(
                <div className="col-3 text-center p-0" key={i}

                >
                    <div className="card" style={{
                        width: '18rem', padding: "20px",
                        border: 'none'

                    }}>
                        <img src={"https://picsum.photos/seed/picsum/200/300"}
                            className="card-img-top" alt="something"
                            width={100}
                            height={150}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )
        }
        return itemArr;
    }

    render() {
        return (
            <div className='container' >
                <div className="row my-flex "
                    style={{
                        boxSizing: "border-box"
                    }}
                >
                    {this.renderItem()}
                </div>

            </div>
        )
    }
}
