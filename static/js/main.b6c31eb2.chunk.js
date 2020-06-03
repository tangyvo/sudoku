(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(6),c=n.n(o),r=(n(14),n(8)),u=n(4),i=n(1),s=l.a.memo((function(e){var t=e.userInput,n=e.num,a=e.original,o=e.index,c=e.isPlaying,r=e.focus,u=e.handleFocus,i=e.noteModeOn,s=e.noteArr,m=e.highlightNum,d=e.helpMode;return l.a.createElement(l.a.Fragment,null,"0"!==a?l.a.createElement("div",{id:o,className:m.includes(o)&&d?"original highlight":o===r?"na-focus original":"original"},a):"0"!==n&&""!==n||!(s[1].length>0||i)?c?l.a.createElement("input",{id:o,maxLength:"1",type:"textbox",className:m.includes(o)&&d&&o!==r?"block highlight":o===r?"block focus":"block",value:"0"===n?"":n,onChange:function(e){return t(e,o)},onClick:function(){return u(o)}}):l.a.createElement("div",{className:"block",id:o}):l.a.createElement("div",{id:o,onClick:function(){return u(o)},className:r===o&&i?"note-mode notes":r===o?"notes na-focus":"notes"},s[1].map((function(e){return l.a.createElement("div",{key:Math.random(),className:"note note".concat(e," show")},e)}))))})),m=l.a.memo((function(e){var t=e.grid,n=e.originalGrid,a=e.userInput,o=e.isPlaying,c=e.focus,r=e.handleFocus,u=e.noteModeOn,i=e.noteArr,m=e.highlightNum,d=e.helpMode;return l.a.createElement("div",{className:"grid"},t.map((function(e,t){return l.a.createElement(s,{key:t,num:e,original:n[t],index:t,userInput:a,isPlaying:o,focus:c,handleFocus:r,noteModeOn:u,noteArr:i[t],highlightNum:m,helpMode:d})})))})),d=n(7),f=function(e){var t=e.timer;return l.a.createElement("div",{className:"timer"},t)},b=l.a.memo((function(e){var t=e.showModal,n=e.handleSubmit,a=e.handleDifficulty,o=e.timer,c=e.isFullGrid,r=e.error,u=e.undo,i=e.isPlaying,s=e.gridHistory,m=e.noteModeOn,b=e.handleNoteMode,h=e.toggleHelpMode;return l.a.createElement("nav",{className:"menu"},l.a.createElement("h1",{className:"title"},"Sudoku"),l.a.createElement("p",{className:"subtitle"},"Timer:"),l.a.createElement(f,{timer:o}),l.a.createElement("p",{className:"subtitle"},"Difficulty:"),l.a.createElement("select",{className:"diffculty",onChange:a},l.a.createElement("option",{value:"easy"},"Easy"),l.a.createElement("option",{value:"medium"},"Medium"),l.a.createElement("option",{value:"hard"},"Hard")),l.a.createElement("button",{className:"btn btn-start active",onClick:t},"New Game"),l.a.createElement("label",{className:"help-label"}," Help Mode:",l.a.createElement("input",{type:"checkbox",className:"help-checkbox",onChange:h})),l.a.createElement("div",{className:"btn-small"},l.a.createElement("button",{className:i&&s.length>1?"btn btn-undo active":"btn btn-undo",onClick:u},"Undo"),l.a.createElement("button",{className:m&&i?"btn btn-notes":i?"btn active":"btn",onClick:b},m?"Note: ON":"Note: OFF")),l.a.createElement("p",{className:"note-message"},l.a.createElement("strong",null,"IN NOTE MODE:")," ",d.isBrowser?"type numbers 1-9 to add and remove from cell.":"Note mode is not available on mobile."),l.a.createElement("button",{className:c?"btn btn-submit active":"btn btn-submit",disabled:!c,onClick:n},"Submit"),l.a.createElement("p",{className:r?"error show":"error"},"Oops! Try again"))})),h=function(e){e.hasWon;var t=e.startGame,n=e.showWonModal,a=e.hideModal;return l.a.createElement("div",{className:n?"show modal":"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("p",null,"You've Won!"),l.a.createElement("button",{className:"btn btn-newgame",onClick:t},"Play Again"),l.a.createElement("button",{className:"modal-close",onClick:a},"x")))},g=[[0,1,2,3,4,5,6,7,8,9],[9,10,11,12,13,14,15,16,17],[18,19,20,21,22,23,24,25,26],[27,28,29,30,31,32,33,34,35],[36,37,38,39,40,41,42,43,44],[45,46,47,48,49,50,51,52,53],[54,55,56,57,58,59,60,61,62],[63,64,65,66,67,68,69,70,71],[72,73,74,75,76,77,78,79,80],[0,9,18,27,36,45,54,63,72],[1,10,19,28,37,46,55,64,73],[2,11,20,29,38,47,56,65,74],[3,12,21,30,39,48,57,66,75],[4,13,22,31,40,49,58,67,76],[5,14,23,32,41,50,59,68,77],[6,15,24,33,42,51,60,69,78],[7,16,25,34,43,52,61,70,79],[8,17,26,35,44,53,62,71,80],[0,1,2,9,10,11,18,19,20],[3,4,5,12,13,14,21,22,23],[6,7,8,15,16,17,24,25,26],[27,28,29,36,37,38,45,46,47],[30,31,32,39,40,41,48,49,50],[33,34,35,42,43,44,51,52,53],[54,55,56,63,64,65,72,73,74],[57,58,59,66,67,68,75,76,77],[60,61,62,69,70,71,78,79,80]],E=function(e){var t=e.startGame,n=e.showNewGameModal,a=e.hideModal;return l.a.createElement("div",{className:n?"modal show":"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h3",{className:"modal-title"},"HOW TO PLAY SUDOKU"),l.a.createElement("ul",null,l.a.createElement("li",null,"Fill in the numbers 1-9 exactly once in every row, column and 3x3 block area."),l.a.createElement("br",null),l.a.createElement("h3",{className:"modal-title"},"Keyboard Controls:"),l.a.createElement("li",null,"Press the ",l.a.createElement("strong",null,"spacebar")," key to toggle note mode on and off."),l.a.createElement("li",null,"Use ",l.a.createElement("strong",null,"up"),", ",l.a.createElement("strong",null,"down"),", ",l.a.createElement("strong",null,"left")," & ",l.a.createElement("strong",null,"right")," arrow keys to navigate to another cell.")),l.a.createElement("button",{className:"btn btn-newgame",onClick:t},"Start"),l.a.createElement("button",{className:"modal-close",onClick:a},"x")))},v=l.a.memo((function(){var e=Object(a.useState)(Array(81).fill("0")),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),d=s[0],f=s[1],v=Object(a.useState)(Array(81).fill("")),O=Object(i.a)(v,2),p=O[0],y=O[1],N=Object(a.useState)("easy"),j=Object(i.a)(N,2),k=j[0],M=j[1],w=Object(a.useState)(!1),S=Object(i.a)(w,2),C=S[0],x=S[1],I=Object(a.useState)("00:00"),F=Object(i.a)(I,2),G=F[0],A=F[1],P=Object(a.useState)(!1),H=Object(i.a)(P,2),L=H[0],B=H[1],D=Object(a.useState)(!1),W=Object(i.a)(D,2),T=W[0],U=W[1],J=Object(a.useState)(null),K=Object(i.a)(J,2),Y=K[0],q=K[1],R=Object(a.useState)(!1),z=Object(i.a)(R,2),Q=z[0],V=z[1],X=Object(a.useState)(!1),Z=Object(i.a)(X,2),$=Z[0],_=Z[1],ee=Object(a.useState)(!1),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],le=Object(a.useState)(!1),oe=Object(i.a)(le,2),ce=oe[0],re=oe[1],ue=Object(a.useState)([]),ie=Object(i.a)(ue,2),se=ie[0],me=ie[1],de=Object(a.useState)(!1),fe=Object(i.a)(de,2),be=fe[0],he=fe[1],ge=Object(a.useState)(Array(81).fill([]).map((function(e,t){return[t,[]]}))),Ee=Object(i.a)(ge,2),ve=Ee[0],Oe=Ee[1],pe=function(){re(!1),ae(!1),document.querySelector(".btn-start").blur(),x(!1),V(!1),_(!1),q(null),Oe(Array(81).fill([]).map((function(e,t){return[t,[]]}))),ye(),B(!1)},ye=function(){var e="https://sugoku.herokuapp.com/board?difficulty=".concat(k);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.board.join(",").split(",");y(t),o(t),f([t]),x(!0)}))};Object(a.useEffect)((function(){var e=p.filter((function(e){return"0"===e||""===e})).length;B(!(0!==e||!C))}),[p]);Object(a.useEffect)((function(){if(C){if(!Q){var e=0,t=setInterval((function(){Ne(e+=1)}),1e3);return function(){clearInterval(t)}}A(G)}}),[C,Q]);var Ne=function(e){var t,n=0;e>=60?(n=e%60,t=0===(t=Math.floor(e/60))?"00":t<=9?"0".concat(t):t):(n=e,t="00"),n=0===n?"00":n<=9?"0".concat(n):n;var a="".concat(t,":").concat(n);A(a)},je=function(e){var t,n=[],a=Object(u.a)(g);try{for(a.s();!(t=a.n()).done;){var l=t.value;l.includes(Y)&&n.push(l)}}catch(m){a.e(m)}finally{a.f()}for(var o=[],c=0,r=n;c<r.length;c++)for(var i=r[c],s=0;s<9;s++)p[i[s]]!==e||o.includes(i[s])||o.push(i[s]);me(o)};Object(a.useEffect)((function(){be&&je(p[Y])}),[be,p]);var ke=Object(a.useRef)();Object(a.useEffect)((function(){ke.current=Y})),Object(a.useEffect)((function(){return window.addEventListener("keydown",Me),function(){window.removeEventListener("keydown",Me)}}));var Me=function(e){if(e.keyCode>=37&&e.keyCode<=40)Se(e.keyCode);else if(C&&32===e.keyCode)_(!$);else{if(!(e.keyCode>=49&&e.keyCode<=57&&Y>=0&&$))return;we(e.keyCode)}},we=function(e){var t=(e-48).toString(),n=ve;n[Y][1].includes(t)?n[Y][1]=n[Y][1].join("").replace(t,"").split(""):n[Y][1].push(t),Oe(n)},Se=function(e){var t=Y;if(39===e?t+=1:40===e?t+=9:37===e?t-=1:38===e&&(t-=9),!(t>80||t<0)){q(t);var n=document.getElementById(t);n.classList.contains("block")||n.classList.contains("note")?n.focus():document.getElementById(ke.current).blur()}};Object(a.useEffect)((function(){if(!$&&Y){var e=Y,t=document.getElementById(e);q(e),t.classList.contains("block")?t.focus():document.getElementById(ke.current).blur()}}),[$]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app"},l.a.createElement(m,{grid:p,originalGrid:n,userInput:function(e,t){var n=Number(e.target.value),a=Object(r.a)(p);if(n>=1||n<=9){a[t]=e.target.value,y(a);var l=d;l.push(a),f(l)}return je(e.target.value),e.target.value},focus:Y,handleFocus:function(e){return q(e)},isPlaying:C,noteModeOn:$,noteArr:ve,highlightNum:se,helpMode:be}),l.a.createElement(b,{showModal:function(){return re(!0)},handleDifficulty:function(e){return M(e.target.value)},timer:G,isFullGrid:L,handleSubmit:function(){var e,t=!1,n=Object(u.a)(g);try{for(n.s();!(e=n.n()).done;){for(var a=e.value,l=[],o=0;o<9;o++)l.push(p[a[o]]);"123456789"!==(l=l.sort().join(""))&&(t=!0,U(!0))}}catch(c){n.e(c)}finally{n.f()}t||(U(!1),V(!0),ae(!0),A(G))},error:T,undo:function(){var e=d.length-2;if(!(e<0)){y(d[e]);var t=d.splice(0,d.length-1);f(t)}},isPlaying:C,handleNoteMode:function(){return _(!$)},noteModeOn:$,gridHistory:d,toggleHelpMode:function(){return he(!be)}})),l.a.createElement(h,{won:Q,showWonModal:ne,startGame:pe,hideModal:function(){return ae(!1)}}),l.a.createElement(E,{startGame:pe,hideModal:function(){return re(!1)},showNewGameModal:ce}))}));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b6c31eb2.chunk.js.map