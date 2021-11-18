function calcTotal(debts) {
    let som = 0;
    debts.forEach(debt => som += Number(debt.amount));
    return som;
}

export {
    calcTotal
}