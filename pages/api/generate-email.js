import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { emailText } = req.body;
  
    if (!emailText) {
      return res.status(400).json({ error: 'No user input found' });
    }
  
    try {
        // Load prompt from /prompts/prompt.txt
        const filePath = path.join(process.cwd(), 'prompts', 'generateEmail.txt');
        const basePrompt = fs.readFileSync(filePath, 'utf8');

        // Insert the user's email text into the prompt
        const prompt = basePrompt.replace('{emailText}', emailText);

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-4.1-mini',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        }),
        });

        const data = await response.json();

        if (!data.choices || !data.choices[0]?.message?.content) {
        return res.status(500).json({ error: 'Failed to get a response from OpenAI' });
        }

        const generatedEmail = data.choices[0].message.content.trim();

        return res.status(200).json({ generatedEmail });
    } catch (error) {
        console.error('OpenAI API error:', error);
        return res.status(500).json({ error: 'Something went wrong while contacting OpenAI' });
    }
}
  