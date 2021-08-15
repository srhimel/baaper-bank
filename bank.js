document.getElementById('depoSubmit').addEventListener('click', function () {
    const depoAmount = document.getElementById('depoAmount');
    const preDepo = parseFloat(depoAmount.innerText);
    const depoInput = document.getElementById('depoInput');
    const currDep = parseFloat(depoInput.value);
    const balance = document.getElementById('balance');
    const preBal = parseFloat(balance.innerText);
    if (currDep > 0 && typeof currDep == 'number') {
        depoAmount.innerText = preDepo + currDep;
        balance.innerText = preBal + currDep;
    }
    depoInput.value = '';
});
document.getElementById('witSubmit').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw');
    const preWit = parseFloat(withdraw.innerText);
    const witInput = document.getElementById('witInput');
    const currWit = parseFloat(witInput.value);
    const balance = document.getElementById('balance');
    const preBal = parseFloat(balance.innerText);
    if (currWit > 0 && typeof currWit == 'number' && preBal >= currWit) {
        withdraw.innerText = preWit + currWit;
        balance.innerText = preBal - currWit;
    }
    witInput.value = '';
});