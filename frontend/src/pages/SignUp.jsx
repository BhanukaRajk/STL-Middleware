import { useNavigate } from "react-router-dom";
import { signup } from "../api/authApi";

const SignUp = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const firstName = e.target["first-name"].value;
		const lastName = e.target["last-name"].value;
		const email = e.target.email.value;
		const phoneNumber = e.target["phone-number"].value;
		const password = e.target.password.value;
		const confirmPassword = e.target["confirm-password"].value;

		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		const res = await signup(firstName, lastName, phoneNumber, email, password);

		if (res) {
			navigate("/login");
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
						<h1 className="mb-4 flex items-center justify-center text-3xl font-bold text-gray-900">
							<span>Sign Up</span>
						</h1>
						<div className="grid grid-cols-2 gap-x-4 mb-4">
							<div>
								<label
									htmlFor="first-name"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									First name
								</label>
								<input
									type="text"
									id="first-name"
									name="first-name"
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none w-full p-2.5"
									placeholder="First Name"
									required
								></input>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Last name
								</label>
								<input
									type="text"
									id="last-name"
									name="last-name"
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5"
									placeholder="Last Name"
									required
								></input>
							</div>
						</div>
						<div className=" grid grid-cols-2 gap-x-4 mb-4">
							<div>
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
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5"
									placeholder="john.doe@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="phone-number"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Phone Number
								</label>
								<input
									type="phone"
									id="phone-number"
									name="phone-number"
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5"
									placeholder="071-xxxxxxx"
									required
								></input>
							</div>
						</div>
						<div className=" grid grid-cols-2 gap-x-4 mb-4">
							<div className="mb-4">
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
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5  "
									placeholder="•••••••••"
									required
								></input>
							</div>

							<div className="mb-4">
								<label
									htmlFor="confirm-password"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Confirm Password
								</label>
								<input
									type="password"
									id="confirm-password"
									name="confirm-password"
									className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5  "
									placeholder="•••••••••"
									required
								></input>
							</div>
						</div>

						{/* <!-- Submit button --> */}
						<button
							type="submit"
							className="inline-block w-full rounded bg-sky-900 text-white px-7 pb-2.5 pt-3 mb-4 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							Sign Up
						</button>
						<div>
							<p>
								<span
									onClick={() => navigate("/login")}
									className="font-bold px-1 cursor-pointer"
								>
									Log In
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

export default SignUp;
