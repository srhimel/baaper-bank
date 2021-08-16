function givenInput(fromId) {
    const inputValue = document.getElementById(fromId);
    const currValue = parseFloat(inputValue.value);
    inputValue.value = '';
    return currValue;
}
function totalField(totalId, givenValue) {
    const totalAmount = document.getElementById(totalId);
    const preAmount = parseFloat(totalAmount.innerText);
    totalAmount.innerText = preAmount + givenValue;
}
function balaance() {
    const balance = document.getElementById('balance');
    const preBal = parseFloat(balance.innerText);
    return preBal;
}
function updateBalance(currBalance, isAdd) {
    const balance = document.getElementById('balance');
    const prebal = balaance();
    if (isAdd == true) {
        balance.innerText = prebal + currBalance;
    }
    else {
        balance.innerText = prebal - currBalance;
    }
}
document.getElementById('depoSubmit').addEventListener('click', function () {
    const currDep = givenInput('depoInput');
    if (currDep > 0) {
        totalField('depoAmount', currDep);
        updateBalance(currDep, true);
    }
});
document.getElementById('witSubmit').addEventListener('click', function () {
    const currWit = givenInput('witInput');
    const currbalance = balance();
    if (currWit > 0 && currWit <= currbalance) {
        totalField('withdraw', currWit);
        updateBalance(currWit, false);
    }
});