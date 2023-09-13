const prompt = require('../services/openai')

class PromptController {
    async sendText(req, res) {
        try {
            const response = await prompt(req.body.chat)
            return res.status(200).json(response)
        } catch (e) { 
            console.log(e)
            return res.status(500).json({
                status: 500,
                message: "Text sent unsuccessfully",
            })
        }
    }
}

module.exports = new PromptController();