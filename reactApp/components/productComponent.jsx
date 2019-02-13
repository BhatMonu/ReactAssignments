import React, { Component } from 'react'

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductId: 0,
            ProductName: "",
            Price: 0,
            CategoryName: "",
            ManufacturerName: "",
            ProductHead: ["ProductId", "ProductName", "Price", "CategoryName", "Manufacturer"],
            Products: [
                { ProductId: 101, ProductName: "Burger", Price: 100, CategoryName: "Food", ManufacturerName: "EF Beverages" },
                { ProductId: 102, ProductName: "Fan", Price: 1000, CategoryName: "Electronics", ManufacturerName: "AB Tech" },
                { ProductId: 103, ProductName: "Desktop", Price: 10000, CategoryName: "Electronics", ManufacturerName: "CD Power" },
                { ProductId: 105, ProductName: "Burger", Price: 100000, CategoryName: "Food", ManufacturerName: "EF Beverages" },
                { ProductId: 106, ProductName: "Burger", Price: 1000000, CategoryName: "Food", ManufacturerName: "EF Beverages" }
            ],
            Categories: ["Electrical", "Electronics", "Food"],
            Manufacturer: ["AB Tech", "CD Power", "EF Beverages"],
        };
    }
    //e is an event-payload raised on target element
    //we can read the payload data using 'e'
    onChangeProductId(e) {
        this.setState({ ProductId: e.target.value })
    }
    onChangeProductName(e) {
        this.setState({ ProductName: e.target.value })
    }
    onChangePrice(e) {
        this.setState({ Price: e.target.value })
    }
    onChangeCategoryName(e) {
        this.setState({ CategoryName: e.target.value })
    }
    onChangeManufacturer(e) {
        this.setState({ ManufacturerName: e.target.value })
    }
    onClickClear() {
        this.setState({
            Price: 0, ProductId: 0, ProductName: "",
            ManufacturerName: "", CategoryName: ""
        });
    }
    onClickSave() {
        // alert(`${this.state.ProductId} ${this.state.ProductName} ${this.state.Price}
        // ${this.state.ManufacturerName} ${this.state.CategoryName}`);
        //get the copy of product array using slice()
        let tempArray = this.state.Products.slice();

        //push the new record into the tempArray
        tempArray.push({
            ProductId: this.state.ProductId, ProductName: this.state.ProductName,
            Price: this.state.Price, CategoryName: this.state.CategoryName,
            ManufacturerName: this.state.ManufacturerName
        });

        //copy the tempArray into Products
        this.setState({ Products: tempArray })
    }
    getSelectedProduct(p) {
        this.setState({
            Price: p.Price, ProductId: p.ProductId, ProductName: p.ProductName,
            ManufacturerName: p.ManufacturerName, CategoryName: p.CategoryName
        });
    }
    render() {
        return (
            <div className='container'>
                <div className="form-group">
                    <label htmlFor="ProductId">ProductId</label>
                    <input type="text" className="form-control" value={this.state.ProductId}
                        onChange={this.onChangeProductId.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">ProductName</label>
                    <input type="text" className="form-control" value={this.state.ProductName}
                        onChange={this.onChangeProductName.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control" value={this.state.Price}
                        onChange={this.onChangePrice.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">CategoryName</label>
                    <select className="form-control" value={this.state.CategoryName}
                        onChange={this.onChangeCategoryName.bind(this)} >
                        {
                            this.state.Categories.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }</select>
                </div>
                <div className="form-group">
                    <label htmlFor="Manufacturer">Manufacturer</label>
                    <select className="form-control" value={this.state.ManufacturerName}
                        onChange={this.onChangeManufacturer.bind(this)} >
                        {
                            this.state.Manufacturer.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" value="New" className="btn btn-default" />
                                </td>
                                <td>
                                    <input type="button" value="Save" className="btn btn-success" onClick={this.onClickSave.bind(this)} />
                                </td>
                                <td>
                                    <input type="button" value="Clear" className="btn btn-default" onClick={this.onClickClear.bind(this)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            {Object.keys(this.state.Products[0]).map((p, i) => (
                                <th> {p} </th>

                            ))}


                            {/* <tr>
                                {this.state.ProductHead.map(function (name, index) {
                                    return <th key={index}>{name}</th>
                                })}
                            </tr> */}

                        </thead>

                        <tbody>
                            {this.state.Products.map((prd, idx) => (
                                <TableRow key={idx} row={prd} selected={this.getSelectedProduct.bind(this)} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}

//component that will render <option>
//the props.data is the data passed from the parent of this component

class Options extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <option value={this.props.data}>{this.props.data}</option>
        );
    }

}
class TableRow extends Component {
    constructor(props) {
        super(props)
    }
    onRowClick(d) {
        alert(`Row Clicked ${JSON.stringify(this.props.row)}`);
        //a new "selected" method is used to pass received data
        this.props.selected(this.props.row);
    }
    render() {
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                <td>{this.props.row.ProductId}</td>
                <td>{this.props.row.ProductName}</td>
                <td>{this.props.row.Price}</td>
                <td>{this.props.row.CategoryName}</td>
                <td>{this.props.row.ManufacturerName}</td>
            </tr>
        );
    }

}
class TableHead extends Component {
    render() {
        <tr>
            <th>
                <td>{this.props.row}</td>
            </th>
        </tr>

    }
}
export default ProductComponent;