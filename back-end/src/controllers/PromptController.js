const prompt = require('../services/openai')

class PromptController {
    async sendText(req, res) {
        try {
            const response = await prompt('teste 123123')
            
            return res.status(200).json({
                status: 200,
                message: "Text sent successfully",
                data: response.data.choices[0].text
            })
        } catch (e) { 
            throw new Error(e)
        }
    }
}

module.exports = new PromptController();