(()=>{"use strict";const e=e=>{function t(e){let t="+7 (___) ___ __ __",a=0,n=t.replace(/\D/g,""),s=this.value.replace(/\D/g,"");n.length>=s.length&&(s=n),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&a<s.length?s.charAt(a++):a>=s.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}})(this.value.length,this)}document.querySelectorAll(e).forEach((e=>{e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)}))};window.addEventListener("DOMContentLoaded",(()=>{(async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status ${t.status}`);return await t.json()})("assets/db.json").then((e=>{return t=e.slides,console.log(t),void t.reverse().forEach((e=>{let t=document.createElement("div");t.classList.add("carousel_card"),t.innerHTML=`\n            <div class="carousel_card_descr">\n                        <div class="carousel_card_descr_title">Check-UP</div>\n                        <div class="carousel_card_descr_subtitle">\n                            ${e.gender}\n                        </div>\n                        <ul>\n                            <li class="carousel_card_descr_li">\n                               ${e.prop1}\n                            </li>\n                            <li class="carousel_card_descr_li">${e.prop2}</li>\n                            <li class="carousel_card_descr_li">\n                                ${e.prop3}\n                            </li>\n                            <li class="carousel_card_descr_li">\n                                 ${e.prop4}\n                            </li>\n                        </ul>\n                        <div class="carousel_card_descr_price">\n                            <span>Всего</span\n                            ><span class="newprice">${e.price}</span>\n                            <span class="oldprice">${e.oldPrice}</span>\n                        </div>\n                        <div class="carousel_card_descr_buttons">\n                            <button data-modal="consultation" class="button">Записаться</button>\n                            <button class="button button_second">\n                                Подробнее\n                            </button>\n                        </div>\n                    </div>\n                    <div class="carousel_card_img">\n                        <img\n                            src=${e.img}\n                            alt=${e.imgName}\n                        />\n                    </div>\n            `,document.querySelector(".carousel .container").prepend(t)}));var t})).then((()=>((e,t,a)=>{let n=1;const s=document.querySelectorAll(e),c=document.querySelector(".carousel_navi_count span");function l(e){e>s.length&&(n=1),e<1&&(n=s.length),c.textContent=n,s.forEach((e=>{e.classList.add("animate__animated"),e.style.display="none"})),s[n-1].style.display="flex"}function o(e){l(n+=e)}l(n);try{const e=document.querySelector(t),c=document.querySelector(a);e.addEventListener("click",(()=>{o(-1),s[n-1].classList.remove("animate__fadeIn"),s[n-1].classList.add("animate__fadeIn")})),c.addEventListener("click",(()=>{o(1),s[n-1].classList.remove("animate__fadeIn"),s[n-1].classList.add("animate__fadeIn")}))}catch(e){}})(".carousel_card",".carousel_navi_prev",".carousel_navi_next"))).then((()=>(()=>{function e(){document.querySelector(".modal").classList.remove("modal_show","animate__animated","animate__fadeIn"),document.querySelector(".page_overlay").classList.remove("page_overlay_show"),document.body.classList.toggle("overflow"),document.querySelectorAll(".feed-form").forEach((e=>{e.reset()}))}document.querySelectorAll('[data-modal="consultation"]').forEach((e=>{e.addEventListener("click",(e=>{document.querySelector(".modal").classList.add("modal_show","animate__animated","animate__fadeIn"),document.querySelector(".page_overlay").classList.add("page_overlay_show"),document.body.classList.toggle("overflow")}))})),document.querySelectorAll(".modal_close").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault,e()}))})),document.querySelector(".page_overlay").addEventListener("click",(t=>{t.preventDefault,t.target===document.querySelector(".page_overlay")&&e()}))})())).catch((e=>console.log(e))),(()=>{const e=document.querySelector(".header_hamburger_menu"),t=document.querySelector(".mobile_menu"),a=document.querySelectorAll(".sidemenu ul li a");var n,s,c;s=t,c=a,(n=e).addEventListener("click",(function(){n.classList.toggle("active"),s.classList.toggle("active"),document.body.classList.toggle("overflow")})),c.forEach((e=>{e.addEventListener("click",(()=>{n.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("overflow")}))}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input");e.forEach((e=>{e.addEventListener("submit",(a=>{a.preventDefault();let n=document.createElement("div");n.classList.add("status"),e.parentNode.appendChild(n),e.classList.add("animated","fadeOutUp"),setTimeout((()=>{e.style.display="none"}),400);let s=document.createElement("img");s.setAttribute("src","assets/img/spinner.gif"),s.classList.add("animated","fadeInUp"),s.style.display="block",s.style.margin="0 auto",n.appendChild(s);let c=document.createElement("div");c.textContent="Загрузка...",n.appendChild(c),(async(e,t)=>{let a=await fetch("mailer/smart.php",{method:"POST",body:t});return await a.text()})(0,new FormData(e)).then((e=>{s.setAttribute("src","assets/img/ok.png"),c.textContent="Спасибо! Ожидайте сообщение!"})).catch((()=>{s.setAttribute("src","assets/img/fail.png"),c.textContent="Упс, возможно у Вас проблемы с интернетом"})).finally((()=>{t.forEach((e=>{e.value=""})),setTimeout((()=>{n.remove(),e.style.display="block",e.classList.remove("fadeOutUp"),e.classList.add("fadeInUp")}),5e3)}))}))}))})(),e('[name="phone"]')}))})();