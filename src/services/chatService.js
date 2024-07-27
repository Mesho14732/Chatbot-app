const orderModel = require('../models/order');

const menuItems = [
    "Burger",
    "Pizza",
    "Pasta",
    "Salad"
];

exports.processUserInput = (input, userId, callback) => {
    let response;

    switch (input) {
        case '1':
            response = `Please select an item: ${menuItems.map((item, index) => `${index + 1}. ${item}`).join(', ')}`;
            break;
        case '99':
            if (orderModel.hasCurrentOrder(userId)) {
                response = "Order placed";
            } else {
                response = "No order to place";
            }
            break;
        case '98':
            response = `Order history: ${orderModel.getOrderHistory(userId).join(', ')}`;
            break;
        case '97':
            const currentOrder = orderModel.getCurrentOrder(userId);
            response = currentOrder ? `Current order: ${currentOrder}` : "No current order";
            break;
        case '0':
            orderModel.clearCurrentOrder(userId);
            response = "Order canceled";
            break;
        default:
            if (!isNaN(input) && input > 0 && input <= menuItems.length) {
                const selectedItem = menuItems[input - 1];
                orderModel.createOrder(userId, selectedItem);
                response = `You selected ${selectedItem}`;
            } else {
                response = "Invalid input. Please try again.";
            }
            break;
    }

    callback(response);
};