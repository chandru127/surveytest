"use strict";
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
exports.AUTH_ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXhDLG1CQUFXLEdBQVc7SUFDL0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtDQUNqRCxDQUFDIiwiZmlsZSI6ImF1dGgvYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gXCIuL2xvZ291dC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IEFVVEhfUk9VVEVTOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIHJlZGlyZWN0VG86ICdzaWdudXAnIH0sXG4gICAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50IH0sXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
