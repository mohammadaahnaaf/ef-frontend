import './style.css'

document.querySelector('#app').innerHTML = `
  
<div class="bg">
<nav>
    <img class="logo" src="/logo.webp" />
    <div class="header-items">
        <div class="links">
            <a href="#">Trending</a>
            <a href="#">Pre-orders</a>
            <a href="#">upcomming</a>
            <a href="#">Support 24/7</a>
        </div>

        <!-- search  -->
        <div id="searchBox" style="display:none" class="search-box">
            <div class="input-container">
                <input class="search" type="search" placeholder="Mindcraft, RPG, Multiplayer..." />
                <text class="sr-text">Advanced search</text>
            </div>
        </div>

        <!-- menu button  -->
        <div id="menuBox" class="search-box">
            <div class="input-container">
                <div class="menu">
                    <!-- PC  -->
                    <button id="menuBtn" class="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                        PC
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <!-- xbox  -->
                    <button id="menuBtn" class="menu-btn">
                        <svg class="menu-icon" stroke="currentColor" fill="currentColor"
                            xmlns:dc="http://purl.org/dc/elements/1.1/"
                            xmlns:cc="http://creativecommons.org/ns#"
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1"
                            inkscape:version="0.91pre4 r13712" viewBox="0 0 372.36823 372.57281">

                            <g transform="translate(-1.5706619,12.357467)">
                                <path
                                    d="M 169.18811,359.44924 C 140.50497,356.70211 111.4651,346.40125 86.518706,330.1252 65.614374,316.48637 60.893704,310.87967 60.893704,299.69061 c 0,-22.47524 24.711915,-61.84014 66.992496,-106.71584 24.01246,-25.48631 57.46022,-55.36001 61.0775,-54.55105 7.0309,1.57238 63.25048,56.41053 84.29655,82.2252 33.28077,40.82148 48.58095,74.24535 40.808,89.14682 -5.9087,11.32753 -42.57224,33.4669 -69.50775,41.97242 -22.19984,7.01011 -51.35538,9.9813 -75.37239,7.68108 z M 32.660004,276.3228 C 15.288964,249.67326 6.5125436,223.43712 2.2752336,185.49086 c -1.39917002,-12.53 -0.89778,-19.69701 3.17715,-45.41515 5.0788204,-32.05404 23.3330104,-69.136381 45.2671304,-91.957616 9.34191,-9.719732 10.17624,-9.956543 21.56341,-6.120482 13.828357,4.658436 28.595936,14.857457 51.498366,35.56661 l 13.36254,12.082873 -7.2969,8.96431 C 95.97448,140.22403 60.217254,199.2085 46.741444,235.70071 c -7.32599,19.83862 -10.28084,39.75281 -7.12868,48.04363 2.12818,5.59752 0.17339,3.51093 -6.95276,-7.42154 z m 304.915426,4.53255 c 1.71605,-8.37719 -0.4544,-23.76257 -5.5413,-39.28002 -11.01667,-33.60598 -47.83964,-96.12421 -81.65282,-138.63054 L 239.73699,89.563875 251.25285,78.989784 c 15.03631,-13.806637 25.47602,-22.073835 36.74025,-29.094513 8.88881,-5.540156 21.59109,-10.444558 27.05113,-10.444558 3.36626,0 15.21723,12.298726 24.78421,25.720611 14.81725,20.787711 25.71782,45.986976 31.24045,72.219686 3.56833,16.9498 3.8657,53.23126 0.57486,70.13935 -2.70068,13.87582 -8.40314,31.87484 -13.9661,44.08195 -4.16823,9.14657 -14.53521,26.91044 -19.0783,32.69074 -2.33569,2.97175 -2.33761,2.96527 -1.02393,-3.4477 z M 172.25917,33.104812 c -15.60147,-7.922671 -39.6696,-16.427164 -52.96493,-18.715209 -4.66097,-0.802124 -12.61193,-1.249474 -17.6688,-0.994114 -10.969613,0.55394 -10.479662,-0.0197 7.11783,-8.3336652 14.63023,-6.912081 26.83386,-10.976696 43.40044,-14.455218 18.6362,-3.9130858 53.66559,-3.9590088 72.00507,-0.0944 19.80818,4.174105 43.13297,12.854085 56.27623,20.9423862 l 3.90633,2.403927 -8.96247,-0.452584 c -17.81002,-0.899366 -43.76575,6.295879 -71.63269,19.857459 -8.40538,4.090523 -15.71788,7.357511 -16.25,7.25997 -0.53211,-0.09754 -7.38426,-3.43589 -15.22701,-7.418555 z"
                                    inkscape:connector-curvature="0" />
                            </g>
                        </svg>
                        XBox
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>

                    <!-- playstations  -->
                    <button id="menuBtn" class="menu-btn">
                        <svg class="menu-icon" xmlns:dc="http://purl.org/dc/elements/1.1/" fill="currentColor"
                            xmlns:cc="http://creativecommons.org/ns#"
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                            version="1.1" viewBox="0 0 200 154.81912">
                            <path class="cls-2"
                                d="m 197.23914,117.96194 c -3.8677,4.8796 -13.34356,8.36053 -13.34356,8.36053 0,0 -70.49109,25.31994 -70.49109,25.31994 0,0 0,-18.67289 0,-18.67289 0,0 51.87665,-18.48401 51.87665,-18.48401 5.887,-2.10924 6.79096,-5.09097 2.00581,-6.65604 -4.77616,-1.56957 -13.42451,-1.11983 -19.31601,0.99841 0,0 -34.56645,12.17426 -34.56645,12.17426 0,0 0,-19.37898 0,-19.37898 0,0 1.99232,-0.6746 1.99232,-0.6746 0,0 9.98856,-3.534896 24.03371,-5.09097 14.04515,-1.547081 31.24291,0.211374 44.74389,5.32933 15.21445,4.80764 16.92793,11.89543 13.06473,16.77502 z M 120.11451,86.165853 c 0,0 0,-47.752601 0,-47.752601 0,-5.608163 -1.03439,-10.771093 -6.29626,-12.232725 -4.0296,-1.290734 -6.53012,2.45104 -6.53012,8.054706 0,0 0,119.583887 0,119.583887 0,0 -32.250314,-10.23591 -32.250314,-10.23591 0,0 0,-142.58321 0,-142.58321 13.712343,2.54549 33.689454,8.56291 44.429074,12.18326 27.31226,9.376917 36.57225,21.047482 36.57225,47.343343 0,25.630256 -15.82159,35.344478 -35.92463,25.63925 z M 15.862004,131.01768 C 0.24279269,126.6193 -2.3566614,117.45375 4.7626047,112.17389 c 6.5795883,-4.8751 17.7689333,-8.54492 17.7689333,-8.54492 0,0 46.241498,-16.442224 46.241498,-16.442224 0,0 0,18.744854 0,18.744854 0,0 -33.275709,11.90892 -33.275709,11.90892 -5.878004,2.10924 -6.781967,5.09547 -2.005807,6.66054 4.780657,1.56506 13.433512,1.11983 19.320511,-0.99391 0,0 15.961005,-5.79256 15.961005,-5.79256 0,0 0,16.77053 0,16.77053 -1.011893,0.17989 -2.140724,0.35978 -3.184104,0.53518 -15.965505,2.60845 -32.969893,1.5201 -49.726928,-4.00262 z m 171.105246,7.42508 c 2.0193,0 3.91267,0.78254 5.33832,2.22618 1.42566,1.42115 2.21269,3.31903 2.21269,5.33383 0,2.02379 -0.78703,3.91267 -2.21269,5.33383 -1.42565,1.43464 -3.31902,2.21718 -5.33832,2.21718 -2.0193,0 -3.90818,-0.78254 -5.33833,-2.21718 -1.42565,-1.42116 -2.20818,-3.31004 -2.20818,-5.33383 0,-4.16453 3.38198,-7.56001 7.54651,-7.56001 z m -6.27827,7.56001 c 0,1.6775 0.65211,3.25606 1.83941,4.43436 1.18279,1.19629 2.76585,1.8439 4.43886,1.8439 3.46743,0 6.27826,-2.81532 6.27826,-6.27826 0,-1.682 -0.64761,-3.26056 -1.8394,-4.44336 -1.1828,-1.19629 -2.76586,-1.83941 -4.43886,-1.83941 -1.67301,0 -3.25607,0.64312 -4.43886,1.83941 -1.1873,1.1828 -1.83941,2.76136 -1.83941,4.44336 z m 8.55841,-4.07008 c 0.82751,0.36428 1.24576,1.06586 1.24576,2.06427 0,0.5127 -0.10794,0.94444 -0.3283,1.28174 -0.15741,0.24285 -0.38228,0.44074 -0.63413,0.61163 0.19788,0.11694 0.37328,0.25635 0.50371,0.41826 0.17988,0.23386 0.28332,0.60713 0.29682,1.11533 0,0 0.0405,1.07486 0.0405,1.07486 0.0135,0.28783 0.0315,0.5082 0.0765,0.64312 0.045,0.19788 0.13042,0.32381 0.23835,0.36429 0,0 0.11244,0.054 0.11244,0.054 0,0 0,0.12143 0,0.12143 0,0 0,0.18439 0,0.18439 0,0 0,0.18439 0,0.18439 0,0 -0.18439,0 -0.18439,0 0,0 -1.33571,0 -1.33571,0 0,0 -0.10793,0 -0.10793,0 0,0 -0.054,-0.0944 -0.054,-0.0944 -0.045,-0.0899 -0.0764,-0.19338 -0.10793,-0.3283 -0.0225,-0.12143 -0.045,-0.3328 -0.0585,-0.65661 0,0 -0.0675,-1.33571 -0.0675,-1.33571 -0.018,-0.46322 -0.1754,-0.75105 -0.47222,-0.90396 -0.18439,-0.0854 -0.49021,-0.12592 -0.90396,-0.12592 0,0 -2.28914,0 -2.28914,0 0,0 0,3.26056 0,3.26056 0,0 0,0.18439 0,0.18439 0,0 -0.18889,0 -0.18889,0 0,0 -1.08836,0 -1.08836,0 0,0 -0.18438,0 -0.18438,0 0,0 0,-0.18439 0,-0.18439 0,0 0,-8.03672 0,-8.03672 0,0 0,-0.18439 0,-0.18439 0,0 0.18438,0 0.18438,0 0,0 3.71929,0 3.71929,0 0.63863,0 1.17381,0.0944 1.58756,0.28782 z m -4.0296,3.38648 c 0,0 2.32961,0 2.32961,0 0.46772,0 0.841,-0.0855 1.10634,-0.26084 0.24286,-0.1754 0.35979,-0.49471 0.35979,-0.95793 0,-0.5037 -0.1664,-0.83201 -0.51719,-1.0074 -0.19338,-0.0944 -0.46323,-0.14841 -0.80503,-0.14841 0,0 -2.47352,0 -2.47352,0 0,0 0,2.37458 0,2.37458 z" />
                        </svg>
                        Playstation
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>

                    <!-- nintendo  -->
                    <button id="toggleButton" type="button" class="menu-btn">
                        <svg version="1.0" class="menu-icon" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 700.0 550.0" fill="currentColor" stroke="currentColor">
                            <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)">
                                <path d="M2965 8314 c-481 -86 -868 -442 -990 -910 -44 -169 -47 -268 -42
                    -1579 3 -1204 4 -1232 24 -1325 111 -501 467 -858 973 -976 66 -15 150 -18
                    691 -21 560 -4 618 -3 633 12 15 15 16 208 16 2396 0 1622 -3 2386 -10 2400
                    -10 18 -27 19 -613 18 -476 -1 -619 -4 -682 -15z m905 -2400 l0 -2026 -407 5
                    c-375 4 -415 6 -490 25 -322 83 -561 331 -628 654 -22 101 -22 2589 -1 2688
                    60 281 255 514 518 619 132 53 193 59 621 60 l387 1 0 -2026z" />
                                <path d="M3051 7329 c-63 -12 -159 -60 -210 -105 -105 -91 -157 -220 -149
                    -372 4 -79 9 -100 41 -164 47 -97 118 -168 215 -216 67 -33 84 -37 171 -40 79
                    -3 107 0 160 18 217 73 348 284 311 500 -43 257 -287 429 -539 379z" />
                                <path d="M4757 8323 c-4 -3 -7 -1087 -7 -2409 0 -2181 1 -2402 16 -2408 27
                    -10 803 -6 899 4 406 46 764 293 959 660 25 47 58 126 75 175 63 188 61 138
                    61 1575 0 1147 -2 1318 -16 1391 -99 521 -496 914 -1018 1004 -70 12 -178 15
                    -526 15 -240 0 -440 -3 -443 -7z m1068 -2178 c156 -41 284 -160 336 -312 33
                    -94 32 -232 -1 -318 -61 -158 -181 -269 -335 -310 -250 -65 -516 86 -589 334
                    -22 76 -21 204 4 282 75 245 335 389 585 324z" />
                            </g>
                        </svg>
                        Nintendo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="menu-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>

                </div>
                <!-- search  -->
                <button id="searchButton" class="srch-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="menu-icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>

    <!-- cart and profile  -->
    <div class="right-icons">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>

    </div>

</nav>

<div class="main-cont">
    <div class="header-cont">
        <header>
            <p class="days">In 15 days</p>
            <h2>Starfield Digital Premium Edition + Early Access</h2>
            <p class="banner-text">
                <svg style="height: 25px; width:auto;" id="Layer_1" data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.89 87.67">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #f7941d;
                            }

                            .cls-2 {
                                font-size: 51.09px;
                                fill: #fff;
                                font-family: Calibri;
                            }
                        </style>
                    </defs>
                    <path class="cls-1"
                        d="M610,403.84H469.65c-5.55,0-10.1-3.78-10.1-8.4V324.56c0-4.62,4.55-8.4,10.1-8.4h111.5c6.74,0,8,3.73,10.09,8.4l28.41,69.77C622.89,402.73,615.56,403.84,610,403.84Z"
                        transform="translate(-459.55 -316.16)" />
                    <text class="cls-2" transform="translate(15.89 61.82)">-25%</text>
                </svg>
                <span>74.89$</span>
            </p>
        </header>
    </div>

    <div id="menuCard" style="display:none" class="head-card">
        <div class="platform">
            <p>Platforms</p>
            <p>View All</p>
        </div>

        <div class="platforms">

            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
        </div>

        <div class="platform">
            <p>Prepaid cards</p>
            <p>View All</p>
        </div>
        <div class="platforms">
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
            <div class="plat">
                <img src="/logos/rockstar.png" height="40" width="40" />
                <p>Rockstar</p>
            </div>
        </div>
    </div>
</div>

<div class="trending">
    <div class="title">
        <h3>Trending</h3>
        <button class="view">View All</button>
    </div>
    
    <div class="trending-cont">

        <div class="card">
            <div class="img-box">
                <img class="img-card" src="/need-for-speed.jpg" />
                <div class="dis-tag">
                    <svg style="height: 25px; width:auto;" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.89 87.67">
                        <defs>
                            <style>
                                .cls-1 {
                                    fill: #FE7306;
                                }

                                .cls-2 {
                                    font-size: 51.09px;
                                    fill: #fff;
                                    font-family: Calibri;
                                }
                            </style>
                        </defs>
                        <path class="cls-1"
                            d="M610,403.84H469.65c-5.55,0-10.1-3.78-10.1-8.4V324.56c0-4.62,4.55-8.4,10.1-8.4h111.5c6.74,0,8,3.73,10.09,8.4l28.41,69.77C622.89,402.73,615.56,403.84,610,403.84Z"
                            transform="translate(-459.55 -316.16)" />
                        <text class="cls-2" transform="translate(15.89 61.82)">-26%</text>
                    </svg>
                </div>
            </div>
            <div class="card-text">
                <h4> Need For Speed</h4>
                <p>19.99 $</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img class="img-card" src="/far-cry.jpg" />
                <div class="dis-tag">
                    <svg style="height: 25px; width:auto;" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.89 87.67">
                        <defs>
                            <style>
                                .cls-1 {
                                    fill: #FE7306;
                                }

                                .cls-2 {
                                    font-size: 51.09px;
                                    fill: #fff;
                                    font-family: Calibri;
                                }
                            </style>
                        </defs>
                        <path class="cls-1"
                            d="M610,403.84H469.65c-5.55,0-10.1-3.78-10.1-8.4V324.56c0-4.62,4.55-8.4,10.1-8.4h111.5c6.74,0,8,3.73,10.09,8.4l28.41,69.77C622.89,402.73,615.56,403.84,610,403.84Z"
                            transform="translate(-459.55 -316.16)" />
                        <text class="cls-2" transform="translate(15.89 61.82)">-23%</text>
                    </svg>
                </div>
            </div>
            <div class="card-text">
                <h4> FarCry 3</h4>
                <p>30.99 $</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img class="img-card" src="/tomb-rider.jpg" />
                <div class="dis-tag">
                    <svg style="height: 25px; width:auto;" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.89 87.67">
                        <defs>
                            <style>
                                .cls-1 {
                                    fill: #FE7306;
                                }

                                .cls-2 {
                                    font-size: 51.09px;
                                    fill: #fff;
                                    font-family: Calibri;
                                }
                            </style>
                        </defs>
                        <path class="cls-1"
                            d="M610,403.84H469.65c-5.55,0-10.1-3.78-10.1-8.4V324.56c0-4.62,4.55-8.4,10.1-8.4h111.5c6.74,0,8,3.73,10.09,8.4l28.41,69.77C622.89,402.73,615.56,403.84,610,403.84Z"
                            transform="translate(-459.55 -316.16)" />
                        <text class="cls-2" transform="translate(15.89 61.82)">-23%</text>
                    </svg>
                </div>
            </div>
            <div class="card-text">
                <h4> Tomb Rider</h4>
                <p>30.99 $</p>
            </div>
        </div>
       

    </div>

</div>
<footer>Ahnafia</footer>
</div>
  `

const searchBox = document.getElementById('searchBox');
const menuBox = document.getElementById('menuBox');
const searchButton = document.getElementById('searchButton');

const menuBtn = document.getElementById('menuBtn');
const menuCard = document.getElementById('menuCard');

searchButton.addEventListener('click', () => {
    if (searchBox.style.display === 'none') {
        searchBox.style.display = 'block';
        menuBox.style.display = 'none';
    } else {
        searchBox.style.display = 'none';
        menuBox.style.display = 'block';
    }
});

menuBtn.addEventListener('click', () => {
    if (menuCard.style.display === 'none') {
        menuCard.style.display = 'block';
    } else {
        menuCard.style.display = 'none';
    }
});