(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TDBs:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",function(){return p});var c=e("ofXK"),o=e("PCNd"),i=e("tyNb"),r=e("fXoL");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["i-dbcard"]],decls:15,vars:0,consts:[[1,"clr-row"],[1,"clr-col-lg-5","clr-col-md-8","clr-col-12"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"btn","btn-sm","btn-link"]],template:function(t,n){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.zc(4,"Header"),r.Rb(),r.Sb(5,"div",4),r.Sb(6,"div",5),r.zc(7,"Block"),r.Rb(),r.Sb(8,"div",6),r.zc(9,"..."),r.Rb(),r.Rb(),r.Sb(10,"div",7),r.Sb(11,"button",8),r.zc(12,"Footer Action 1"),r.Rb(),r.Sb(13,"button",8),r.zc(14,"Footer Action 2"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb())},styles:[""]}),t})();class a{constructor(t="",n="",e="",c=0,o=0,i=0,r=""){this.title=t,this.iconShape=n,this.captionTemplate=e,this.threshold=c,this.count=o,this.csat=i,this.caption=r,this.caption=this.captionTemplate.replace("{0}",this.threshold.toString())}}var d=e("8MG2");const b=function(){return["pcs"]};let l=(()=>{class t{constructor(){this.issue=new a}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["i-dbwidget"]],inputs:{issue:"issue"},decls:27,vars:9,consts:[[1,"dbw"],[1,"card","clickable"],[1,"card-header"],[1,"dbw-header"],[1,"dbw-setting"],["shape","cog","size","md"],[1,"card-block"],[1,"card-text"],[1,"icon"],["title","Settings","size","lg","status","info",2,"margin","0 0.5rem"],[1,"card-title","clr-row"],[1,"clr-col-7","text-right","metric"],[1,"clr-col-5","text-bolder"],[1,"badge","badge-info"],[1,"clr-col-7","text-right","matching"],[1,"card-footer","dbw-footer"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,n){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.zc(4),r.Rb(),r.Sb(5,"div",4),r.Nb(6,"cds-icon",5),r.Rb(),r.Rb(),r.Sb(7,"div",6),r.Sb(8,"div",7),r.Sb(9,"div",8),r.Nb(10,"cds-icon",9),r.Rb(),r.Sb(11,"div"),r.zc(12),r.Rb(),r.Rb(),r.Sb(13,"div",10),r.Sb(14,"h1",11),r.zc(15),r.Rb(),r.Sb(16,"p",12),r.Sb(17,"span",13),r.zc(18),r.cc(19,"percent"),r.Rb(),r.zc(20,"CSAT "),r.Rb(),r.Rb(),r.Sb(21,"div",10),r.Sb(22,"h6",14),r.zc(23,"matching PCs"),r.Rb(),r.Rb(),r.Rb(),r.Sb(24,"div",15),r.Sb(25,"button",16),r.zc(26,"View List"),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Bb(4),r.Bc(" ",null==n.issue?null:n.issue.title," "),r.Bb(6),r.Cb("shape",null==n.issue?null:n.issue.iconShape),r.Bb(2),r.Ac(null==n.issue?null:n.issue.caption),r.Bb(3),r.Ac(n.issue.count),r.Bb(3),r.Bc("",r.dc(19,6,n.issue.csat)," "),r.Bb(7),r.hc("routerLink",r.kc(8,b)))},directives:[d.a,i.b],pipes:[c.u],styles:[".dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:unset}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#fafafa;display:flex;justify-content:space-between;align-items:center;flex-flow:row nowrap}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .dbw-header[_ngcontent-%COMP%]{font-weight:bolder}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .dbw-setting[_ngcontent-%COMP%], .dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .dbw-setting[_ngcontent-%COMP%]:hover{transition:.7s;-webkit-transition:.7s;-moz-transition:.7s;-ms-transition:.7s;-o-transition:.7s}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .dbw-setting[_ngcontent-%COMP%]:hover{cursor:pointer;transform:rotate(180deg)}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:3rem;height:3rem;border:2px solid #0072a3;border-radius:50%;display:flex;justify-content:center;align-items:center;margin-right:.5rem}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]{font-size:400%;font-stretch:ultra-condensed;font-weight:lighter;color:#0072a3}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .csat[_ngcontent-%COMP%]{margin-top:-2rem}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .matching[_ngcontent-%COMP%]{margin-top:-.4rem}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7rem;height:1rem}.dbw[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .dbw-footer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}"]}),t})();var g=e("i9bx");function u(t,n){if(1&t&&(r.Sb(0,"div",2),r.Nb(1,"i-dbwidget",3),r.Rb()),2&t){const t=n.$implicit;r.Bb(1),r.hc("issue",t)}}function h(t,n){if(1&t&&(r.Sb(0,"div",2),r.Nb(1,"i-dbwidget",3),r.Rb()),2&t){const t=n.$implicit;r.Bb(1),r.hc("issue",t)}}let C=(()=>{class t{constructor(){this.systemIssues=[new a("OS Failures","computer","PCs with >= {0} OS failures",12,24,.19),new a("App Failures","application","PCs with <= {0} app failures",12,24,.19),new a("PC Age","hourglass","PCs shipped {0} months ago",12,24,.19)],this.deviceIssues=[new a("CPU","cpu","PCs with {0} CPU usage",0,16,.12),new a("Ram Utilization","resistor","PCs with >= {0}% ram usage",25,24,.19),new a("Installed Memory","memory","PCs with <= {0}GB installed memory",20,16,.12),new a("Storage Remaining","hard-disk","PCs with <= {0}% storage space available",20,24,.19),new a("Battery Health","battery","PCs with <= {0}% battery life",20,24,.19),new a("Battery Runtime","bolt","PCs with <= {0}hr battery runtime",20,24,.19)]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["i-dash-board"]],decls:12,vars:2,consts:[[1,"clr-row"],["class","clr-col-lg-4 clr-col-md-6 clr-col-sm-12",4,"ngFor","ngForOf"],[1,"clr-col-lg-4","clr-col-md-6","clr-col-sm-12"],[3,"issue"]],template:function(t,n){1&t&&(r.Nb(0,"i-disclaimer"),r.Sb(1,"div"),r.Sb(2,"div"),r.Sb(3,"h1"),r.zc(4,"PC Stability and Age"),r.Rb(),r.Sb(5,"div",0),r.xc(6,u,2,1,"div",1),r.Rb(),r.Rb(),r.Sb(7,"div"),r.Sb(8,"h1"),r.zc(9,"PC Components"),r.Rb(),r.Sb(10,"div",0),r.xc(11,h,2,1,"div",1),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Bb(6),r.hc("ngForOf",n.systemIssues),r.Bb(5),r.hc("ngForOf",n.deviceIssues))},directives:[g.a,c.n,l],styles:[""]}),t})();const w=[{path:"",component:C}];let P=(()=>{class t{}return t.components=[C,s,l],t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(w)],i.e]}),t})(),p=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[c.c,P,o.a]]}),t})()}}]);