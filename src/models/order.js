const orders = {}; // In-memory order storage for simplicity

module.exports = {
    createOrder: (userId, order) => {
        if (!orders[userId]) {
            orders[userId] = [];
        }
        orders[userId].push(order);
    },
    getCurrentOrder: (userId) => {
        return orders[userId] ? orders[userId][orders[userId].length - 1] : null;
    },
    getOrderHistory: (userId) => {
        return orders[userId] || [];
    },
    clearCurrentOrder: (userId) => {
        if (orders[userId]) {
            orders[userId].pop();
        }
    },
    hasCurrentOrder: (userId) => {
        return orders[userId] && orders[userId].length > 0;
    }
};