const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const teamId = 529; // Barcelona team ID
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${teamId}&next=5`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_FOOTBALL_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'API request failed' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
