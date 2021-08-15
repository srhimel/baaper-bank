document.getElementById('userSubmit').addEventListener('click', function () {
    const userEmail = document.getElementById('userEmail');
    const userPass = document.getElementById('userPass');
    if (userEmail.value == 'sontan@abbu.com' && userPass.value == 'valoabbu') {
        window.location.href = 'banking.html';
    }
    else {
        document.getElementById('error').innerText = 'Ulta palta password dile mair hobe';
    }
});

