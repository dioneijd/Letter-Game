import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GameManagerProviderCtx } from "./contexts/GameManagerContext";
import { CountdownProviderCtx } from "./contexts/CountdownContext";
import { GameSettingsProviderCtx } from "./contexts/GameSettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GameManagerProviderCtx>
			<GameSettingsProviderCtx>
				<CountdownProviderCtx>
					<App />
				</CountdownProviderCtx>
			</GameSettingsProviderCtx>
		</GameManagerProviderCtx>
	</React.StrictMode>,
);
