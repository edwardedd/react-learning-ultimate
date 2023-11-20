import React, {useState} from "react";
import './Form.css'

const Form = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        biography: '',
        transport: '',
        agree: false,
        breakfast: false,
        lunch: false,
        dinner: false,
    };
    const [formState, setFormState] = useState(initialState);

    const onChangeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(formState)
    }

    const onClickHandler = () => {
        setFormState(initialState)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <span>{`Your name is ${formState.firstName} ${formState.lastName}`}</span>
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                id='firstName'
                name='firstName'
                value={formState.firstName}
                onChange={onChangeHandler}
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id='lastName'
                name='lastName'
                value={formState.lastName}
                onChange={onChangeHandler}
            />
            <label htmlFor="biography">Biography</label>
            <textarea
                id="biography"
                name='biography'
                rows='10'
                onChange={onChangeHandler}
                value={formState.biography}
            ></textarea>
            <label htmlFor="transport">Transport</label>
            <select
                name="transport"
                id="transport"
                onChange={onChangeHandler}
                value={formState.transport}>
                <option>None</option>
                <option value="planes">planes</option>
                <option value="train">train</option>
                <option value="car">car</option>
                <option value="boat">boat</option>
            </select>
            <fieldset>
                <legend>select your meals</legend>

                <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    onChange={onChangeHandler}
                    checked={formState.breakfast}/>
                <label htmlFor="breakfast">breakfast</label>

                <input
                    type="checkbox"
                    name="lunch"
                    id="lunch"
                    onChange={onChangeHandler}
                    checked={formState.lunch}/>
                <label htmlFor="lunch">lunch</label>

                <input
                    type="checkbox"
                    name="dinner"
                    id="dinner"
                    onChange={onChangeHandler}
                    checked={formState.dinner}/>
                <label htmlFor="dinner">dinner</label>
            </fieldset>

            <label htmlFor="agree">I agree</label>
            <input
                type="checkbox"
                name="agree"
                id="agree"
                onChange={onChangeHandler}
                checked={formState.agree}/>
            <button type='submit'>Save</button>
            <button type='button' onClick={onClickHandler}>clear</button>
        </form>
    )
}

export default Form;
