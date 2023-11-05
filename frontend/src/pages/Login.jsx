import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";
import { jwtDecode } from "jwt-decode";
import useUser from "../hooks/useUser";

const Login = () => {
	const navigate = useNavigate();
	const { setUser } = useUser();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		const token = await login(email, password);

		if (token) {
			localStorage.setItem("token", token);
			const user = jwtDecode(token);
			setUser(user);

			navigate("/");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div className=" h-screen">
			<div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-around px-4">
				{/* <!-- Left column container with background--> */}
				<div className="hidden lg:flex mb-12 md:mb-0 w-4/12">
					<img
						src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
						className="w-full"
						alt="Phone image"
					/>
				</div>

				{/* <!-- Right column container with form --> */}
				<div className="w-full lg:w-5/12 border border-black-2 rounded-lg shadow-lg">
					<form className="p-5" onSubmit={handleSubmit}>
						{/* <!-- Email input --> */}
						<h1 className="mb-4 text-3xl flex items-center justify-center font-bold text-gray-900">
							<span>Log in</span>
						</h1>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5 "
								placeholder="john.doe@company.com"
								required
							></input>
						</div>

						{/* <!-- Password input --> */}
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5   "
								placeholder="•••••••••"
								required
							></input>
						</div>

						{/* <!-- Remember me checkbox --> */}
						<div className="mb-4 flex ">
							{/* <!-- Forgot password link --> */}
							<span
								onClick={() => navigate("/forgot-password/verify-number")}
								className="text-primary cursor-pointer transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
							>
								Forgot password?
							</span>
						</div>

						{/* <!-- Submit button --> */}
						<button
							type="submit"
							className="inline-block w-full rounded bg-sky-900 text-white px-7 mb-4 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							Log in
						</button>
						<div>
							<p>
								Not Registered?
								<span
									onClick={() => navigate("/sign-up")}
									className="font-bold px-1 cursor-pointer"
								>
									Sign up
								</span>
								Here
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
