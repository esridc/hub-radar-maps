import{aN as t,cB as n,bt as o,hF as r,jt as e}from"./p-3013819f.js";import{K as f}from"./p-ec95a4fb.js";import{e as s}from"./p-94b15954.js";import{j as c}from"./p-8b1f6523.js";const u=new Float64Array(2),a=new Float64Array(2),l="0123456789bcdefghjkmnpqrstuvwxyz",i=64;function h(r,e,u,a){const l=[r.xmin,r.ymin,r.xmax,r.ymax],h=t.fromExtent(n.fromBounds(l,a)),M=c(h,a,o.WGS84,{densificationStep:e*i});if(!M)return null;const m=f(new s,M,!1,!1),j=m.coords.filter(((t,n)=>!(n%2))),b=m.coords.filter(((t,n)=>n%2)),y=Math.min(...j),x=Math.min(...b),d=Math.max(...j),w=Math.max(...b),L=p(y,x,u,o.WGS84),F=p(d,w,u,o.WGS84);return L&&F?{bounds:l,geohashBounds:{xLL:L[0],yLL:L[1],xTR:F[0],yTR:F[1]},level:u}:null}function p(t,n,f,s){if(s.isWebMercator){const o=r(t/e.radius),s=o-360*Math.floor((o+180)/360),c=[0,0];return d(c,0,r(Math.PI/2-2*Math.atan(Math.exp(-n/e.radius))),s,f),c}const u=c({x:t,y:n},s,o.WGS84);if(!u)return null;const a=[0,0];return d(a,0,u.y,u.x,f),a}function M(t){return l[t]}function m(t){return(t[0]+t[1])/2}function j(t,n,o){return t[0]=n,t[1]=o,t}function b(t,n){const o=m(t),r=n,e=!n;t[0]=e*t[0]+r*o,t[1]=e*o+r*t[1]}function y(t,n){const o=n>m(t);return b(t,o),o}function x(t,n){let o=-90,r=90,e=-180,f=180;for(let s=0;s<n;s++){const n=Math.ceil((s+1)/2),c=Math.floor((s+1)/2),u=1-s%2,a=30-(3*n+2*c),l=30-(2*n+3*c),i=3*u+2*(1-u),h=2*u+3*(1-u),p=3*u+7*(1-u)<<l,M=(7*u+3*(1-u)<<a&t.geohashX)>>a,m=(p&t.geohashY)>>l;for(let t=i-1;t>=0;t--){const n=(e+f)/2,o=M&1<<t?1:0;e=(1-o)*e+o*n,f=(1-o)*n+o*f}for(let t=h-1;t>=0;t--){const n=(o+r)/2,e=m&1<<t?1:0;o=(1-e)*o+e*n,r=(1-e)*n+e*r}}return[e,o,f,r]}function d(t,n,o,r,e){e%2&&(e+=1);let f=0,s=0,c=-90,u=90,a=-180,l=180;for(let t=0;t<e/2;t++){for(let n=0;n<5;n++){const o=(a+l)/2,e=r>o?1:0;f|=e<<29-(n+5*t),a=(1-e)*a+e*o,l=(1-e)*o+e*l}for(let n=0;n<5;n++){const r=(c+u)/2,e=o>r?1:0;s|=e<<29-(n+5*t),c=(1-e)*c+e*r,u=(1-e)*r+e*u}}t[2*n]=f,t[2*n+1]=s}function w(t,n,o){let r="";const e=j(u,-90,90),f=j(a,-180,180);for(let s=0;s<o;s++){let o=0;!(s%2)?(o|=y(f,n)<<4,o|=y(e,t)<<3,o|=y(f,n)<<2,o|=y(e,t)<<1,o|=y(f,n)<<0):(o|=y(e,t)<<4,o|=y(f,n)<<3,o|=y(e,t)<<2,o|=y(f,n)<<1,o|=y(e,t)<<0),r+=M(o)}return r}export{p as A,x as R,h as S,w as z};
//# sourceMappingURL=p-23c050ff.js.map