export async function handler(event, context) {
  const response = await fetch('https://api.football-data.org/v4/teams/81/matches', {
    headers: { 'X-Auth-Token': '05a3bddcc756af1413cbee4d9295cd57' }
  });
  if (!response.ok) {
    return { statusCode: 500, body: 'Failed to fetch fixtures' };
  }
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
