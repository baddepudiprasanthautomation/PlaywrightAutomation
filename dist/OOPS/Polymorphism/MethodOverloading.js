"use strict";
class Login {
    login(username, password) {
        if (username && password) {
            console.log("login with username and password");
        }
        else if (username) {
            console.log("login with password");
        }
        else {
            console.log("login without username and password");
        }
    }
}
const login = new Login();
//login.login("test");
login.login("test", "123");
//# sourceMappingURL=MethodOverloading.js.map