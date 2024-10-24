window.addEventListener('beforeunload', function() {
    document.getElementById('loading').style.display = 'flex';
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 500); 
});

window.addEventListener('popstate', function() {
    document.getElementById('loading').style.display = 'flex';

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loading').style.display = 'none';
        }, 500); 
    }, { once: true });
});
