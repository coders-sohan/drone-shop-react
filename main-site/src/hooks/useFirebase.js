import {
	createUserWithEmailAndPassword,
	getAuth,
	getIdToken,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// register user
	const registerUser = (email, password, usersName, navigate) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				// start update users name
				const newUser = {
					email,
					displayName: usersName,
				};
				setUser(newUser);
				// save user to the mongodb database
				saveUser(email, usersName, "POST");
				// send name to firebase after account creation
				updateProfile(auth.currentUser, {
					displayName: usersName,
					photoURL:
						"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				})
					.then(() => {})
					.catch((error) => {
						setError(error.message);
					});
				navigate("/");
				// end update users name
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// login user
	const loginUser = (email, password, location, navigate) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				const destination = location?.state?.from || "/";
				navigate(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// Sign In with google
	const signInWithGoogle = (location, navigate) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				// save to database
				saveUser(user.email, user.displayName, "PUT");
				// const user = result.user;
				const destination = location?.state?.from || "/";
				navigate(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// reset password
	const resetPassword = (email, location, navigate) => {
		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				// Password reset email sent!
				// ..
				const destination = location?.state?.from || "/";
				navigate(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// observe user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				// User is signed out
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	// get admin from database for authentication
	useEffect(() => {
		fetch(`http://localhost:5000/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user?.email]);

	// logout user
	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setError("");
			})
			.catch((error) => {
				// An error happened.
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch(`http://localhost:5000/users`, {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};

	return {
		user,
		isLoading,
		error,
		admin,
		token,
		registerUser,
		loginUser,
		signInWithGoogle,
		resetPassword,
		logout,
	};
};

export default useFirebase;
