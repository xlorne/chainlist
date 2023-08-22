## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Adding your RPC

If you wish to add your RPC, please follow this [PR template](https://github.com/DefiLlama/chainlist/blob/main/pull_request_template.md)

## Post Node to self Server

add `.env.local` file to root directory

```bash
RPC_URL=http://10.13.14.230:8090/api/node/save
```

post code in `utils/rpc.js` path  
```javascript
export const pushRpc = async (data)=>{
  console.log(data);
  const url = process.env.RPC_URL
  if(url){
    const protocol = data.url.startsWith("http") ? "HTTP" : "WSS";
    const param = {
      chain: data.chain,
      protocol: protocol,
      url: data.url,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    const result = await response.json();
    if (result && result.success) {
      alert("sucess add node");
    } else {
      alert(result.errMessage);
    }
  }
}
```

on page `http://localhost:3000/chain/{number}` click `Add RPC` button

