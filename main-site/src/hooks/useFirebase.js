import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	const auth = getAuth();

	// register user
	const registerUser = (email, password, location, navigate) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				const destination = location?.state?.from || "/";
				navigate(destination);
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
			} else {
				// User is signed out
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

	// logout user
	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	return {
		user,
		isLoading,
		error,
		registerUser,
		loginUser,
		resetPassword,
		logout,
	};
};

export default useFirebase;
