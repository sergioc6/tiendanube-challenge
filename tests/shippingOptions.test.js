const { getShippingOptionsPerPostalCode } = require('../service/shippingService');

describe('Testing Shipping options service', () => {

    test('case 1', () => {
        const result = getShippingOptionsPerPostalCode(1);

        expect(result).toEqual([
            {
                "name": "Option 1",
                "type": "Delivery",
                "cost": 10,
                "estimated_days": 3
            },
            {
                "name": "Option 2",
                "type": "Custom",
                "cost": 10,
                "estimated_days": 3
            },
            {
                "name": "Option 3",
                "type": "Pickup",
                "cost": 10,
                "estimated_days": 3
            }
        ]);
    })

    test('case 2', () => {
        const result = getShippingOptionsPerPostalCode(2);

        expect(result).toEqual([
            {
                "name": "Option 2",
                "type": "Custom",
                "cost": 10,
                "estimated_days": 2
            },
            {
                "name": "Option 3",
                "type": "Pickup",
                "cost": 10,
                "estimated_days": 3
            },
            {
                "name": "Option 1",
                "type": "Delivery",
                "cost": 10,
                "estimated_days": 5
            }
        ]);
    })

    test('case 3', () => {
        const result = getShippingOptionsPerPostalCode(3);

        expect(result).toEqual([
            {
                "name": "Option 2",
                "type": "Custom",
                "cost": 5,
                "estimated_days": 3
            },
            {
                "name": "Option 1",
                "type": "Delivery",
                "cost": 6,
                "estimated_days": 3
            },
            {
                "name": "Option 3",
                "type": "Pickup",
                "cost": 10,
                "estimated_days": 3
            }
        ]);
    })

    test('case 4', () => {
        const result = getShippingOptionsPerPostalCode(4);
        expect(result).toEqual([
            {
                "name": "Option 2",
                "type": "Custom",
                "cost": 5,
                "estimated_days": 4
            },
            {
                "name": "Option 3",
                "type": "Pickup",
                "cost": 7,
                "estimated_days": 1
            },
            {
                "name": "Option 4",
                "type": "Delivery",
                "cost": 10,
                "estimated_days": 3
            },
            {
                "name": "Option 1",
                "type": "Delivery",
                "cost": 10,
                "estimated_days": 5
            }
        ]);
    })

    test('case 5', () => {
        const result = getShippingOptionsPerPostalCode(5);
        expect(result).toEqual([]);
    })
});