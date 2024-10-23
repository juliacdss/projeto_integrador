    window.addEventListener('beforeunload', function() {
        document.getElementById('loading').style.display = 'flex';
    });

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loading').style.display = 'none';
        }, 500); 
    });