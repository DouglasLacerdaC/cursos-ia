import axios from 'axios';

export async function googleService(access_token: string) {
  const { data } = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo`,
    { headers: { Authorization: `Bearer ${access_token}` } },
  );

  return data;
}
