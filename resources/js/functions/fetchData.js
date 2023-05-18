import { SERVER_URL } from "../constants";

export default async function fetchData(url) {
  try {
    const response = await fetch(`${SERVER_URL}/api/${url}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    });
  
    return await response.json()  
  } catch (error) {
    console.log(error)
  }
}
