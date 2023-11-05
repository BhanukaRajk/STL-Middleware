import { useState } from 'react';
import { updateFirstName, updateLastName, updateEmail } from '../api/customersApi';

const Profile = () => {

    const userId = 1;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');



    const handleSubmitFirstName = async (e) => {
        e.preventDefault();

        if (firstName.length < 3) {
            setFirstNameError('First name must be at least 3 characters long');
            return;
        }

        updateFirstName(userId, firstName).then((response) => {

            setFirstNameError(response.data.message);

        }).catch((error) => {
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


        updateLastName(userId, lastName).then((response) => {

            setLastNameError(response.data.message);

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

        if (password.length < 3) {
            setEmailError('Password must be at least 3 characters long');
            return;
        }

        updateEmail(userId, email).then((response) => {

            setEmailError(response.data.message);

        }
        ).catch((error) => {
            console.error(error);
            setEmailError('Error updating email');
        })
    };


    return (
        <div>
            <div className='w-full'>
                <h2 className='py-5'>First Name</h2>
                <form className="flex gap-x-4" onSubmit={handleSubmitFirstName}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => (setFirstName(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2'
                    />
                    <button className="" type="submit">Update</button>
                </form>
                {firstNameError && <div>{firstNameError}</div>}
            </div>
            <div className='w-full'>
                <h2 className='py-5'>Second Name</h2>
                <form className="flex gap-x-4" onSubmit={handleSubmitLastName}>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => (setLastName(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2'
                    />
                    <button className="" type="submit">Update</button>
                </form>
                {lastNameError && <div>{lastNameError}</div>}
            </div>
            <div>
                <h2 className='py-5'>Email</h2>
                <form className="flex gap-x-4" onSubmit={handleSubmitEmail}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Current Password"
                        value={password}
                        onChange={(e) => (setPassword(e.target.value))}
                        className='flex border-2 border-gray-300 rounded-md p-2'
                    />


                    <button className="" type="submit">Update</button>
                </form>
                {emailError && <div>{emailError}</div>}
            </div>

        </div>
    )
}

export default Profile