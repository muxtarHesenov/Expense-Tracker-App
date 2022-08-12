import React, { useState } from "react";

function Form({onSubmit}) {
    const [value, setValue] = useState(0)
    const [type, setType] = useState('income');

    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({value, type});
    }


    return (
        <>
            <form onSubmit={handleFormSubmit} className="form">
                <input
                    type="number"
                    placeholder="Add expense or income"
                    value={value}
                    onChange={e => setValue(e.target.value)} />

                <input
                    type="checkbox"
                    checked={type === 'income'}
                    onChange={() => {
                        setType(type === 'income' ? 'expense' : 'income')
                    }} />
            </form>
        </>
    );
}


export default Form
