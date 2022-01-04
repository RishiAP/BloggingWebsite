let bodyWidth = document.querySelector("body");
if (bodyWidth.getBoundingClientRect().width > 1300) {
    document.getElementById('ham-icon').style.display = 'none';
    document.getElementById('nav-left').style.left = '10vw';
}
if (bodyWidth.getBoundingClientRect().width <= 1000) {
    document.getElementById('search').placeholder = 'Search';
}
function sideMenu() {
    console.log('yes');
    if (document.getElementById('side-Menu').style.animationName == 'none' || document.getElementById('side-Menu').style.animationName == 'sideMenuSlideClose') 
    {
        document.getElementById('side-Menu').style.animationName='sideMenuSlideOpen';
        document.getElementById('side-Menu').style.left='-50vw';
        document.getElementById('ham-icon').classList.remove('fa-bars');
        document.getElementById('ham-icon').classList.add('fa-times');
        
    }
    else {
        console.log('no');
        document.getElementById('side-Menu').style.animationName='sideMenuSlideClose';
        document.getElementById('side-Menu').style.left='0vw';
        document.getElementById('ham-icon').classList.remove('fa-times');
        document.getElementById('ham-icon').classList.add('fa-bars');
    }
}
function on_off()
{
    if(document.getElementById('bookmark').classList.contains('off'))
    {
        document.getElementById('bookmark').classList.replace('off','on');
        document.getElementById('bookmark').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24px" height="24px" viewBox="0 0 256 256" xml:space="preserve">
        <desc>Created with Fabric.js 1.7.22</desc>
        <defs>
        </defs>
        <g transform="translate(128 128) scale(1.21 1.21)" style="">
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-104.85 -104.85000000000001) scale(2.33 2.33)" >
            <path d="M 74.113 0 H 15.886 c -1.105 0 -2 0.895 -2 2 v 86 c 0 0.759 0.43 1.453 1.109 1.791 c 0.282 0.14 0.587 0.209 0.89 0.209 c 0.428 0 0.854 -0.138 1.208 -0.405 l 25.669 -19.432 c 1.324 -1.002 3.152 -1.002 4.476 0 l 25.668 19.432 c 0.606 0.458 1.418 0.533 2.098 0.196 c 0.68 -0.338 1.109 -1.032 1.109 -1.791 V 2 C 76.113 0.895 75.218 0 74.113 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(211,57,57); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        </g>
        </g>
        </svg>`;
    }
    else
    {
        document.getElementById('bookmark').classList.replace('on','off');
        document.getElementById('bookmark').innerHTML=`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"/></svg>`;
    }
}
function passwordDisplay(){
    if(document.getElementById('pass-display-icon').classList.contains('fa-eye'))
    {
        document.getElementById('pass-display-icon').classList.replace('fa-eye','fa-eye-slash');
        document.getElementById('password').type='text';
    }
    else{
        document.getElementById('pass-display-icon').classList.replace('fa-eye-slash','fa-eye');
        document.getElementById('password').type='password';

    }
}
function signInOpen(){
    if(document.getElementById('sign-in-section').style.display=='none')
    {
        document.getElementById('sign-in-section').style.display='block';
    }
}
function signInClose(){
        document.getElementById('sign-in-section').style.display='none';
}