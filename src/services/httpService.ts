// src/services/httpService.ts
export const get = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const post = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  