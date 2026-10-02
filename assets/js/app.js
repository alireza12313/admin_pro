const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fa=n=>Number(n).toLocaleString('fa-IR');
const G1='منوی اصلی',G2='فروش و بازاریابی',G3='ارتباطات',G4='مدیریت';
const P=[['dash','▦','داشبورد','',G1],['ana','📈','تحلیل و گزارش‌ها','',G1],['orders','🧾','سفارش‌ها','۲۴',G2],['prod','📦','محصولات','',G2],['cust','👥','مشتریان','',G2],['inv','💳','فاکتورها','',G2],['cpn','🏷️','کدهای تخفیف','',G2],['msg','💬','پیام‌ها','۳',G3],['rev','⭐','نظرات','',G3],['cal','📅','تقویم','',G3],['task','✅','وظایف','',G4],['team','🛡️','تیم و دسترسی‌ها','',G4],['set','⚙️','تنظیمات','',G4]];
const ST=['تکمیل‌شده','در انتظار','ارسال‌شده','لغوشده'],SC=['s1','s2','s4','s3'];
const tag=i=>`<span class="tag ${SC[i]}">${ST[i]}</span>`;
const names=['علی رضایی','سارا کریمی','حسین موسوی','نگار صادقی','امیر نوری','لیلا حیدری','پویا کاظمی','مینا یزدی','کیان فرهادی','الهام رحیمی','داریوش قاسمی','نازنین تهرانی'];
let seed=7;const rnd=()=>(seed=seed*16807%2147483647)/2147483647;
let orders=names.map((n,i)=>[fa(1047-i),n,'۱۴۰۵/۰۷/'+fa(10-Math.floor(i/2)).padStart(2,'۰'),Math.round(rnd()*50+3)*100000,Math.floor(rnd()*4)]);
$('#nav').innerHTML=P.map((p,i)=>(i&&P[i-1][4]==p[4]?'':`<div class="grp">${p[4]}</div>`)+`<a data-p="${p[0]}"><b>${p[1]}</b>${p[2]}${p[3]?`<em>${p[3]}</em>`:''}</a>`).join('');
const spark=(c,d)=>{const m=Math.max(...d);return`<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="${d.map((v,i)=>(i?'L':'M')+(100-i*100/(d.length-1))+' '+(36-v/m*32)).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/></svg>`};
const K=[['فروش امروز','۱۸٬۴۵۰٬۰۰۰','+۱۲٪',1,'var(--pri)',[3,5,4,7,6,9,8]],['سفارش‌ها','۳۲۴','+۸٪',1,'var(--sun)',[4,3,6,5,7,6,9]],['مشتریان جدید','۸۷','+۲۳٪',1,'var(--mint)',[2,4,3,6,5,8,9]],['مرجوعی','۶','−۳٪',0,'var(--cor)',[8,7,8,5,6,4,3]]];
$('#kpis').innerHTML=K.map(k=>`<div class="card kpi"><span>${k[0]}</span><strong>${k[1]}</strong><small class="${k[3]?'up':'dn'}">${k[2]} نسبت به دوره قبل</small>${spark(k[4],k[5])}</div>`).join('');
const rec=()=>$('#rec').innerHTML=orders.slice(0,5).map(o=>`<tr tabindex="0" data-o="${o[0]}"><td>#${o[0]}</td><td>${o[1]}</td><td>${fa(o[3])}</td><td>${tag(o[4])}</td></tr>`).join('');
$('#tl').innerHTML=[['🛒','سفارش #۱۰۴۸ ثبت شد','۲ دقیقه پیش'],['💳','پرداخت ۴٫۲ میلیون تأیید شد','۴۰ دقیقه پیش'],['👤','۵ مشتری جدید عضو شدند','۲ ساعت پیش'],['📦','محصول «قهوه‌ساز» کم‌موجود شد','دیروز']].map(a=>`<div><i>${a[0]}</i><p>${a[1]}<small>${a[2]}</small></p></div>`).join('');
const D={w:[['ش',42,18],['ی',58,26],['د',51,20],['س',74,34],['چ',66,30],['پ',88,41],['ج',79,37]],m:[['هفته ۱',210,90],['هفته ۲',265,120],['هفته ۳',240,105],['هفته ۴',320,150]],y:[['فر',120,50],['ار',150,64],['خر',140,58],['تی',190,88],['مر',210,95],['شه',180,76],['مه',240,112],['آب',260,126],['آذ',230,104],['دی',280,140],['به',300,150],['اس',340,170]]};
function chart(k){const d=D[k],W=700,H=270,p=36,mx=Math.max(...d.map(x=>x[1]))*1.15,X=i=>W-p-i*(W-2*p)/(d.length-1),Y=v=>H-p-v/mx*(H-2*p);
 const path=j=>d.map((x,i)=>(i?'L':'M')+X(i)+' '+Y(x[j])).join(' '),area=j=>path(j)+`L${X(d.length-1)} ${H-p}L${X(0)} ${H-p}Z`;
 let g='';for(let i=0;i<=4;i++){const y=14+i*(H-p-14)/4;g+=`<line x1="${p}" x2="${W-p}" y1="${y}" y2="${y}" stroke="var(--ln)" stroke-dasharray="4 5"/>`}
 $('#ch').innerHTML=`<defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c6cff" stop-opacity=".45"/><stop offset="1" stop-color="#7c6cff" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2ee6a6" stop-opacity=".3"/><stop offset="1" stop-color="#2ee6a6" stop-opacity="0"/></linearGradient></defs>${g}
 <path d="${area(1)}" fill="url(#a)"/><path d="${area(2)}" fill="url(#b)"/>
 <path d="${path(1)}" fill="none" stroke="var(--pri)" stroke-width="3.5" stroke-linejoin="round"/><path d="${path(2)}" fill="none" stroke="var(--mint)" stroke-width="3.5" stroke-linejoin="round"/>
 ${d.map((x,i)=>`<text x="${X(i)}" y="${H-10}" text-anchor="middle">${x[0]}</text>`).join('')}<line id="vl" y1="14" y2="${H-p}" stroke="var(--mut)" opacity="0"/>`;
 const s=$('#ch');s.onmousemove=e=>{const r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W;let i=Math.round((W-p-x)*(d.length-1)/(W-2*p));i=Math.max(0,Math.min(d.length-1,i));
  const v=$('#vl');v.setAttribute('x1',X(i));v.setAttribute('x2',X(i));v.setAttribute('opacity',.5);const t=$('#tip');t.style.opacity=1;t.style.top='10px';t.style.left=Math.max(0,X(i)/W*r.width-130)+'px';t.innerHTML=`<b>${d[i][0]}</b> — درآمد: ${fa(d[i][1])} م | سود: ${fa(d[i][2])} م`};
 s.onmouseleave=()=>{$('#tip').style.opacity=0;$('#vl').setAttribute('opacity',0)}}
