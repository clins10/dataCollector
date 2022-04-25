import React, { useState } from 'react'
import Card from './../UI/Card';
import classes from './AddUser.module.css';
import Button from './../UI/Button';
import ErrorModal from './../UI/ErrorModal';


const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(false);

    const addUserHandler = (event) =>{
        event.preventDefault();     
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (a non-empty value)'
            })
            return;
        }
        if(+enteredAge < 1 || +enteredAge > 150){
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age (between 1 and 150)'
            });
            return;  
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    
    return (
        <div>
           { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username' > Username </label>
                    <input
                        id='username' 
                        type="text"  
                        placeholder='enter username' 
                        value={enteredUserName}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor='age'> Age (Years) </label>
                    <input  
                        id='age'
                        type="number"
                        placeholder='enter age in numbers' 
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}
 
export default AddUser