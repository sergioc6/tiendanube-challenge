const express = require('express');
const shippingRoutes = require('./routes/shippingRoutes');

const app = express();
app.use(express.json());

app.get('/shipping-options/:postalCode', shippingRoutes.getShippingOptions);

app.listen(8080, () => {
    console.log("Server running on PORT: 8080");
})