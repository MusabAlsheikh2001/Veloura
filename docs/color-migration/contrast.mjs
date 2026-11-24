const h = (x) => { x = x.replace('#',''); return [0,2,4].map(i => parseInt(x.substr(i,2),16)/255); };
const lin = (c) => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
const L = (hex) => { const [r,g,b] = h(hex).map(lin); return 0.2126*r + 0.7152*g + 0.0722*b; };
const cr = (a,b) => { const [x,y] = [L(a),L(b)].sort((p,q)=>q-p); return ((x+0.05)/(y+0.05)).toFixed(2); };
const pairs = [
 ['white text on #526CFF','#FFFFFF','#526CFF'],
 ['white on #3B51E0','#FFFFFF','#3B51E0'],
 ['white on #3A4FD6','#FFFFFF','#3A4FD6'],
 ['white on #2F45C9','#FFFFFF','#2F45C9'],
 ['#3B51E0 on #F6F8FC','#3B51E0','#F6F8FC'],
 ['#3A4FD6 on #FFFFFF','#3A4FD6','#FFFFFF'],
 ['#526CFF on #F6F8FC','#526CFF','#F6F8FC'],
 ['text #0B1020 on #F6F8FC','#0B1020','#F6F8FC'],
 ['mute #5B6579 on #F6F8FC','#5B6579','#F6F8FC'],
 ['mute #5B6579 on #FFFFFF','#5B6579','#FFFFFF'],
 ['cyan text #0A7F93 on #FFFFFF','#0A7F93','#FFFFFF'],
 ['cyan text #087C8F on #F6F8FC','#087C8F','#F6F8FC'],
 ['violet #6556D6 on white','#6556D6','#FFFFFF'],
 ['#F1F5FF on #0B1020','#F1F5FF','#0B1020'],
 ['#9CA9BD on #0B1020','#9CA9BD','#0B1020'],
 ['#9CA9BD on #151C2E','#9CA9BD','#151C2E'],
 ['#8193FF on #0B1020','#8193FF','#0B1020'],
 ['#8193FF on #151C2E','#8193FF','#151C2E'],
 ['#0B1020 on #526CFF','#0B1020','#526CFF'],
 ['#0B1020 on #32C9DA','#0B1020','#32C9DA'],
 ['#32C9DA on #0B1020','#32C9DA','#0B1020'],
 ['#0B1020 on #8193FF','#0B1020','#8193FF'],
];
for (const [n,a,b] of pairs) console.log(cr(a,b).padStart(6), n);
