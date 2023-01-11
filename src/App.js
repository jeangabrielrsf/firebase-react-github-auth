import { useContext } from "react";
import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./contexts/AuthContext";
import ProfileCard from "./components/ProfileCard";

const App = () => {
	const { login, isPending } = useLogin();
	const { user, authIsReady } = useContext(AuthContext);
	console.log(user);

	return authIsReady ? (
		<div className="App">
			{user ? (
				<ProfileCard user={user} />
			) : (
				<button className="btn" onClick={login}>
					{isPending ? "Loading..." : "Login With Github"}
				</button>
			)}
		</div>
	) : (
		<h1>Making your auth ready, please wait a moment...</h1>
	);
};

export default App;