chart('w');
$('#rg').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#rg button').forEach(x=>x.classList.toggle('on',x===b));chart(b.dataset.r)};
let S={q:'',f:'',k:0,d:1,p:1};const N=6;
function ro(){let l=orders.filter(o=>(!S.q||o[1].includes(S.q)||o[0].includes(S.q))&&(!S.f||ST[o[4]]===S.f));
 l.sort((a,b)=>(a[S.k]>b[S.k]?1:a[S.k]<b[S.k]?-1:0)*S.d);const pc=Math.max(1,Math.ceil(l.length/N));S.p=Math.min(S.p,pc);
 $('#ot').innerHTML=l.slice((S.p-1)*N,S.p*N).map(o=>`<tr tabindex="0" data-o="${o[0]}"><td>#${o[0]}</td><td><b>${o[1]}</b></td><td>${o[2]}</td><td>${fa(o[3])}</td><td>${tag(o[4])}</td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;color:var(--mut)">سفارشی پیدا نشد. فیلتر یا عبارت جستجو را تغییر دهید.</td></tr>';
 $('#pi').textContent=`${fa(l.length)} سفارش`;$('#pg').innerHTML=Array.from({length:pc},(_,i)=>`<button class="${i+1==S.p?'on':''}" data-pg="${i+1}">${fa(i+1)}</button>`).join('');rec();inv()}
$('#q').oninput=e=>{S.q=e.target.value.trim();S.p=1;ro()};$('#f').onchange=e=>{S.f=e.target.value;S.p=1;ro()};
$('#pg').onclick=e=>{if(e.target.dataset.pg){S.p=+e.target.dataset.pg;ro()}};
$$('th[data-k]').forEach(t=>t.onclick=()=>{const k=+t.dataset.k;S.d=S.k==k?-S.d:1;S.k=k;ro()});
$('#csv').onclick=()=>{const c='\uFEFFکد,مشتری,تاریخ,مبلغ,وضعیت\n'+orders.map(o=>[o[0],o[1],o[2],o[3],ST[o[4]]].join(',')).join('\n'),a=document.createElement('a');a.href=URL.createObjectURL(new Blob([c],{type:'text/csv'}));a.download='orders.csv';a.click();toast('فایل CSV دانلود شد')};
$('#exp0').onclick=()=>$('#csv').click();
function drawer(id){const o=orders.find(x=>x[0]==id);if(!o)return;$('#dr').innerHTML=`<div class="hd"><h3>سفارش #${o[0]}</h3><button class="btn o" data-x>بستن</button></div>${tag(o[4])}<dl><dt>مشتری</dt><dd>${o[1]}</dd><dt>تاریخ</dt><dd>${o[2]}</dd><dt>مبلغ</dt><dd>${fa(o[3])} تومان</dd><dt>پرداخت</dt><dd>درگاه آنلاین</dd></dl><p style="color:var(--mut);margin-bottom:8px">تغییر وضعیت سفارش:</p><div class="tools">${ST.map((s,i)=>`<button class="btn ${i==o[4]?'':'o'}" data-st="${o[0]}:${i}">${s}</button>`).join('')}</div>`;show('dr')}
document.addEventListener('click',e=>{const t=e.target,r=t.closest('[data-o]'),st=t.dataset.st;
 if(st){const[a,b]=st.split(':');orders.find(x=>x[0]==a)[4]=+b;ro();drawer(a);toast('وضعیت سفارش به‌روزرسانی شد')}
 else if(r)drawer(r.dataset.o);
 if(t.closest('[data-x]')||t.id=='ov')closeAll();
 const gt=t.closest('[data-go]');if(gt)go(gt.dataset.go);
 const tt=t.closest('[data-t]');if(tt)toast(tt.dataset.t);
 if(!t.closest('#bell'))$('#dd').classList.remove('on')});
function show(id){$('#ov').classList.add('on');$('#'+id).classList.add('on')}
function closeAll(){$$('.on.mod,.on.dr,#ov.on').forEach(x=>x.classList.remove('on'))}
$('#add').onclick=()=>{show('nm');$('#nn').focus()};
$('#ns').onclick=()=>{const n=$('#nn').value.trim(),a=+$('#na').value;if(!n||!a){toast('نام مشتری و مبلغ را وارد کنید');return}
 orders.unshift([fa(1048+orders.length-12),n,'۱۴۰۵/۰۷/۱۰',a,1]);$('#nn').value=$('#na').value='';closeAll();ro();toast('سفارش جدید ثبت شد')};
const initials=n=>n[0];const cols=['var(--pri)','var(--mint)','var(--sun)','var(--cor)'];
$('#cg').innerHTML=names.slice(0,8).map((n,i)=>{const c=orders[i];return`<div class="card cc"><div class="av" style="background:${cols[i%4]}">${initials(n)}</div><b>${n}</b><p>${['تهران','اصفهان','مشهد','شیراز','تبریز','رشت','یزد','کرج'][i]}</p><dl><div><dt>${fa(3+i*2)}</dt><dd>سفارش</dd></div><div><dt>${fa(Math.round(c[3]/100000*2)/10)} م</dt><dd>خرید</dd></div></dl></div>`}).join('');
$('#pd').innerHTML=[['هدفون بی‌سیم','🎧',2450000,34],['ساعت هوشمند','⌚',5120000,12],['کیف چرمی','👜',1760000,28],['قهوه‌ساز','☕',4200000,7],['کفش ورزشی','👟',2100000,56],['لامپ هوشمند','💡',320000,120]].map((p,i)=>`<div class="card"><div class="pimg" style="background:color-mix(in srgb,${cols[i%4]} 20%,transparent)">${p[1]}</div><b>${p[0]}</b><p style="color:var(--mut)">${fa(p[2])} تومان</p><div class="pb"><p><small>موجودی</small><small>${fa(p[3])}</small></p><div><i style="width:${Math.min(100,p[3])}%;${p[3]<15?'background:var(--cor)':''}"></i></div></div></div>`).join('');
let T=[[0,'طراحی بنر پاییزه'],[0,'پاسخ به پیام مشتریان'],[1,'بررسی موجودی انبار'],[1,'هماهنگی ارسال پست'],[2,'به‌روزرسانی قیمت‌ها']];
const KN=['برای انجام','در حال انجام','انجام‌شده'];
function tk(){$('#kn').innerHTML=KN.map((n,c)=>`<div class="card"><h4>${n} (${fa(T.filter(t=>t[0]==c).length)})</h4>${T.map((t,i)=>t[0]==c?`<div class="tk"><span>${t[1]}</span>${c<2?`<button data-mv="${i}" aria-label="انتقال">←</button>`:''}</div>`:'').join('')}</div>`).join('')}
$('#kn').onclick=e=>{const i=e.target.dataset.mv;if(i!=null){T[i][0]++;tk();toast('وظیفه منتقل شد')}};tk();
const AC=['#7c6cff','#2ee6a6','#ff6b81','#ffc24b','#38bdf8'];
$('#sws').innerHTML=AC.map((c,i)=>`<button style="background:${c}" class="${i?'':'on'}" data-c="${c}" aria-label="رنگ ${i+1}"></button>`).join('');
$('#sws').onclick=e=>{const c=e.target.dataset.c;if(!c)return;document.documentElement.style.setProperty('--pri',c);$$('#sws button').forEach(b=>b.classList.toggle('on',b==e.target));chart($('#rg .on').dataset.r)};
function go(p){$$('.page').forEach(s=>s.classList.toggle('on',s.id==p));$$('.nav a').forEach(a=>a.classList.toggle('on',a.dataset.p==p));$('#title').textContent=P.find(x=>x[0]==p)[2];$('#side').classList.remove('open');closeAll();scrollTo(0,0)}
$('#nav').onclick=e=>{const a=e.target.closest('a');if(a)go(a.dataset.p)};
function th(d){document.documentElement.dataset.theme=d?'dark':'light';$('#dk').checked=d}
$('#th').onclick=()=>th(document.documentElement.dataset.theme!='dark');$('#dk').onchange=e=>th(e.target.checked);
$('#menu').onclick=()=>$('#side').classList.toggle('open');
$('#bell').onclick=e=>{if(!e.target.closest('.dd'))$('#dd').classList.toggle('on')};
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e.t);e.t=setTimeout(()=>e.classList.remove('on'),2200)}
const CM=[...P.map(p=>[p[1],'رفتن به '+p[2],()=>go(p[0])]),['➕','ثبت سفارش جدید',()=>{closeAll();show('nm')}],['🌗','تغییر پوسته',()=>$('#th').click()],['⬇️','دریافت خروجی CSV',()=>$('#csv').click()]];
let cf=0;function cl(){const q=$('#ci').value.trim(),l=CM.filter(c=>c[1].includes(q));cf=Math.min(cf,Math.max(0,l.length-1));$('#cl').innerHTML=l.map((c,i)=>`<a class="${i==cf?'f':''}" data-i="${CM.indexOf(c)}"><b>${c[0]}</b>${c[1]}</a>`).join('')||'<p style="padding:10px;color:var(--mut)">دستوری پیدا نشد.</p>';return l}
function opn(){closeAll();show('cm');$('#ci').value='';cf=0;cl();$('#ci').focus()}
$('#ks').onclick=opn;$('#ci').oninput=cl;
$('#cl').onclick=e=>{const a=e.target.closest('a');if(a){closeAll();CM[a.dataset.i][2]()}};
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=='k'){e.preventDefault();opn()}
 if(e.key=='Escape')closeAll();
 if($('#cm').classList.contains('on')){const l=cl();if(e.key=='ArrowDown'){cf=(cf+1)%l.length;cl()}if(e.key=='ArrowUp'){cf=(cf-1+l.length)%l.length;cl()}if(e.key=='Enter'&&l[cf]){closeAll();l[cf][2]()}}});
