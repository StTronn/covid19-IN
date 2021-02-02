import React from "react";

import LoginForm from "./LoginForm";
import RightCointainer from "./RightCointainer";


const LoginBanner = () => {
    return(
        <div className="cointainer">
			<LoginForm />
			<RightCointainer />
		</div>
    )
}

export default LoginBanner;
