const { shippingOptionsPerPostalCode } = require ('./shoppingOptionsMock');

const getShippingOptionsPerPostalCode = (postalCode) => {
    const shippingData = shippingOptionsPerPostalCode.find(element => element.postalCode == postalCode);
    if (shippingData) {
        const shippingOptions = shippingData.shippingOptions;
        return shippingOptions.sort((a,b) => {
            // Ordenar por costo (cost)
            if (a.cost !== b.cost) {
                return a.cost - b.cost;
            }
            // Si los costos son iguales, ordenar por días estimados (estimated_days)
            return a.estimated_days - b.estimated_days;
        });
    }
    else {
        return []
    }
}

module.exports = { getShippingOptionsPerPostalCode };