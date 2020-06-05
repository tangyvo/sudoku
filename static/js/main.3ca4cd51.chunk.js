(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),o=(n(14),n(8)),u=n(5),i=n(1),s=l.a.memo((function(e){var t=e.userInput,n=e.num,a=e.original,r=e.index,c=e.focus,o=e.handleFocus,u=e.noteModeOn,i=e.noteArr,s=e.highlightNum,m=e.helpMode,d=e.grid;return l.a.createElement(l.a.Fragment,null,"0"!==a?l.a.createElement("div",{id:r,className:s.includes(r)&&m?"original highlight":r===c?"na-focus original":"original"},a):"0"!==n&&""!==n||!(i[1].length>0||u)?81===d.filter((function(e){return"0"===e||""===e})).length?l.a.createElement("div",{className:"block",id:r}):l.a.createElement("input",{id:r,maxLength:"1",type:"number",inputMode:"numeric",className:s.includes(r)&&m&&r!==c?"block highlight":r===c?"block focus":"block",value:"0"===n?"":n,onChange:function(e){return t(e,r)},onClick:function(){return o(r)}}):l.a.createElement("div",{id:r,onClick:function(){return o(r)},className:c===r&&u?"note-mode notes":c===r?"notes na-focus":"notes"},i[1].map((function(e){return l.a.createElement("div",{key:Math.random(),className:"note note".concat(e," show")},e)}))))})),m=l.a.memo((function(e){var t=e.grid,n=e.originalGrid,a=e.userInput,r=e.focus,c=e.handleFocus,o=e.noteModeOn,u=e.noteArr,i=e.highlightNum,m=e.helpMode;return l.a.createElement("div",{className:"grid"},t.map((function(e,d){return l.a.createElement(s,{key:d,num:e,original:n[d],index:d,userInput:a,focus:r,handleFocus:c,noteModeOn:o,noteArr:u[d],highlightNum:i,helpMode:m,grid:t})})))})),d=n(2),f=function(e){var t=e.timer;return l.a.createElement("div",{className:"timer"},t)},b=l.a.memo((function(e){var t=e.showModal,n=e.handleSubmit,a=e.handleDifficulty,r=e.timer,c=e.isFullGrid,o=e.error,u=e.undo,i=e.isPlaying,s=e.gridHistory,m=e.noteModeOn,b=e.handleNoteMode,h=e.toggleHelpMode;return l.a.createElement("nav",{className:"menu"},l.a.createElement("h1",{className:"title"},"Sudoku"),l.a.createElement("div",null,l.a.createElement("p",{className:"subtitle"},"Timer:"),l.a.createElement(f,{timer:r})),l.a.createElement("div",null,l.a.createElement("p",{className:"subtitle"},"Difficulty:"),l.a.createElement("select",{className:"diffculty",onChange:a},l.a.createElement("option",{value:"easy"},"Easy"),l.a.createElement("option",{value:"medium"},"Medium"),l.a.createElement("option",{value:"hard"},"Hard"))),l.a.createElement("button",{className:"btn btn-start active",onClick:t},"New Game"),l.a.createElement("div",null,l.a.createElement("label",{className:"help-label"}," ","Help Mode:",l.a.createElement("input",{type:"checkbox",className:"help-checkbox",onChange:h}))),l.a.createElement("div",{className:"btn-small"},l.a.createElement("button",{className:i&&s.length>1?"btn btn-undo active":"btn btn-undo",onClick:u},"Undo"),l.a.createElement("button",{className:m&&i&&d.isBrowser?"btn btn-notes":i&&d.isBrowser?"btn active":"btn",onClick:b},m&&d.isBrowser?"Note: ON":"Note: OFF")),l.a.createElement("div",{className:"note-message"},l.a.createElement("strong",null,"IN NOTE MODE:")," ",d.isBrowser?"type numbers 1-9 to add and remove from cell.":"Note mode is not available on mobile."),l.a.createElement("button",{className:c?"btn btn-submit active":"btn btn-submit",disabled:!c,onClick:n},"Submit"),l.a.createElement("p",{className:o?"error show":"error"},"Oops! Try again"))})),h=function(e){var t=e.timer,n=e.startGame,a=e.showWonModal,r=e.hideModal;return l.a.createElement("div",{className:a?"show modal":"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("p",null,"You've Won!"),l.a.createElement("h4",null,"Your time was ",t," "),l.a.createElement("button",{className:"btn btn-newgame",onClick:n},"Play Again"),l.a.createElement("button",{className:"modal-close",onClick:r},"x")))},E=[[0,1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16,17],[18,19,20,21,22,23,24,25,26],[27,28,29,30,31,32,33,34,35],[36,37,38,39,40,41,42,43,44],[45,46,47,48,49,50,51,52,53],[54,55,56,57,58,59,60,61,62],[63,64,65,66,67,68,69,70,71],[72,73,74,75,76,77,78,79,80],[0,9,18,27,36,45,54,63,72],[1,10,19,28,37,46,55,64,73],[2,11,20,29,38,47,56,65,74],[3,12,21,30,39,48,57,66,75],[4,13,22,31,40,49,58,67,76],[5,14,23,32,41,50,59,68,77],[6,15,24,33,42,51,60,69,78],[7,16,25,34,43,52,61,70,79],[8,17,26,35,44,53,62,71,80],[0,1,2,9,10,11,18,19,20],[3,4,5,12,13,14,21,22,23],[6,7,8,15,16,17,24,25,26],[27,28,29,36,37,38,45,46,47],[30,31,32,39,40,41,48,49,50],[33,34,35,42,43,44,51,52,53],[54,55,56,63,64,65,72,73,74],[57,58,59,66,67,68,75,76,77],[60,61,62,69,70,71,78,79,80]],v=function(e){var t=e.startGame,n=e.showNewGameModal,a=e.hideModal;return l.a.createElement("div",{className:n?"modal show":"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("ol",null,l.a.createElement("h3",{className:"modal-title"},"HOW TO PLAY SUDOKU"),l.a.createElement("li",null,"Fill in the numbers 1-9 exactly once in every row, column and 3x3 block area."),l.a.createElement(d.BrowserView,null,l.a.createElement("h3",{className:"modal-title"},"KEYBOARD CONTROLS:"),l.a.createElement("li",null,"Use ",l.a.createElement("strong",null,"up"),", ",l.a.createElement("strong",null,"down"),","," ",l.a.createElement("strong",null,"left")," & ",l.a.createElement("strong",null,"right")," arrow keys to move between cells."),l.a.createElement("li",null,"Press the ",l.a.createElement("strong",null,"spacebar")," key to toggle note mode on and off."),l.a.createElement("li",null,"Press the ",l.a.createElement("strong",null,"R")," key erase all notes from a cell."))),l.a.createElement("button",{className:"btn btn-newgame",onClick:t},"Start"),l.a.createElement("button",{className:"modal-close",onClick:a},"x")))},g=l.a.memo((function(){var e=Object(a.useState)(Array(81).fill("0")),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),d=s[0],f=s[1],g=Object(a.useState)(Array(81).fill("")),O=Object(i.a)(g,2),p=O[0],N=O[1],y=Object(a.useState)("easy"),j=Object(i.a)(y,2),k=j[0],w=j[1],M=Object(a.useState)(!1),S=Object(i.a)(M,2),C=S[0],I=S[1],A=Object(a.useState)("00:00"),B=Object(i.a)(A,2),F=B[0],G=B[1],x=Object(a.useState)(!1),L=Object(i.a)(x,2),H=L[0],D=L[1],P=Object(a.useState)(!1),R=Object(i.a)(P,2),T=R[0],U=R[1],W=Object(a.useState)(null),Y=Object(i.a)(W,2),J=Y[0],K=Y[1],q=Object(a.useState)(!1),V=Object(i.a)(q,2),z=V[0],Q=V[1],X=Object(a.useState)(!1),Z=Object(i.a)(X,2),$=Z[0],_=Z[1],ee=Object(a.useState)(!1),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],le=Object(a.useState)([]),re=Object(i.a)(le,2),ce=re[0],oe=re[1],ue=Object(a.useState)(!1),ie=Object(i.a)(ue,2),se=ie[0],me=ie[1],de=Object(a.useState)(Array(81).fill([]).map((function(e,t){return[t,[]]}))),fe=Object(i.a)(de,2),be=fe[0],he=fe[1],Ee=Object(a.useRef)(),ve=Object(a.useRef)();Object(a.useEffect)((function(){Ee.current=J}));var ge=function(){ae(!1),_(!1),document.querySelector(".btn-start").blur(),I(!1),Q(!1),K(null),he(Array(81).fill([]).map((function(e,t){return[t,[]]}))),Oe(),D(!1)},Oe=function(){var e="https://sugoku.herokuapp.com/board?difficulty=".concat(k);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.board.join(",").split(",");N(t),r(t),f([t]),I(!0)}))};Object(a.useEffect)((function(){var e=p.filter((function(e){return"0"===e||""===e})).length;D(!(0!==e||!C))}),[p]);Object(a.useEffect)((function(){if($)clearInterval(ve.current);else if(C){var e=0;ve.current=setInterval((function(){pe(e+=1)}),1e3)}return function(){clearInterval(ve.current)}}),[C,$]);var pe=function(e){var t,n=0;e>=60?(n=e%60,t=0===(t=Math.floor(e/60))?"00":t<=9?"0".concat(t):t):(n=e,t="00"),n=0===n?"00":n<=9?"0".concat(n):n;var a="".concat(t,":").concat(n);G(a)},Ne=function(e){var t,n=[],a=Object(u.a)(E);try{for(a.s();!(t=a.n()).done;){var l=t.value;l.includes(J)&&n.push(l)}}catch(m){a.e(m)}finally{a.f()}for(var r=[],c=0,o=n;c<o.length;c++)for(var i=o[c],s=0;s<9;s++)p[i[s]]!==e||r.includes(i[s])||r.push(i[s]);oe(r)};Object(a.useEffect)((function(){se&&Ne(p[J])}),[se]),Object(a.useEffect)((function(){return window.addEventListener("keydown",ye),function(){window.removeEventListener("keydown",ye)}}));var ye=function(e){if(e.keyCode>=37&&e.keyCode<=40)we(e.keyCode);else if(C&&32===e.keyCode)Q(!z);else if(e.keyCode>=49&&e.keyCode<=57&&J>=0&&z)ke(e.keyCode);else{if(82!==e.keyCode)return;je()}},je=function(){var e=be;e[J][1]=[],he(e)},ke=function(e){var t=(e-48).toString(),n=be;n[J][1].includes(t)?n[J][1]=n[J][1].join("").replace(t,"").split(""):n[J][1].push(t),he(n)},we=function(e){var t=J;if(39===e?t+=1:40===e?t+=9:37===e?t-=1:38===e&&(t-=9),!(t>80||t<0)){K(t);var n=document.getElementById(t);n.classList.contains("block")||n.classList.contains("note")?n.focus():document.getElementById(Ee.current).blur()}};Object(a.useEffect)((function(){if(!z&&J){var e=J,t=document.getElementById(e);K(e),t.classList.contains("block")?t.focus():document.getElementById(Ee.current).blur()}}),[z]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app"},l.a.createElement(m,{grid:p,originalGrid:n,userInput:function(e,t){var n=Number(e.target.value),a=Object(o.a)(p);if(n>=1||n<=9){a[t]=e.target.value,N(a);var l=d;l.push(a),f(l)}return Ne(e.target.value),e.target.value},focus:J,handleFocus:function(e){return K(e)},noteModeOn:z,noteArr:be,highlightNum:ce,helpMode:se}),l.a.createElement(b,{showModal:function(){return ae(!0)},handleDifficulty:function(e){return w(e.target.value)},timer:F,isFullGrid:H,handleSubmit:function(){var e,t=!1,n=Object(u.a)(E);try{for(n.s();!(e=n.n()).done;){for(var a=e.value,l=[],r=0;r<9;r++)l.push(p[a[r]]);"123456789"!==(l=l.sort().join(""))&&(t=!0,U(!0))}}catch(c){n.e(c)}finally{n.f()}t||(U(!1),_(!0),I(!1))},error:T,undo:function(){var e=d.length-2;if(C&&e>=0){N(d[e]);var t=d.splice(0,d.length-1);f(t)}},isPlaying:C,handleNoteMode:function(){C&&Q(!z)},noteModeOn:z,gridHistory:d,toggleHelpMode:function(){return me(!se)}})),l.a.createElement(h,{showWonModal:$,startGame:ge,timer:F,hideModal:function(){return _(!1)}}),l.a.createElement(v,{startGame:ge,hideModal:function(){return ae(!1)},showNewGameModal:ne}))}));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3ca4cd51.chunk.js.map