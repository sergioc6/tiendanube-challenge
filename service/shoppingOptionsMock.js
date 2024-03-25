const shippingOptionsPerPostalCode = [
    {
        postalCode: 1,
        shippingOptions: [
            { "name": "Option 1", "type": "Delivery", "cost": 10, "estimated_days": 3 },
            { "name": "Option 2", "type": "Custom", "cost": 10, "estimated_days": 3 },
            { "name": "Option 3", "type": "Pickup", "cost": 10, "estimated_days": 3 }
        ]
    },
    {
        postalCode: 2,
        shippingOptions: [
            { "name": "Option 1", "type": "Delivery", "cost": 10, "estimated_days": 5 },
            { "name": "Option 2", "type": "Custom", "cost": 10, "estimated_days": 2 },
            { "name": "Option 3", "type": "Pickup", "cost": 10, "estimated_days": 3 }
        ]
    },
    {
        postalCode: 3,
        shippingOptions: [
            { "name": "Option 1", "type": "Delivery", "cost": 6, "estimated_days": 3 },
            { "name": "Option 2", "type": "Custom", "cost": 5, "estimated_days": 3 },
            { "name": "Option 3", "type": "Pickup", "cost": 10, "estimated_days": 3 }
        ]
    },
    {
        postalCode: 4,
        shippingOptions: [
            { "name": "Option 4", "type": "Delivery", "cost": 10, "estimated_days": 3 },
            { "name": "Option 1", "type": "Delivery", "cost": 10, "estimated_days": 5 },
            { "name": "Option 2", "type": "Custom", "cost": 5, "estimated_days": 4 },
            { "name": "Option 3", "type": "Pickup", "cost": 7, "estimated_days": 1 }
        ]
    },
    {
        postalCode: 5,
        shippingOptions: []
    }
]

module.exports = { shippingOptionsPerPostalCode };