/* تحلیل */
$('#ana').innerHTML=`<div class="grid kpis">${[['بازدیدکنندگان','۴۸٬۲۱۰','+۱۸٪'],['نرخ تبدیل','۳٫۴٪','+۰٫۶٪'],['میانگین سبد خرید','۲٬۱۸۰٬۰۰۰','+۴٪'],['نرخ خروج','۳۸٪','−۲٪']].map(k=>`<div class="card kpi"><span>${k[0]}</span><strong>${k[1]}</strong><small class="up">${k[2]} نسبت به ماه قبل</small></div>`).join('')}</div>
<div class="grid row2"><div class="card"><div class="hd"><h3>بازدید ماهانه</h3><button class="btn o" id="exp1">دریافت گزارش</button></div><svg id="bc" viewBox="0 0 700 240" width="100%" role="img" aria-label="نمودار بازدید"></svg></div>
<div class="card"><div class="hd"><h3>منابع ترافیک</h3></div>${[['جستجوی گوگل',46],['اینستاگرام',24],['ورود مستقیم',18],['تلگرام',12]].map(s=>`<div class="pb"><p><span>${s[0]}</span><b>${fa(s[1])}٪</b></p><div><i style="width:${s[1]}%"></i></div></div>`).join('')}</div></div>
<div class="card" style="margin-top:16px"><div class="hd"><h3>پربازدیدترین صفحه‌ها</h3></div><div class="tw"><table><thead><tr><th>صفحه</th><th>بازدید</th><th>نرخ تبدیل</th></tr></thead><tbody>${[['صفحه اصلی','۱۸٬۴۰۰','۲٫۱٪'],['هدفون بی‌سیم','۹٬۲۰۰','۵٫۸٪'],['ساعت هوشمند','۷٬۱۰۰','۴٫۲٪'],['سبد خرید','۵٬۳۰۰','۳۱٪']].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div></div>`;
{const v=[22,30,27,38,35,44,41,52,48,60,57,70],m=Math.max(...v),w=700/12;$('#bc').innerHTML=v.map((x,i)=>`<rect x="${700-(i+1)*w+8}" y="${210-x/m*190}" width="${w-16}" height="${x/m*190}" rx="8" fill="${i==11?'var(--mint)':'var(--pri)'}" opacity="${.45+i*.05}"><title>${fa(x)} هزار بازدید</title></rect>`).join('')}
$('#exp1').onclick=()=>toast('گزارش تحلیلی آماده دانلود شد');
/* فاکتورها */
function inv(){$('#inv').innerHTML=`<div class="card"><div class="hd"><h3>فاکتورها</h3><button class="btn" onclick="print()">چاپ فهرست</button></div><div class="tw"><table><thead><tr><th>شماره فاکتور</th><th>مشتری</th><th>مبلغ (تومان)</th><th>سررسید</th><th>وضعیت</th></tr></thead><tbody>${orders.slice(0,10).map((o,i)=>`<tr><td>INV-${fa(2000+i)}</td><td>${o[1]}</td><td>${fa(o[3])}</td><td>۱۴۰۵/۰۸/${fa(i+5).padStart(2,'۰')}</td><td>${o[4]==3?'<span class="tag s3">باطل</span>':o[4]==1?'<span class="tag s2">پرداخت‌نشده</span>':'<span class="tag s1">پرداخت‌شده</span>'}</td></tr>`).join('')}</tbody></table></div></div>`}inv();
/* تخفیف */
const CP=[['MEHR20','۲۰٪ تخفیف مهرماه',142,200,1],['FREESHIP','ارسال رایگان',88,100,1],['VIP30','۳۰٪ ویژه مشتریان طلایی',19,50,0],['NEW10','۱۰٪ خرید اول',301,500,1]];
$('#cpn').innerHTML=`<div class="hd"><h3>کدهای تخفیف</h3><button class="btn" data-t="کد تخفیف جدید ساخته شد">+ ساخت کد جدید</button></div><div class="grid cg">${CP.map(c=>`<div class="card cp"><code>${c[0]}</code><p style="color:var(--mut)">${c[1]}</p><div class="pb"><p><small>استفاده‌شده</small><small>${fa(c[2])} از ${fa(c[3])}</small></p><div><i style="width:${c[2]/c[3]*100}%"></i></div></div><div class="rw" style="border:0;padding:0"><span>فعال</span><input type="checkbox" class="sw" ${c[4]?'checked':''}></div></div>`).join('')}</div>`;
/* پیام‌ها */
const CH=[['سارا کریمی','سلام، سفارشم کی ارسال می‌شه؟'],['حسین موسوی','ممنون از ارسال سریع 🙏'],['نگار صادقی','امکان تعویض سایز هست؟']];let ca=0;const hist=CH.map(c=>[['a',c[1]]]);
function msg(){$('#msg').innerHTML=`<div class="card chat"><div class="cl">${CH.map((c,i)=>`<div class="${i==ca?'on':''}" data-ch="${i}"><div class="av" style="background:${cols[i]}">${c[0][0]}</div><p><b>${c[0]}</b><small>${hist[i][hist[i].length-1][1]}</small></p></div>`).join('')}</div><div class="cb"><div class="cm2" id="cm2">${hist[ca].map(m=>`<div class="bb ${m[0]=='b'?'me2':''}">${m[1]}</div>`).join('')}</div><div class="cin"><input class="in" id="mi" placeholder="پیام خود را بنویسید…" aria-label="پیام"><button class="btn" id="ms">ارسال</button></div></div></div>`;const c=$('#cm2');c.scrollTop=c.scrollHeight}
msg();
$('#msg').onclick=e=>{const d=e.target.closest('[data-ch]');if(d){ca=+d.dataset.ch;msg()}if(e.target.id=='ms')sm()};
$('#msg').onkeydown=e=>{if(e.key=='Enter'&&e.target.id=='mi')sm()};
function sm(){const v=$('#mi').value.trim();if(!v)return;hist[ca].push(['b',v]);msg();$('#mi').focus()}
/* نظرات */
$('#rev').innerHTML=`<div class="grid cg">${[['علی رضایی','هدفون بی‌سیم',5,'کیفیت صدا فوق‌العاده بود و بسته‌بندی عالی.'],['مینا یزدی','کیف چرمی',4,'جنس خوب است، فقط رنگش کمی تیره‌تر از عکس بود.'],['کیان فرهادی','قهوه‌ساز',3,'خوب کار می‌کند اما سروصدای زیادی دارد.'],['الهام رحیمی','ساعت هوشمند',5,'باتری چند روز دوام می‌آورد. پیشنهاد می‌کنم.']].map((r,i)=>`<div class="card"><div class="hd" style="margin:0"><b>${r[0]}</b><span class="stars">${'★'.repeat(r[2])}${'☆'.repeat(5-r[2])}</span></div><small style="color:var(--mut)">${r[1]}</small><p style="margin:10px 0">${r[3]}</p><button class="btn o" data-t="پاسخ شما ثبت شد">پاسخ دادن</button></div>`).join('')}</div>`;
/* تقویم */
{const EV={3:'جلسه تیم',8:'شروع کمپین مهر',14:'ارسال محموله',21:'جلسه تأمین‌کننده',27:'پایان تخفیف'};let h='<div class="card"><div class="hd"><h3>مهر ۱۴۰۵</h3></div><div class="cal">'+['ش','ی','د','س','چ','پ','ج'].map(d=>`<b>${d}</b>`).join('')+'<div></div>'.repeat(4);
for(let d=1;d<=30;d++)h+=`<div class="d ${EV[d]?'e':''} ${d==10?'td':''}">${fa(d)}${EV[d]?`<span>${EV[d]}</span>`:''}</div>`;$('#cal').innerHTML=h+'</div></div>'}
/* تیم */
const TM=[['مریم احمدی','مدیر کل','maryam@arman.ir',1],['رضا محمدی','مدیر محتوا','reza@arman.ir',1],['نازنین تهرانی','پشتیبان','nazanin@arman.ir',1],['داریوش قاسمی','حسابدار','dariush@arman.ir',0]];
$('#team').innerHTML=`<div class="card"><div class="hd"><h3>اعضای تیم</h3><button class="btn" data-t="دعوت‌نامه ارسال شد">+ دعوت عضو</button></div><div class="tw"><table><thead><tr><th>نام</th><th>نقش</th><th>ایمیل</th><th>وضعیت</th></tr></thead><tbody>${TM.map(t=>`<tr style="cursor:default"><td><b>${t[0]}</b></td><td><select style="width:auto">${['مدیر کل','مدیر محتوا','پشتیبان','حسابدار'].map(r=>`<option ${r==t[1]?'selected':''}>${r}</option>`).join('')}</select></td><td dir="ltr" style="text-align:right">${t[2]}</td><td>${t[3]?'<span class="tag s1">فعال</span>':'<span class="tag s3">غیرفعال</span>'}</td></tr>`).join('')}</tbody></table></div></div>`;
/* ورود */
$('#lgb').onclick=()=>{$('#lg').classList.add('off');toast('خوش آمدید، مریم!')};
$('.me').onclick=()=>$('#lg').classList.remove('off');$('.me').style.cursor='pointer';

/* اصلاحات */
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.matches('tr[data-o]'))drawer(e.target.dataset.o);if(e.key=='Enter'&&!$('#lg').classList.contains('off')&&e.target.closest('#lg'))$('#lgb').click();if(e.key=='Escape')$('#side').classList.remove('open')});
document.addEventListener('click',e=>{if(innerWidth<=860&&!e.target.closest('#side,#menu'))$('#side').classList.remove('open')});
$('#cpn').addEventListener('change',e=>{if(e.target.classList.contains('sw'))toast(e.target.checked?'کد تخفیف فعال شد':'کد تخفیف غیرفعال شد')});
$('#team').addEventListener('change',e=>{if(e.target.tagName=='SELECT')toast('نقش کاربر تغییر کرد')});
go('dash');ro();
