// Patch fetch to handle Tambo's 201 streaming responses
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  
  window.fetch = async function(...args: Parameters<typeof fetch>) {
    const response = await originalFetch(...args);
    
    // Extract URL
    let url = '';
    if (typeof args[0] === 'string') {
      url = args[0];
    } else if (args[0] instanceof Request) {
      url = args[0].url;
    }
    
    // Patch any Tambo API call that returns 201
    if (url.includes('tambo.co') && response.status === 201) {
      console.log('🔧 Patching Tambo response: 201 → 200 for', url);
      
      // Create new Response with 200 status
      return new Response(response.body, {
        status: 200,
        statusText: 'OK',
        headers: response.headers,
      });
    }
    
    return response;
  };
  
  console.log('✅ Tambo fetch patch installed');
}

export {};