const express = require("express");
const app = express();
const PORT = 5000;
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.parms);
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No Products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).send(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("resources not found");
});

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
