    // STICKY NAVBAR CHANGE COLOR JS
    function navChangeFunction() {
        let navbar = document.getElementById('navbar');
        let navlink = document.querySelectorAll('.navlink');
        let navbrand = document.getElementById('navbrand');
        let scrollValue = window.scrollY;


        if(scrollValue < 700){
        navbar.classList.remove('navChange');
        navlink[0].classList.remove('navlinkChange');
        navlink[1].classList.remove('navlinkChange');
        navlink[2].classList.remove('navlinkChange');
        navlink[3].classList.remove('navlinkChange');
        navlink[4].classList.remove('navlinkChange');
        navlink[5].classList.remove('navlinkChange');
        navlink[6].classList.remove('navlinkChange');
        navbrand.classList.remove('brandChange');
        }else{
        navbar.classList.add('navChange');
        navlink[0].classList.add('navlinkChange');
        navlink[1].classList.add('navlinkChange');
        navlink[2].classList.add('navlinkChange');
        navlink[3].classList.add('navlinkChange');
        navlink[4].classList.add('navlinkChange');
        navlink[5].classList.add('navlinkChange');
        navlink[6].classList.add('navlinkChange');
        navbrand.classList.add('brandChange');
        }
    }

    window.addEventListener('scroll', navChangeFunction);



    // SCROLL TO TOP JS
    let mybutton = document.getElementById("topBtn");

    window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      } else {
      mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    }





    // DARK MODE JS
    const body = document.querySelector("body");
    const toggle = document.getElementById("toggleDark");
    toggle.onclick = function(){
    toggle.classList.toggle('darkMode');
    body.classList.toggle('darkMode');
    }






    // SHOP NOW ALERT JS
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        alert('Wala ka pang pera, mag-ipon ka muna!', 'dark')
      })
    } 

    


    
    // CHATBOT JS
    window.__be = window.__be || {};
    window.__be.id = "6365d1cdea2b2800076bab3d";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();
