export const pushRpc = async (data)=>{
  const url = process.env.RPC_URL
  if(url){
    const param = {
      chain: chain.chain,
      protocol: "HTTP",
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
      alert("添加成功");
    } else {
      alert(result.errMessage);
    }
  }
}