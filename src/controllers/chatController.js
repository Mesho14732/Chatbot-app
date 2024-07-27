const chatService = require('../services/chatService');
const responseHelper = require('../utils/responseHelper');

exports.handleUserInput = (req, res) => {
    const userInput = req.body.input;
    const userId = req.body.userId; // Assuming user session is based on userId

    chatService.processUserInput(userInput, userId, (response) => {
        res.json(responseHelper.createResponse(response));
    });
};