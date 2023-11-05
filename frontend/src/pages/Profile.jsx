import { useEffect, useState } from 'react';
import { updateFirstName, updatePassword, comparePassword, updateLastName, updateEmail, getCustomer } from '../api/customersApi';


const Profile = () => {

    const userId = '65479805cb937dde3644f5ef';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');

    useEffect(() => {
        getCustomer(userId).then((response) => {
            // console.log(response);
            setFirstName(response.firstName);
            setLastName(response.lastName);
            setEmail(response.email);
            setPassword(response.password);
            setCurrentPassword(response.password);
        }).catch((error) => {
            console.error(error);
        })
    }, []);


    const handleSubmitFirstName = async (e) => {
        e.preventDefault();

        if (firstName.length < 3) {
            setFirstNameError('First name must be at least 3 characters long');
            return;
        }

        await updateFirstName(userId, firstName).then((response) => {

            setFirstNameError(response);

        }
        ).catch((error) => {
            console.error(error);
            setFirstNameError('Error updating first name');
        })
    };

    const handleSubmitLastName = async (e) => {
        e.preventDefault();

        if (lastName.length < 3) {
            setLastNameError('Last name must be at least 3 characters long');
            return;
        }


        await updateLastName(userId, lastName).then((response) => {

            setLastNameError(response);

        }
        ).catch((error) => {
            console.error(error);
            setLastNameError('Error updating last name');
        })
    };


    const handleSubmitEmail = async (e) => {
        e.preventDefault();

        if (email.length < 3) {
            setEmailError('Email must be at least 3 characters long');
            return;
        }

        if (!email.includes('@') || !email.includes('.') || email.includes(' ') || !email.includes('com')) {
            setEmailError('Invalid email');
            return;
        }

        if (password.length < 3) {
            setEmailError('Password must be at least 3 characters long');
            return;
        }

        await comparePassword(userId, password).then(async (response) => {
            // console.log(response);
            if (response === false) {
                setEmailError('Incorrect Current password');
                return;
            } else {
                setEmailError('');
                await updateEmail(userId, email).then((response) => {
                    setEmailError(response);
                }
                ).catch((error) => {
                    console.error(error);
                    setEmailError('Error updating email');
                })
            }
        }).catch((error) => {
            console.error(error);
            setEmailError('Error updating email');
        })

    };

    const handleSubmitPassword = async (e) => {

        e.preventDefault();

        if (password.length < 3) {
            setNewPasswordError('Password must be at least 3 characters long');
            return;
        }

        if (newPassword.length < 3) {
            setNewPasswordError('New password must be at least 3 characters long');
            return;
        }

        if (confirmNewPassword.length < 3) {
            setNewPasswordError('Confirm new password must be at least 3 characters long');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setNewPasswordError('New passwords do not match');
            return;
        }

        await comparePassword(userId, password).then(async (response) => {
            console.log(response);
            if (response === false) {
                setNewPasswordError('Incorrect Current Password');
                return;
            } else {
                setNewPasswordError('');
                await updatePassword(userId, newPassword).then((response) => {
                    setNewPasswordError(response);
                }
                ).catch((error) => {
                    console.error(error);
                    setNewPasswordError('Error updating password');
                })
            }
        }).catch((error) => {
            console.error(error);
            setNewPasswordError('Error updating password');
        }
        )
    };




    return (
        <div>
            <div className='w-full shadow-lg border-2 border-gray-400 rounded-lg my-2'>
                <h2 className='p-3 font-semibold'>To Update the First Name</h2>
                <form className="flex gap-x-2" onSubmit={handleSubmitFirstName}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => (setFirstName(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Update</button>
                </form>
                <p className='flex px-2 text-red-800'>{firstNameError && <div>{firstNameError}</div>}</p>
            </div>
            <div className='w-full shadow-lg border-2 border-gray-400 rounded-lg my-2'>
                <h2 className='p-3 font-semibold'>To Update the Last Name</h2>
                <form className="flex gap-x-2" onSubmit={handleSubmitLastName}>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => (setLastName(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Update</button>
                </form>
                <p className='flex px-2 text-red-800'>{lastNameError && <div>{lastNameError}</div>}</p>
            </div>
            <div className='w-full shadow-lg border-2 border-gray-400 rounded-lg my-2'>
                <h2 className='p-3 font-semibold'>To Update the Email</h2>
                <form className="flex gap-x-2" onSubmit={handleSubmitEmail}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        // value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Current Password"
                        // value={password}
                        onChange={(e) => (setPassword(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Update</button>

                </form>
                <p className='flex px-2 text-red-800'>{emailError && <div>{emailError}</div>}</p>
            </div>
            <div className='w-full shadow-lg border-2 border-gray-400 rounded-lg my-2'>
                <h2 className='p-3 font-semibold'>To update the Password</h2>
                <form className="flex gap-x-2" onSubmit={handleSubmitPassword}>
                    <input
                        type="password"
                        name="current password"
                        placeholder="Current Password"
                        // value={currentPassword}
                        onChange={(e) => (setCurrentPassword(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <input
                        type="password"
                        name="new password"
                        placeholder="New Password"
                        // value={newPassword}
                        onChange={(e) => (setNewPassword(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <input
                        type="password"
                        name="re enter new password"
                        placeholder="Re-enter New Password"
                        // value={confirmNewPassword}
                        onChange={(e) => (setConfirmNewPassword(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2 w-full m-2'
                    />
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 focus:outline-none ">Update</button>
                </form>
                <p className='flex px-2 text-red-800'>{newPasswordError && <div>{newPasswordError}</div>}</p>
            </div>


        </div>
    )
}

export default Profile