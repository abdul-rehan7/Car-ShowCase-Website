
export async function fetchFoods() {
  const headers = {
    'x-rapidapi-key': '86437c3c16msh0e7a619aeb08b65p1c2ba5jsna901151f5851',
     'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
  };
  const response = await fetch(`https://pizza-and-desserts.p.rapidapi.com/pizzas`, {
    headers: headers,
  });

  const result = await response.json();

  return result;
} 