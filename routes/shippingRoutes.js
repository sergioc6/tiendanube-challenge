const { getShippingOptionsPerPostalCode } = require('./../service/shippingService');

const getShippingOptions = (req, res) => {
    const { postalCode } = req.params;

    const shippingOptions = getShippingOptionsPerPostalCode(postalCode);
    res.json({ postalCode, shippingOptions })
}

module.exports = {
    getShippingOptions
};