import{gY as t,c4 as s,j_ as i,a0 as h,jY as e,az as n,iq as r,id as o,at as a,ia as c}from"./p-3013819f.js";import{s as l}from"./p-a111f32d.js";import{v as f}from"./p-22d74e36.js";import"./p-1f7d3618.js";var p;!function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(p||(p={}));class d{constructor(t,e,o){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,s(t.length>=1),s(3===o.size||4===o.size);const{data:a,size:c,indices:l}=o;s(l.length%this._numIndexPerPrimitive==0),s(l.length>=t.length*this._numIndexPerPrimitive);const f=t.length;let p=c*l[this._numIndexPerPrimitive*t[0]];u.clear(),u.push(p);const d=n(a[p],a[p+1],a[p+2]),M=r(d);for(let s=0;s<f;++s){const i=this._numIndexPerPrimitive*t[s];for(let t=0;t<this._numIndexPerPrimitive;++t){p=c*l[i+t],u.push(p);let s=a[p];d[0]=Math.min(s,d[0]),M[0]=Math.max(s,M[0]),s=a[p+1],d[1]=Math.min(s,d[1]),M[1]=Math.max(s,M[1]),s=a[p+2],d[2]=Math.min(s,d[2]),M[2]=Math.max(s,M[2])}}this.bbMin=d,this.bbMax=M;const w=i(h(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(M[0]-d[0],M[1]-d[1]),M[2]-d[2]);let j=this.radius*this.radius;for(let t=0;t<u.length;++t){p=u.at(t);const s=a[p]-w[0],i=a[p+1]-w[1],h=a[p+2]-w[2],e=s*s+i*i+h*h;if(e<=j)continue;const n=Math.sqrt(e),r=.5*(n-this.radius);this.radius=this.radius+r,j=this.radius*this.radius;const o=r/n;w[0]+=s*o,w[1]+=i*o,w[2]+=h*o}this.center=w,u.clear()}getChildren(){if(this._children||e(this.bbMin,this.bbMax)<=1)return this._children;const t=i(h(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:o,size:a,indices:c}=this.position;for(let i=0;i<s;++i){let s=0;const h=this._numIndexPerPrimitive*this.primitiveIndices[i];let e=a*c[h],l=o[e],f=o[e+1],p=o[e+2];for(let t=1;t<this._numIndexPerPrimitive;++t){e=a*c[h+t];const s=o[e],i=o[e+1],n=o[e+2];s<l&&(l=s),i<f&&(f=i),n<p&&(p=n)}l<t[0]&&(s|=1),f<t[1]&&(s|=2),p<t[2]&&(s|=4),n[i]=s,++r[s]}let l=0;for(let t=0;t<8;++t)r[t]>0&&++l;if(l<2)return;const f=new Array(8);for(let t=0;t<8;++t)f[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const s=n[t];f[s][r[s]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==f[t]&&this._children.push(new d(f[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){u.prune()}}const u=new t({deallocator:null});function M(t){return t?{p0:r(t.p0),p1:r(t.p1),p2:r(t.p2)}:{p0:h(),p1:h(),p2:h()}}function w(t,s,i){return o(j,s,t),o(m,i,t),.5*a(c(j,j,m))}new l(f);new l((()=>M()));const j=h(),m=h();export{w as d,p as e,d as o};
//# sourceMappingURL=p-37592f90.js.map