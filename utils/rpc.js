const url = process.env.RPC_URL;

export const pushRpc = async (data) => {
  return new Promise((resolve, reject) => {
    const protocol = data.url.startsWith("http") ? "HTTP" : "WSS";
    const param = {
      chain: data.chain,
      protocol: protocol,
      url: data.url,
    };
    const res = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    resolve(res);
  });
};