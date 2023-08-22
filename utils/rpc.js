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