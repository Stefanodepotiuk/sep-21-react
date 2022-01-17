import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formBox = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventData})
        getFilter(eventData)

    };

    return (
        <div>
            <label>Name <input type="text" name={'name'} value={form.name} onChange={formBox}/></label>
            <label>User Name <input type="text" name={'username'} value={form.username} onChange={formBox}/></label>
            <label>Email <input type="text" name={'email'} value={form.email} onChange={formBox}/></label>
        </div>
    );
};

export default Form;