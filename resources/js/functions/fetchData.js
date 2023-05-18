import { SERVER_URL, CSRF_TOKEN } from "../constants";

export default async function fetchData(url) {
  try {
    const response = await fetch(`${SERVER_URL}/api/${url}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': CSRF_TOKEN,
      }
    });
  
    return await response.json()  
  } catch (error) {
    console.log(error)
  }
  
}