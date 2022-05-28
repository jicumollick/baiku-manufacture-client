import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target[1].value;
    const ShortDescription = e?.target[2]?.value;
    const price = e.target[3].value;
    const availableQty = e.target[4].value;
    const minimumQty = e.target[5].value;

    const product = {
      name,
      img,
      ShortDescription,
      price,
      availableQty,
      minimumQty,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",

        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log(inserted);
        if (inserted.insertedId) {
          toast.success("Product Added Successfully");
        } else {
          toast.error("Failed to add Product");
        }
      });

    console.log(name, img, ShortDescription, price, availableQty, minimumQty);
  };
  return (
    <div>
      <h2>Add a Product</h2>

      <div className="col-sm col-md-8 offset-sm-1 offset-md-2 ">
        {/* Order form  */}

        <form onSubmit={(e) => handleAdd(e)} className="w-75 mx-auto">
          <div className="form-group row my-2">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                // value={product.name}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label htmlFor="img" className="col-sm-2 col-form-label">
              Image Link:
            </label>
            <div className="col-sm-10">
              <input
                name="img"
                type="text"
                className="form-control"
                id="img"
                // value={product.name}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label htmlFor="description" className="col-sm-2 col-form-label ">
              Short Description:
            </label>
            <div className="col-sm-10 ">
              <input
                name="description"
                type="text"
                className="form-control"
                id="description"
                // value={product.ShortDescription}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label htmlFor="price" className="col-sm-2 col-form-label ">
              Price:
            </label>
            <div className="col-sm-10 ">
              <input
                name="price"
                type="text"
                className="form-control"
                id="price"
                // value={product.price}
              />
            </div>
          </div>

          <div className="form-group row my-2">
            <label htmlFor="availableQty" className="col-sm-2 col-form-label ">
              Available Qty:
            </label>
            <div className="col-sm-10 ">
              <input
                name="availableQty"
                type="text"
                className="form-control"
                id="availableQty"
                // value={product.availableQty}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label htmlFor="minimumQty" className="col-sm-2 col-form-label ">
              Minimum Order Qty:
            </label>
            <div className="col-sm-10 ">
              <input
                name="minimumQty"
                type="number"
                className="form-control"
                id="minimumQty"
                // value={product.minimumQty}
              />
            </div>
          </div>

          <button type="submit" className="btn myButton mb-4">
            Add
          </button>
        </form>
      </div>
      <div className="col-sm"></div>
    </div>
  );
};

export default AddProduct;
