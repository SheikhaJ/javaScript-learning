var userValue;
var balanceValue = 5000;
var amount;
console.log("error");
userValue = Number(prompt("please enter your option: (1-withdraw, 2-deposite, 3-Transfer)"));

switch(userValue){
    case 1:
        amount = Number(prompt("Enter the amount to withdraw:"));

    if (amount > balanceValue) {
      alert("Invalide");
    } 
    else {
      balanceValue -= amount;
      alert("Withdrawal successful.");
      alert("Updated balance:", balanceValue);
    }
    break;

    case 2:
        amount = Number(prompt("Enter the amount to deposit:"));

        if (amount <= 0) {
          alert("Invalid ");
        } 
        else {
          balanceValue += amount;
          alert("Deposit successful.");
          alert("Updated balance:", balanceValue);
        }
        break;
    case 3:
        amount = Number(prompt("Enter the amount to transfer:"));
        if(amount >balanceValue){
            alert("Invalid")
        }
        else{
            balanceValue -= amount;
        alert("Transfer successful.");
        alert("Updated balance:", balanceValue);
        }
        break;

      default:
        alert("Invalid try again");
        break;  

}
