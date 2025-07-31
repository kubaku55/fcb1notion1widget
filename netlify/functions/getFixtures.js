const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_KEY = '05a3bddcc756af1413cbee4d9295cd57';  // <-- REPLACE with your actual API key, keep this private!

  // FC Barcelona team ID in API-Football (usually 81)
  const teamId = 529;

  const url = `https://v3.football.api-sports.io/fixtures?team=${teamId}&next=5`;

  try {
    const response = await fetch(url, {
      headers: { 'x-apisports-key': API_KEY }
    });

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: 'Failed to fetch fixtures' }) };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
