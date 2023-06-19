import os from 'node:os';

export default function Home() {

    
    //console.log('>>> cpus >>> ',os.cpus());
    console.log('>>> type >>> ',os.type());

  return (
    <main className="flex min-h-screen flex-col items-center ">
      
      <p>NODE_ENV: {process.env.NODE_ENV}</p> 
      <p>API_SERVER_URL: {process.env.API_SERVER_URL}</p>
      <p>SERVER_PORT: {process.env.SERVER_PORT}</p>
      <p>PLATFORM: {process.env.PLATFORM}</p>
      
    </main>
  )
}
