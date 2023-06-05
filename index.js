    let num1 = parseFloat(prompt("Введіть перше число:"));
    let operator = prompt("Введіть операцію (+, -, *, / або ^):");
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Введено невірні числа. Будь ласка, спробуйте ще раз.");
    }

    switch (operator) {
        case "+":
        case "plus":
            result = num1 + num2;
            break;
        case "-":
        case "minus":
            result = num1 - num2;
            break;
        case "*":
        case "multiply":
            result = num1 * num2;
            break;
        case "/":
        case "divide":
            result = num1 / num2;
            break;
        case "^":
        case "power":
            result = Math.pow(num1, num2);
            break;
        default:
            console.log("Введено невірну операцію. Будь ласка, спробуйте ще раз.");

    }

    console.log("Результат: " + result);


    // ============================================

    // const correctLogin = "login";
    // const correctPassword = "password";
    // let enteredLogin = prompt("Введіть логін:");

    // if (enteredLogin !== correctLogin) {
    //     console.log("Невірний логін. Авторизація неуспішна.");
    // } else {
    //     let enteredPassword = prompt("Введіть пароль:");

    //     if (enteredPassword === correctPassword) {
    //         console.log("Ви успішно увійшли в систему!");
    //     } else {
    //         console.log("Невірний пароль. Авторизація неуспішна.");
    //     }
    // }