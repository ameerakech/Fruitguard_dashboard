
const baseUrl = process.env.BASE_URL

export async function POST(request: Request){
  try{
    const body = await request.json();
    const {firstName, lastName, email, password} = body;
    if(!firstName || !lastName || !email || !password){
      return new Response(JSON.stringify({ message: 'Missing required fields'}),
        {status: 400, headers: { 'Content-Type': 'application/json'}}
      );
    }
    return new Response(JSON.stringify({message: 'User registered successfully'}),
      {status: 201, headers: {'Content-Type': 'application/json'}}
    );
  }catch{
    return new Response(JSON.stringify({message: 'Internal server error'}),
      {status: 500, headers:{'Content-Type': 'application/json'}}
    );
  }
}
