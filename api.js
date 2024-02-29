    const API_KEY = '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';

    async function submitQuestion(event) {
        event.preventDefault();
        const question = document.getElementById('question').value;
	   //const question = 'what is love'

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages:[
                        {
                            role: "user",
                            content: question,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*'
                    },
                }
            );
            const answer = response.data.choices[0].message.content.trim();
			console.log(response);
            document.getElementById('answer-text').textContent = answer;
            document.getElementById('answer').style.display = 'block';
        } catch (error) {
            console.error(error);
            alert('An error occurred while generating the answer.');
        }
    }