import{_ as r,aa as c,N as i,F as l,G as p,H as d,a9 as m,I as s,P as u}from"./index.53830d6c.js";import{D as f}from"./DatabaseView.4443bfa1.js";import"./QItem.fb332ced.js";const _={components:{DatabaseView:f},setup(){const e=c();function a(){e.acceptance.forEach(o=>{o.id=e.storage.length,e.storage.push(o)}),e.acceptance.length=0}return{store:e,visibleColumns:[],addToStorage:a}}};function g(e,a,o,t,b,v){const n=i("DatabaseView");return l(),p(m,{padding:""},{default:d(()=>[s(n,{title:"\u041F\u0440\u0438\u0435\u043C\u043A\u0430 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434",visibleColumns:t.visibleColumns,rows:t.store.acceptance},null,8,["visibleColumns","rows"]),s(u,{onClick:a[0]||(a[0]=C=>t.addToStorage()),color:"primary",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0441\u043A\u043B\u0430\u0434"})]),_:1})}var x=r(_,[["render",g]]);export{x as default};
