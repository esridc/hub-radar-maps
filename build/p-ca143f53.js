import{W as e,a as r}from"./p-3013819f.js";async function t(t,a,o){let n;try{n=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load ${a}`,{url:a,error:e})}return e(o),n}async function a(t,a,o,n,c){let l;try{l=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load tile ${a}/${o}/${n}`,{error:e,level:a,row:o,col:n})}return e(c),l}export{a as o,t};
//# sourceMappingURL=p-ca143f53.js.map