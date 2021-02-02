import React from "react";
import TextLoop from "react-text-loop";

const RightCointainer = () => {
	return (
		<div className="imgBackground">
			<div className="wrapper">
				<span className="prim">
					<TextLoop interval={2000}>
						<span>Stocks </span>
						<span>Gold</span>
						<span>Mutal Funds</span>
					</TextLoop>
					<br />
					<span className="sec">At Your Fingertips.</span>
				</span>
			</div>
		</div>
	);
};

export default RightCointainer;
