(function() {
    var fr = document.getElementById('fr'),
        sv = document.getElementById('sv'),
        ab = document.getElementById('ab'),
        eq = document.getElementById('eq'),
        ok = document.getElementById('ok'),
        hero = fr.querySelector('.hero');
    /* header clone */
    [sv, ab, eq, ok].forEach(function(t) {
        ['.logo', 'nav'].forEach(function(q) {
            t.appendChild(hero.querySelector(q).cloneNode(true));
        });
    });
    [
        [sv, 'Services'],
        [ab, 'About Us'],
        [eq, 'Enquiry'],
        [ok, '']
    ].forEach(function(p) {
        p[0].querySelectorAll('nav a').forEach(function(a) {
            a.classList.toggle('on', a.textContent === p[1]);
        });
    });
    /* footer clone */
    [
        [sv, 2128],
        [ab, 2969],
        [eq, 2030],
        [ok, 1820]
    ].forEach(function(p) {
        var ft = fr.querySelector('footer').cloneNode(true);
        ft.style.cssText = 'position:absolute;left:0;top:' + p[1] + 'px;width:1800px;margin:0';
        p[0].appendChild(ft);
    });
    [fr, sv, ab, eq, ok].forEach(function(r) {
        r.querySelectorAll('footer li').forEach(function(li) {
            var t = li.textContent;
            var M = {
                'Home': 'home',
                'Services': 'services',
                'Enquiry': 'enquiry',
                'Contact Us': 'enquiry'
            };
            if (M[t]) {
                var a = document.createElement('a');
                a.href = '#' + M[t];
                a.textContent = t;
                li.textContent = '';
                li.appendChild(a);
            }
        });
    });
    /* data */
    var arrow = '<svg width="30" height="24" viewBox="0 0 30 24" fill="none"><path d="M2 12h24M17 3l9 9-9 9" stroke="#234E70" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var I = {
        m: '<svg width="48" height="44" viewBox="0 0 48 44" fill="none" stroke="#234E70" stroke-width="4" stroke-linecap="round"><rect x="3" y="2" width="42" height="30" rx="3"/><path d="M16 40h16M3 25h42"/></svg>',
        c: '<svg width="50" height="54" viewBox="0 0 50 54"><path d="M2 24L18 4l16 20v22H2z" fill="#234E70"/><path d="M24 30h24v12c0 6-6 10-12 12-6-2-12-6-12-12z" fill="#234E70" stroke="#fff" stroke-width="3"/></svg>',
        l: '<svg width="58" height="40" viewBox="0 0 58 40"><path d="M14 38A12 12 0 0 1 12 14a15 15 0 0 1 28-3 14 14 0 0 1 6 27z" fill="#234E70"/></svg>',
        t: '<svg width="48" height="44" viewBox="0 0 48 44" fill="#234E70"><circle cx="8" cy="6" r="5"/><circle cx="24" cy="5" r="5"/><circle cx="40" cy="6" r="5"/><path d="M2 16h14v8h16v-8h14v10H34v6h-6v10h-8V32h-6v-6H2z"/></svg>'
    };
    var D = [{
        n: 'Managed IT Services',
        i: 'm',
        ix: 36,
        d: 'Proactive support and management to keep<br>your systems running smoothly.',
        dx: 112,
        inc: ['24/7 monitoring', 'Helpdesk support'],
        b: 'Businesses seeking<br>reliable day-to-day<br>IT support.',
        bx: 394,
        l: 'Ongoing managed<br>service with flexible<br>plans.',
        lx: 772
    }, {
        n: 'Cybersecurity',
        i: 'c',
        ix: 32,
        d: 'Protect your people, data and reputation.',
        dx: 126,
        inc: ['Threat detection', 'Vulnerability review'],
        b: 'Organisations that need<br>stronger security and<br>compliance.',
        bx: 377,
        l: 'Tailored solutions with<br>expert setup and<br>monitoring.',
        lx: 762
    }, {
        n: 'Cloud Solutions',
        i: 'l',
        ix: 26,
        d: 'Modern, scalable cloud services to<br>enable growth.',
        dx: 147,
        inc: ['Cloud migration', 'Infrastructure management'],
        b: 'Businesses looking to<br>improve agility and<br>reduce costs.',
        bx: 387,
        l: 'Project-based<br>or managed service,<br>depending<br>on your needs.',
        lx: 771,
        ly: 179
    }, {
        n: 'IT Consulting',
        i: 't',
        ix: 32,
        d: 'Strategic advice to help<br>you make the right technology decisions.',
        dx: 126,
        inc: ['IT strategy and planning', 'Technology assessments'],
        b: 'Organisations planning<br>growth or change.',
        bx: 381,
        l: 'Consultative projects<br>with clear outcomes<br>and recommendations.',
        lx: 761
    }];
    var sb = document.getElementById('sb'),
        btns = [];
    D.forEach(function(c, k) {
        var b = document.createElement('button');
        b.innerHTML = c.n + arrow;
        if (!k) b.className = 'on';
        b.onclick = function() {
            btns.forEach(function(x) {
                x.classList.remove('on')
            });
            b.classList.add('on');
            var el = document.getElementById('sc' + k);
            window.scrollTo({
                top: (el.getBoundingClientRect().top + window.scrollY) * 1 - 20,
                behavior: 'smooth'
            });
        };
        sb.appendChild(b);
        btns.push(b);
        var s = document.createElement('div');
        s.className = 'sc';
        s.id = 'sc' + k;
        s.style.top = (505 + 389 * k) + 'px';
        s.innerHTML = '<div class="ic2" style="left:' + c.ix + 'px;top:' + (k == 2 ? 42 : 43) + 'px">' + I[c.i] + '</div><h3>' + c.n + '</h3><div class="d" style="left:' + c.dx + 'px">' + c.d + '</div>' +
            '<h4 style="left:28px">What it includes</h4><div class="x" style="left:28px;top:190px">• ' + c.inc[0] + '</div><div class="x" style="left:28px;top:236px">• ' + c.inc[1] + '</div>' +
            '<div class="vl" style="left:349px"></div><h4 style="left:394px">Best for</h4><div class="x" style="left:' + c.bx + 'px;top:190px">' + c.b + '</div>' +
            '<div class="vl" style="left:728px"></div><h4 style="left:772px">Delivery style</h4><div class="x" style="left:' + c.lx + 'px;top:' + (c.ly || 190) + 'px">' + c.l + '</div>';
        sv.appendChild(s);
    });
    /* routing */
    var P = function(c, s, t) {
        return '<div class="' + c + '" style="' + s + '">' + t + '</div>';
    };
    var B = function(l, t, n, x) {
        return '<div class="bx" style="left:' + l + 'px;top:' + t + 'px"><b>' + n + '</b><span>' + x + '</span></div>';
    };
    ab.insertAdjacentHTML('beforeend', '<div class="pt">ABOUT US</div>' +
        P('ah', 'left:192px;top:492px', 'Our Vision') +
        P('ap', 'left:291px;top:583px', 'Our vision is to make technology simple, secure, and reliable for growth business.<br>We want every team to work with confidence, reduce everyday IT challenges,<br>and use the right digital tools to stay connected, protect important information,<br>improve productivity, and build a stronger, more successful future.<br>We strive to be technology partner businesses can depend on a every stage.') +
        P('ah', 'left:175px;top:925px', 'Our Mission') +
        P('ap', 'left:291px;top:1026px', 'Our mission is to understand each client’s unique needs and provide practical IT support,<br>strong cybersecurity, flexible cloud solutions, and clear technology advice. Through<br>responsive service, honest communication, and long-term partnership, we help<br>businesses keep their systems running smoothly, protect their people and data, and grow<br>with confidence.<br>Our focus is always on delivering real value through dependable technology services.') +
        P('ah', 'left:0;width:1800px;text-align:center;top:1402px', 'Our Achievements') +
        B(162, 1553, '10+', 'Years of combined IT experience') + B(990, 1553, '500+', 'Support requests successfully handled') +
        B(162, 1932, '98%', 'Client satisfaction focus') + B(990, 1932, '24/7', 'Monitoring and support availability') +
        B(578, 2254, '50+', 'Businesses supported with IT solutions') +
        P('ah', 'left:356px;top:2689px;font-size:36px;color:#0E2A44', 'Built on trust, strengthened by practical technology.') +
        P('ah', 'left:990px;top:2751px;width:496px;height:68px;background:linear-gradient(135deg,#8CD8BC,#5FCBA8);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:36px;line-height:48px;color:#000', 'Start journey with us'));
    var H = function(c, s, t) {
        return '<div class="' + c + '" style="' + s + '">' + t + '</div>';
    };
    var IN = function(l, t, p) {
        return '<input class="in" style="left:' + l + 'px;top:' + t + 'px" placeholder="' + p + '">';
    };
    var tabs = ['Managed IT', 'Cybersecurity', 'Cloud', 'IT Consulting'].map(function(n, i) {
        return H('tb' + (i ? '' : ' on'), 'left:' + (176 + 379 * i) + 'px', n);
    }).join('');
    var steps = [
        [404, '1', 'We review your enquiry.', 'Our team will look at your requirements<br>and any relevant details.'],
        [900, '2', 'We get in touch .', 'We’ll contact you within 1 business day<br>to discuss your needs.'],
        [1396, '3', 'We recommand next steps.', 'We’ll suggest the right solution and<br>outline the next steps.']
    ].map(function(s) {
        return H('sn', 'left:' + s[0] + 'px', s[1]) + H('sh', 'left:' + s[0] + 'px;top:1845px', s[2]) + H('sd', 'left:' + (s[0] + 2) + 'px;top:1908px', s[3]);
    }).join('');
    eq.insertAdjacentHTML('beforeend', '<div class="pt">ENQUIRY</div>' + tabs + '<div class="eqc"></div><div class="eqi"></div>' +
        H('lb', 'left:220px;top:525px;font-size:36px;line-height:48px;color:#2F5B7D', 'Enquiry') +
        H('lb', 'left:220px;top:631px', 'Full Name') + H('lb', 'left:1020px;top:631px;color:#5F7F94', 'Work email') +
        IN(220, 696, 'Enter Your Full Name') + IN(1020, 696, 'Your@company.com') +
        H('lb', 'left:220px;top:820px', 'Company Name') + H('lb', 'left:1020px;top:820px', 'Phone Number') +
        IN(220, 885, 'Enter Your Company Name') + IN(1020, 885, 'e.g. +1 234 567 8900') +
        H('lb', 'left:220px;top:1008px;font-size:26px', 'Tell us about requirements') +
        '<textarea class="ta" placeholder="Please share your requirements, current challenges or any specific information"></textarea>' +
        '<button class="sbm" id="sbm">Submit enquiry</button>' +
        H('lb', 'left:0;width:1774px;text-align:center;top:1400px;font-size:26px', '<span id="eqn">We only use your details to respond to this enquiry</span>') +
        '<svg class="a" style="left:626px;top:1511px" width="49" height="38" viewBox="0 0 49 38" fill="none" stroke="#234E70" stroke-width="4.5" stroke-linejoin="round"><rect x="2.5" y="2.5" width="44" height="33"/><path d="M2.5 4l22 17L46.5 4"/></svg>' +
        H('lb', 'left:719px;top:1511px;font-size:26px;color:#4B6E86', 'Our tem will reply within 1 business day.') +
        H('lb', 'left:0;width:1800px;text-align:center;top:1620px;font-size:32px;line-height:44px;color:#4B6E86', 'What happens next?') + steps);
    eq.querySelectorAll('.tb').forEach(function(t) {
        t.onclick = function() {
            eq.querySelectorAll('.tb').forEach(function(x) {
                x.classList.remove('on')
            });
            t.classList.add('on');
        };
    });
    document.getElementById('sbm').onclick = function() {
        var f = eq.querySelectorAll('.in,.ta'),
            good = true,
            n = document.getElementById('eqn');
        f.forEach(function(x) {
            var v = x.value.trim(),
                bad = !v || (x.placeholder === 'Your@company.com' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
            x.style.borderColor = bad ? '#d33' : '';
            if (bad) good = false;
        });
        if (!good) {
            n.textContent = 'Please fill in all the details with a valid work email.';
            n.style.color = '#d33';
            return;
        }
        n.textContent = 'We only use your details to respond to this enquiry';
        n.style.color = '';
        f.forEach(function(x) {
            x.value = '';
        });
        show('submitted');
    };
    var C = function(c, s, t) {
        return '<div class="' + c + '" style="' + s + '">' + t + '</div>';
    };
    var okSteps = [
        [404, '1', 'We review your enquiry.', 'Our team will review the details<br>you have provided.'],
        [900, '2', 'We get in touch .', 'We will contact you using your<br>preferred method.'],
        [1396, '3', 'Next steps.', 'We will discuss your requirements and<br>advise on the next steps.']
    ].map(function(s) {
        return C('sn', 'left:' + s[0] + 'px;top:1238px', s[1]) + C('sh', 'left:' + s[0] + 'px;top:1302px', s[2]) + C('sd', 'left:' + (s[0] + 2) + 'px;top:1365px;color:#7C97A8', s[3]);
    }).join('');
    ok.insertAdjacentHTML('beforeend',
        '<svg class="a" style="left:850px;top:237px" width="111" height="111" viewBox="0 0 111 111" fill="none"><circle cx="55.5" cy="55.5" r="55.5" fill="#234E70"/><path d="M27 58l20 20 38-40" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M92 30l8-9" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>' +
        C('lb', 'left:5px;width:1800px;text-align:center;top:385px;font-size:48px;line-height:64px;font-weight:600;color:#7a7a7a', 'Your enquiry has been submitted') +
        C('lb', 'left:5px;width:1800px;text-align:center;top:489px;font-size:20px;line-height:28px;color:#7C97A8', 'Thank you for getting in touch with STACKLY IT. We have received your enquiry<br>and our team will be in contact with you shortly.') +
        C('a', 'left:550px;top:659px;width:700px;height:149px;background:#E4F5F0;border-radius:14px;border:1px solid #BFE6DA', '') +
        C('lb', 'left:550px;width:642px;text-align:center;top:672px;font-size:22px;line-height:32px;color:#4B6E86', 'Your enquiry number') +
        C('lb', 'left:742px;top:731px;font-size:26px;line-height:36px;font-weight:700;color:#111', 'NX-2026-0187') +
        '<svg class="a cp" id="cpy" style="left:997px;top:737px" width="28" height="32" viewBox="0 0 28 32" fill="#234E70"><path d="M9 0h13l6 6v18H9z"/><path d="M0 6h5v20h14v5H0z"/></svg>' +
        C('lb', 'left:5px;width:1800px;text-align:center;top:945px;font-size:26px;line-height:36px;font-weight:700;color:#234E70', 'What happens next?') +
        C('lb', 'left:5px;width:1800px;text-align:center;top:1001px;font-size:30px;line-height:42px;color:#5F7F94', 'We review your enquiry') +
        C('lb', 'left:5px;width:1800px;text-align:center;top:1061px;font-size:20px;line-height:30px;color:#7C97A8', 'Our team will review the details you have provided.') + okSteps +
        C('a', 'left:450px;top:1560px;width:900px;height:110px;background:#E4F5F0;border-radius:14px;border:1px solid #BFE6DA', '') +
        '<svg class="a" style="left:484px;top:1587px" width="50" height="44" viewBox="0 0 50 44"><path d="M2 12h36v28H2z" fill="none" stroke="#234E70" stroke-width="4" stroke-linejoin="round"/><path d="M2 14l18 14 18-14M2 40l14-14M38 40L26 28" fill="none" stroke="#234E70" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="10" r="10" fill="#234E70"/><path d="M38 5v6" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="38" cy="15" r="1.6" fill="#fff"/></svg>' +
        C('lb', 'left:599px;top:1575px;font-size:22px;line-height:30px;font-weight:500;color:#4B6E86', 'When to expect contact') +
        C('lb', 'left:599px;top:1625px;font-size:16px;line-height:24px;font-weight:500;color:#5F7F94', 'You can expect to hear from us within 1–2 business days.'));
    document.getElementById('cpy').onclick = function() {
        try {
            navigator.clipboard.writeText('NX-2026-0187');
        } catch (_) {}
    };
    var mf = document.getElementById('mf');
    var mm = function(c, s, t) {
        return '<div class="' + c + '" style="' + s + '">' + t + '</div>';
    };
    var ar = '<svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#234E70" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10h19M13 2l8 8-8 8"/></svg>';
    var MI = ['<svg width="34" height="34" viewBox="0 0 34 34"><path d="M17 2l13 5v9c0 8-6 14-13 16C10 30 4 24 4 16V7z"/><path d="M17 2v30M4 14h26" stroke="#e0e0e0" stroke-width="2.5" fill="none"/></svg>', '<svg width="38" height="34" viewBox="0 0 34 34"><circle cx="17" cy="9" r="6"/><circle cx="7" cy="12" r="4.5"/><circle cx="27" cy="12" r="4.5"/><path d="M6 31v-8a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v8z"/></svg>', '<svg width="36" height="34" viewBox="0 0 34 34"><path d="M15 4a9 9 0 0 0-5 16v5h10v-5a9 9 0 0 0-5-16z"/><rect x="11" y="28" width="8" height="3" rx="1"/><circle cx="27" cy="7" r="5" fill="none" stroke="#234E70" stroke-width="3"/></svg>', '<svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15"/><path d="M12 24c0-8 4-12 12-12-1 7-5 11-12 12z" fill="none" stroke="#fff" stroke-width="2.5"/></svg>'];
    var feats2 = [
        ['Proven expertise', 1006, 1066],
        ['People focused', 1173, 1234],
        ['Scalable solutions', 1339, 1401],
        ['Lasting impact', 1509, 1569]
    ].map(function(f, i) {
        return mm('a', 'left:91px;top:' + (f[1] - 17) + 'px', MI[i]) + mm('m', 'left:116px;top:' + (f[2] - 16) + 'px;font-size:24px;line-height:32px;color:#5F7F94', f[0]);
    }).join('');
    var st2 = [
        ['1', 1881, 1828, 1845, 1894, 'Manage everyday IT', 193, 'Keep you system running smoothly with<br>reliable, proactive support.'],
        ['2', 2041, 1988, 2005, 2055, 'protect what matters', 173, 'Strengthen your security and reduce risk<br>across your business.'],
        ['3', 2201, 2148, 2165, 2216, 'Plan for what’s next', 161, 'Get the right advice and scalable solutions<br>to support your growth.']
    ].map(function(s) {
        return mm('m', 'left:31px;top:' + (s[1] - 40) + 'px;font-size:64px;line-height:80px;font-weight:700;color:#4B6E86', s[0]) + mm('a', 'left:126px;top:' + s[2] + 'px;width:1px;height:106px;background:linear-gradient(#8CD8BC,#234E70)', '') + mm('m', 'left:166px;top:' + (s[3] - 18) + 'px;font-size:28px;line-height:36px;color:#2F5B7D', s[5]) + mm('m', 'left:' + s[6] + 'px;top:' + (s[4] - 9) + 'px;font-size:14px;line-height:17px;color:#5F7F94', s[7]);
    }).join('');
    var fl2 = [
        ['Home', 2896, 'home'],
        ['Services', 2964, 'services'],
        ['Enquiry', 3031, 'enquiry'],
        ['Contact Us', 3098, 'enquiry']
    ].map(function(l) {
        return '<a class="m" href="#' + l[2] + '" style="left:35px;top:' + (l[1] - 20) + 'px;font-size:32px;line-height:40px;color:#5F7F94">' + l[0] + '</a>';
    }).join('');
    mf.innerHTML = '<a class="a mlogo" href="#home" aria-label="Stackly IT home"><img src="logo.png" alt="Stackly IT"></a>' +
        '<button class="a mb" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '<div class="menu-backdrop"></div><nav class="mmenu" aria-label="Mobile navigation"><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About Us</a><a href="#enquiry">Enquiry</a></nav>' +
        mm('m', 'left:0;width:491px;text-align:center;top:196px;font-size:18px;line-height:30px;color:#2F5B7D', 'IT SUPPORT FOR A STRONG TOMORROW') +
        mm('m', 'left:36px;top:247px;font-size:42px;line-height:54px;color:#234E70', 'Reliable IT for a more<br>productive business') +
        mm('m', 'left:36px;top:380px;font-size:16px;line-height:21px;color:#4B6E86', 'We help businesses stay secure, connected and<br>ready for what’s next with practical, people-focused<br>IT solutions') +
        '<a class="a" href="#services" style="left:180px;top:468px;width:276px;height:56px;background:linear-gradient(135deg,#234E70,#2F7F9E);border-radius:10px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:24px;font-weight:500;color:#fff">Explore our services ' + ar + '</a>' +
        mm('a ph', 'left:71px;top:557px;width:348px;height:302px', '') +
        mm('m', 'left:0;width:452px;text-align:center;top:900px;font-size:24px;line-height:32px;color:#5F7F94', 'OUR FEATURES') + feats2 +
        mm('m', 'left:0;width:491px;text-align:center;top:1670px;font-size:36px;line-height:52px;color:#2F5B7D', 'IT support that fits<br>the way you want') + st2 +
        mm('m', 'left:0;width:491px;text-align:center;top:2327px;font-size:30px;line-height:36px;color:#5F7F94', 'Ready to make IT simpler?') +
        mm('m', 'left:0;width:491px;text-align:center;top:2391px;font-size:20px;line-height:26px;color:#5F7F94', 'Let’s find the right IT support for your business') +
        '<a class="a" href="#enquiry" style="left:251px;top:2457px;width:209px;height:39px;background:linear-gradient(135deg,#8CD8BC,#5FCBA8);border-radius:10px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:24px;font-weight:600;color:#000">Start an enquiry ' + ar + '</a>' +
        '';
    var cur = 'home';
    var ms = document.getElementById('ms'),
        ma = document.getElementById('ma'),
        me = document.getElementById('me'),
        mo = document.getElementById('mo');
    var Mx = function(c, s, t) {
        return '<div class="' + c + '" style="' + s + '">' + t + '</div>';
    };
    var mhead = function() {
        return '<a class="a mlogo" href="#home" aria-label="Stackly IT home"><img src="logo.png" alt="Stackly IT"></a>' +
            '<button class="a mb" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
            '<div class="menu-backdrop"></div><nav class="mmenu" aria-label="Mobile navigation"><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About Us</a><a href="#enquiry">Enquiry</a></nav>';
    };
    var SOC=['<svg width="56" height="56" viewBox="0 0 72 72"><circle cx="36" cy="36" r="36" fill="#8CD8BC"/><g transform="translate(18 18) scale(1.5)" fill="#0B2239"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></g></svg>','<svg width="56" height="56" viewBox="0 0 72 72"><circle cx="36" cy="36" r="36" fill="#8CD8BC"/><rect x="19" y="19" width="34" height="34" rx="10" fill="none" stroke="#0B2239" stroke-width="4"/><circle cx="36" cy="36" r="8" fill="none" stroke="#0B2239" stroke-width="4"/><circle cx="46" cy="26" r="2.5" fill="#0B2239"/></svg>','<svg width="56" height="56" viewBox="0 0 72 72"><circle cx="36" cy="36" r="36" fill="#8CD8BC"/><text x="36" y="47" text-anchor="middle" font-family="DM Sans,Arial" font-weight="700" font-size="30" fill="#0B2239">in</text></svg>'],SOCI=0;
var mfoot = function(t) {
    var lk = function(l, c, h, x) {
        return '<a class="m fl" href="#' + h + '" style="left:' + x + 'px;top:' + (t + c) + 'px;font-size:16px;line-height:24px;color:#5F7F94">' + l + '</a>';
    };
    var so = function(x, s) {
        return s.replace('<svg', '<svg class="a so" style="left:' + x + 'px;top:' + (t + 18) + 'px"');
    };
    return '<div class="a mfbg" style="left:0;width:100%;bottom:0;top:' + (t - 25) + 'px"></div><img class="a mflogo" src="logo-light.png" alt="Stackly IT" style="left:28px;top:' + (t + 8) + 'px">' +
        so(270, SOC[0]) +
        so(333, SOC[1]) +
        so(396, SOC[2]) +
        Mx('m', 'left:28px;top:' + (t + 94) + 'px;font-size:17px;line-height:24px;color:#4B6E86', 'Quick links') +
        lk('Home', 127, 'home', 28) + lk('Services', 127, 'services', 152) + lk('Enquiry', 162, 'enquiry', 28) + lk('Contact Us', 162, 'enquiry', 152) +
        Mx('m', 'left:28px;top:' + (t + 203) + 'px;font-size:16px;line-height:24px;color:#5F7F94', 'Your email address') +
        '<input class="in memail" style="left:28px;top:' + (t + 232) + 'px;width:435px;height:48px;padding:0 16px;font-size:16px;background:#f5f5f5" placeholder="Enter Your Email">' +
        '<button class="a msub" style="left:28px;top:' + (t + 294) + 'px;width:435px;height:46px;font-size:16px">Subscribe</button>' +
        Mx('m', 'left:28px;width:435px;text-align:left;top:' + (t + 365) + 'px;font-size:13px;line-height:20px;color:#4B6E86', '<span>Privacy</span><span style="margin-left:14px">Terms</span><span style="margin-left:14px">Cookies</span>') +
        Mx('m', 'left:28px;top:' + (t + 400) + 'px;font-size:12px;line-height:18px;color:#4B6E86', '\u00a9 2026 STACKLY IT. All rights reserved.');
};
mf.insertAdjacentHTML('beforeend', mfoot(2634));
mf.style.height = '3104px';
    /* newsletter button (all mobile pages) */
    document.addEventListener('click', function(e) {
        var b = e.target.closest && e.target.closest('.msub');
        if (!b) return;
        var i = b.parentNode.querySelector('.memail'),
            ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value.trim());
        b.textContent = ok ? 'Subscribed \u2713' : 'Enter a valid email';
        i.style.borderColor = ok ? '' : '#d33';
        if (ok) i.value = '';
        setTimeout(function() {
            b.textContent = 'Subscribe';
        }, 2200);
    });
    var cen = 'left:0;width:491px;text-align:center;';
    /* ---- Services (mobile) ---- */
    var SI = ['<svg width="38" height="34" viewBox="0 0 38 34" fill="none" stroke="#234E70" stroke-width="3" stroke-linecap="round"><rect x="2" y="2" width="28" height="20" rx="2"/><path d="M10 28h12M26 32l8-10"/></svg>', '<svg width="38" height="36" viewBox="0 0 34 34"><path d="M13 2l12 10v9H1V12z"/><path d="M20 16h13v8c0 5-4 8-6.5 9-2.5-1-6.5-4-6.5-9z" stroke="#fff" stroke-width="2"/></svg>', '<svg width="42" height="30" viewBox="0 0 58 40"><path d="M14 38A12 12 0 0 1 12 14a15 15 0 0 1 28-3 14 14 0 0 1 6 27z"/></svg>', '<svg width="38" height="34" viewBox="0 0 34 34"><circle cx="17" cy="9" r="6"/><circle cx="7" cy="12" r="4.5"/><circle cx="27" cy="12" r="4.5"/><path d="M6 31v-8a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v8z"/></svg>'];
    var SC = [
        ['Business IT Support', 'Reliable day-to-day support that helps your<br>systems stay available.', ['Device monitoring', 'Routine updates'], 'Teams needing reliable<br>everyday support', 'Ongoing monthly<br>service'],
        ['Security Protection', 'Practical protection for your data, people,<br>and business operations.', ['Threat monitoring', 'Staff awareness'], 'Businesses protecting data<br>and devices', 'Managed security<br>support'],
        ['Cloud Solutions', 'Modern, scalable cloud services to<br>enable growth.', ['Cloud migration', 'Infrastructure management'], 'Businesses looking to<br>improve agility', 'Project-based or<br>managed service'],
        ['IT Consulting', 'Strategic advice to help you make<br>the right technology decisions.', ['IT strategy and planning', 'Technology assessments'], 'Organisations planning<br>growth or change', 'Consultative<br>projects']
    ].map(function(c, k) {
        var v = k === 1,
            P = v ? {
                h: 247,
                ic: 11,
                ix: 35,
                tc: 29,
                ts: 24,
                dx: 108,
                d1: 80,
                d2: 101,
                c1: 145,
                b1: 186,
                b2: 227,
                c2: 160,
                t2: 202,
                c3: 147,
                t3: 213,
                x3: 335
            } : {
                h: k ? 242 : 242,
                ic: 18,
                ix: 31,
                tc: 26,
                ts: 22,
                dx: 98,
                d1: 74,
                d2: 95,
                c1: 140,
                b1: 181,
                b2: 222,
                c2: 153,
                t2: 195,
                c3: 142,
                t3: 208,
                x3: 343
            };
        var T = function(c, l, s, t) {
            return Mx('m', 'left:' + l + 'px;top:' + c + 'px;' + s, t);
        };
        return '<div class="a" style="left:11px;top:' + (356 + 291 * k) + 'px;width:468px;height:' + P.h + 'px;background:#fff">' + Mx('a', 'left:' + P.ix + 'px;top:' + P.ic + 'px', SI[k]) + T(P.tc - 16, 95, 'font-size:' + P.ts + 'px;line-height:32px;color:#4B6E86', c[0]) + T(P.d1 - 10, P.dx, 'font-size:17px;line-height:21px;font-weight:400;color:#5F7F94', c[1]) +
            T(P.c1 - 10, 11, 'font-size:14px;line-height:20px;color:#4B6E86', 'What it includes') + T(P.b1 - 8, 11, 'font-size:11px;line-height:16px;color:#4B6E86', '• ' + c[2][0]) + T(P.b2 - 8, 11, 'font-size:11px;line-height:16px;color:#4B6E86', '• ' + c[2][1]) +
            T(P.c2 - 10, 165, 'font-size:15px;line-height:20px;color:#5F7F94', 'Best for') + T(P.t2 - 8, 170, 'font-size:11px;line-height:15px;color:#5F7F94', c[3]) +
            T(P.c3 - 10, 339, 'font-size:13px;line-height:20px;color:#4B6E86', 'Delivery style') + T(P.t3 - 8, P.x3 + 4, 'font-size:13px;line-height:16px;color:#5F7F94', c[4]) + '</div>';
    }).join('');
    ms.style.height = '2084px';
    ms.innerHTML = mhead() + Mx('m', cen + 'top:152px;font-size:32px;line-height:48px;font-weight:600;color:#234E70', 'OUR SERVICES') + Mx('m', cen + 'top:219px;font-size:26px;line-height:36px;color:#16405F', 'Reliable IT services for&nbsp; business') + Mx('m', cen + 'top:278px;font-size:12px;line-height:18px;font-weight:500;color:#4B6E86', 'Explore our core services to find the right support for your business needs.') + SC + mfoot(1614);
    /* ---- About (mobile) ---- */
    ma.style.height = '2806px';
    ma.innerHTML = mhead() + Mx('m', cen + 'top:156px;font-size:30px;line-height:36px;color:#16405F', 'About Us') +
        Mx('m', 'left:27px;top:238px;font-size:28px;line-height:36px;color:#16405F', 'Our Vision') +
        Mx('m', 'left:9px;top:288px;font-size:22px;line-height:28.75px;color:#4B6E86', 'Our vision is to make technology simple,<br>secure, and reliable for growth business.<br>&nbsp;We want every team to work with<br>confidence, reduce everyday IT challenges<br>and use the right digital tools to stay<br>connected, protect important information<br>improve productivity, and build a stronger,<br>more successful future.<br>We strive to be technology partner<br>businesses can depend on a every stage.') +
        Mx('m', 'left:27px;top:601px;font-size:28px;line-height:36px;color:#16405F', 'Our Mission') +
        Mx('m', 'left:24px;top:652px;font-size:22px;line-height:28.75px;color:#4B6E86', 'Our mission is to understand each client<br>unique needs and provide practical<br>practical IT support, strong cyber<br>security, flexible cloud solutions, and<br>clear technology advice. Through<br>responsive service, honest commucate,<br>and long-term partnership, we help<br>businesses keep their systems running<br>smoothly, protect their people and<br>data, and grow with confidence.<br>Our focus is always on delivering real<br>value through dependable technology<br>services.') +
        Mx('m', cen + 'top:1092px;font-size:30px;line-height:40px;color:#16405F', 'Our Achievements') + [
            ['10+', 'Years of combined IT experience'],
            ['500+', 'Support requests successfully handled'],
            ['98%', 'Client satisfaction focus'],
            ['24/7', 'Monitoring and support availability'],
            ['50+', 'Businesses supported with IT solutions']
        ].map(function(b, i) {
            return '<div class="a" style="left:30px;top:' + (1160 + 170 * i) + 'px;width:431px;height:150px;background:#fff;border:1.5px solid #234E70;text-align:center">' + Mx('m', 'left:0;width:428px;top:26px;font-size:38px;line-height:46px;color:#16405F', b[0]) + Mx('m', 'left:0;width:428px;top:86px;font-size:19px;line-height:28px;color:#5F7F94', b[1]) + '</div>';
        }).join('') +
        Mx('m', cen + 'top:2050px;font-size:26px;line-height:36px;color:#0E2A44', 'Built on trust, strengthened<br>by practical technology.') +
        '<a class="a" href="#enquiry" style="left:95px;top:2160px;width:300px;height:56px;background:linear-gradient(135deg,#8CD8BC,#5FCBA8);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:600;color:#000">Start journey with us</a>' + mfoot(2336);
    /* ---- Enquiry (mobile) ---- */
    me.style.height = '2730px';
    var QI = function(t, p) {
        return '<input class="in" style="left:19px;top:' + t + 'px;width:453px;height:61px;font-size:18px" placeholder="' + p + '">';
    };
    var QL = function(c, t) {
        return Mx('m', 'left:19px;top:' + (c - 14) + 'px;font-size:20px;line-height:28px;color:#5F7F94', t);
    };
    var QS = [
        ['We review your enquiry.', 'Our team will look at your requirements<br>and any relevant details.'],
        ['We get in touch .', 'We’ll contact you within 1 business day<br>to discuss your needs.'],
        ['We recommand next steps.', 'We’ll suggest the right solution and<br>outline the next steps.']
    ].map(function(s, i) {
        var c = 1650 + 210 * i;
        return Mx('a', 'left:210px;top:' + (c - 35) + 'px;width:70px;height:70px;border:2px solid #234E70;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:600;color:#000', String(i + 1)) + Mx('m', cen + 'top:' + (c + 55) + 'px;font-size:24px;line-height:34px;color:#4B6E86', s[0]) + Mx('m', cen + 'top:' + (c + 100) + 'px;font-size:17px;line-height:24px;color:#5F7F94', s[1]);
    }).join('');
    me.innerHTML = mhead() + Mx('m', cen + 'top:175px;font-size:30px;line-height:36px;font-weight:700;color:#16405F', 'ENQUIRY') + Mx('a', 'left:186px;top:228px;width:125px;height:2px;background:#444', '') +
        QL(408, 'Full Name') + QI(451, 'Enter Your Full Name') + QL(558, 'Work email') + QI(602, 'Your@company.com') + QL(734, 'Company Name') + QI(777, 'Enter Your Company Name') + QL(908, 'Phone Number') + QI(952, 'e.g. +1 234 567 8900') +
        QL(1095, 'Tell us about requirements') + '<textarea class="ta" style="left:19px;top:1130px;width:453px;height:137px;padding:20px;font-size:16px" placeholder="Please share your requirements, current challenges or any specific information"></textarea>' +
        '<button class="sbm" id="msb" style="left:19px;top:1292px;width:453px;height:60px;font-size:22px">Submit enquiry</button>' +
        Mx('m', cen + 'top:1378px;font-size:16px;line-height:24px;color:#7C97A8', '<span id="mqn">We only use your details to respond to this enquiry</span>') +
        '<svg class="a" style="left:40px;top:1462px" width="38" height="29" viewBox="0 0 49 38" fill="none" stroke="#234E70" stroke-width="4.5" stroke-linejoin="round"><rect x="2.5" y="2.5" width="44" height="33"/><path d="M2.5 4l22 17L46.5 4"/></svg>' + Mx('m', 'left:92px;top:1460px;font-size:17px;line-height:32px;color:#4B6E86', 'Our tem will reply within 1 business day.') +
        Mx('m', cen + 'top:1552px;font-size:26px;line-height:36px;color:#4B6E86', 'What happens next?') + QS + mfoot(2260);
    /* ---- Submitted (mobile) ---- */
    mo.style.height = '2130px';
    var OS = [
        ['We review your enquiry.', 'Our team will review the details<br>you have provided.'],
        ['We get in touch .', 'We will contact you using your<br>preferred method.'],
        ['Next steps.', 'We will discuss your requirements and<br>advise on the next steps.']
    ].map(function(s, i) {
        var c = 807 + 230 * i;
        return Mx('a', 'left:210px;top:' + (c - 40) + 'px;width:80px;height:80px;border:2px solid #234E70;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:600;color:#000', String(i + 1)) + Mx('m', cen + 'top:' + (c + 70) + 'px;font-size:26px;line-height:36px;color:#4B6E86', s[0]) + Mx('m', cen + 'top:' + (c + 119) + 'px;font-size:17px;line-height:25px;color:#7C97A8', s[1]);
    }).join('');
    mo.innerHTML = mhead() + '<svg class="a" style="left:223px;top:198px" width="50" height="50" viewBox="0 0 111 111" fill="none"><circle cx="55.5" cy="55.5" r="55.5" fill="#234E70"/><path d="M27 58l20 20 38-40" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M92 30l8-9" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>' +
        Mx('m', 'left:2px;width:491px;text-align:center;top:279px;font-size:22px;line-height:28px;color:#2F5B7D', 'Your enquiry has been submitted.') +
        Mx('m', 'left:2px;width:491px;text-align:center;top:331px;font-size:13px;line-height:18px;color:#4B6E86', 'Thanks you for getting in touch with STACKLY IT. We have<br>received your enquiry and our team will be in<br>contract with you shortly.') +
        Mx('a', 'left:73px;top:460px;width:344px;height:113px;background:#E4F5F0;border-radius:14px;border:1px solid #BFE6DA', '') + Mx('m', 'left:73px;width:320px;text-align:center;top:474px;font-size:20px;line-height:28px;color:#4B6E86', 'Your enquiry number') + Mx('m', 'left:125px;top:525px;font-size:24px;line-height:32px;font-weight:700;color:#111', 'NX-2026-0187') +
        '<svg class="a cp" id="mcpy" style="left:316px;top:530px" width="20" height="23" viewBox="0 0 28 32" fill="#234E70"><path d="M9 0h13l6 6v18H9z"/><path d="M0 6h5v20h14v5H0z"/></svg>' +
        Mx('m', 'left:2px;width:491px;text-align:center;top:631px;font-size:26px;line-height:36px;color:#5F7F94', 'We review your enquiry') + Mx('m', 'left:2px;width:491px;text-align:center;top:690px;font-size:16px;line-height:24px;color:#7C97A8', 'Our team will review the details you have provided.') + OS +
        Mx('a', 'left:30px;top:1500px;width:431px;height:100px;background:#E4F5F0;border-radius:14px;border:1px solid #BFE6DA', '') + '<svg class="a" style="left:50px;top:1527px" width="46" height="40" viewBox="0 0 50 44"><path d="M2 12h36v28H2z" fill="none" stroke="#234E70" stroke-width="4" stroke-linejoin="round"/><path d="M2 14l18 14 18-14M2 40l14-14M38 40L26 28" fill="none" stroke="#234E70" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="10" r="10"/><path d="M38 5v6" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="38" cy="15" r="1.6" fill="#fff"/></svg>' +
        Mx('m', 'left:115px;top:1514px;font-size:20px;line-height:28px;font-weight:500;color:#4B6E86', 'When to expect contact') + Mx('m', 'left:115px;top:1552px;font-size:13px;line-height:20px;font-weight:500;color:#5F7F94', 'You can expect to hear from us within 1–2 business days.') + mfoot(1660);
    /* mobile behaviour */
    [mf, ms, ma, me, mo].forEach(function(f) {
        var button = f.querySelector('.mb'),
            backdrop = f.querySelector('.menu-backdrop');
        button.addEventListener('click', function() {
            setMobileMenu(f, button.getAttribute('aria-expanded') !== 'true');
        });
        backdrop.addEventListener('click', function() {
            setMobileMenu(f, false);
        });
    });
    document.getElementById('msb').onclick = function() {
        var f = me.querySelectorAll('.in,.ta'),
            good = true,
            n = document.getElementById('mqn');
        f.forEach(function(x) {
            var v = x.value.trim(),
                bad = !v || (x.placeholder === 'Your@company.com' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
            x.style.borderColor = bad ? '#d33' : '';
            if (bad) good = false;
        });
        if (!good) {
            n.textContent = 'Please fill in all the details with a valid work email.';
            n.style.color = '#d33';
            return;
        }
        n.textContent = 'We only use your details to respond to this enquiry';
        n.style.color = '';
        f.forEach(function(x) {
            x.value = '';
        });
        show('submitted');
    };
    document.getElementById('mcpy').onclick = function() {
        try {
            navigator.clipboard.writeText('NX-2026-0187');
        } catch (_) {}
    };
    var mob = {
        home: mf,
        services: ms,
        about: ma,
        enquiry: me,
        submitted: mo
    };
    var all = [fr, sv, ab, eq, ok, mf, ms, ma, me, mo];
    var V = {
        home: fr,
        services: sv,
        about: ab,
        enquiry: eq,
        submitted: ok
    };

    [mf, ms, ma, me, mo].forEach(function(f) {
        f.classList.add('mobile-page');
    });

    function setMobileMenu(root, open) {
        var button = root.querySelector('.mb');
        root.classList.toggle('menu-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    }

    function closeMobileMenus() {
        [mf, ms, ma, me, mo].forEach(function(f) {
            setMobileMenu(f, false);
        });
    }

    function show(v, keep) {
        if (!V[v]) v = 'home';
        cur = v;
        var t = window.innerWidth <= 1024 ? mob[v] : V[v];
        closeMobileMenus();
        [mf, ms, ma, me, mo].forEach(function(f) {
            f.querySelectorAll('.mmenu a').forEach(function(a) {
                if (a.getAttribute('href') === '#' + v) {
                    a.setAttribute('aria-current', 'page');
                } else {
                    a.removeAttribute('aria-current');
                }
            });
        });
        all.forEach(function(f) {
            f.style.display = f === t ? 'block' : 'none';
        });
        t.classList.remove('page-transition');
        void t.offsetWidth;
        t.classList.add('page-transition');
        t.addEventListener('animationend', function() {
            t.classList.remove('page-transition');
        }, { once: true });
        if (!keep) window.scrollTo(0, 0);
    }
    window.addEventListener('resize', function() {
        show(cur, true);
    });
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') return;
        closeMobileMenus();
    });
    document.addEventListener('click', function(e) {
        if (e.target.closest && e.target.closest('.mmenu a')) closeMobileMenus();
        var a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        var h = a.getAttribute('href');
        if (['#home', '#services', '#about', '#enquiry'].indexOf(h) > -1) {
            e.preventDefault();
            show(h.slice(1));
            try {
                history.replaceState(null, '', h)
            } catch (_) {}
        }
    });
    window.addEventListener('hashchange', function() {
        show(location.hash.slice(1));
    });
    show(location.hash.slice(1));

    function z() {
        var k = Math.min(1, window.innerWidth / 1800);
        fr.style.zoom = k;
        sv.style.zoom = k;
        ab.style.zoom = k;
        eq.style.zoom = k;
        ok.style.zoom = k;
        mf.style.zoom = Math.min(window.innerWidth / 491, 1.4);
        [ms, ma, me, mo].forEach(function(f) {
            f.style.zoom = mf.style.zoom;
        });
    }
    z();
    window.addEventListener('resize', z);
})();