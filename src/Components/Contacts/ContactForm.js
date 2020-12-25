import React, { useState, useEffect } from 'react'
import BaseLayout from "../BaseLayout/index";

export default function ContactForm(props) {
    const initialFormValues = {
        fullName: "",
        mobilePhone: "",
        email: ""
    };
    let [values, setValues] = useState(initialFormValues);
    let [buttonName, setButtonName] = useState('Save');

    const handleInputChange = e => {
        let {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        });
    }

    useEffect(() => {
        console.log(props.currentId);
        if(props.currentId === '' || props.currentId === undefined){
            setValues({...initialFormValues})
            setButtonName('Save')
        }
        else{
            setValues({ ...props.contactObject[props.currentId] })
            setButtonName('Update')
        }
    }, [props.currentId, props.contactObject])

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <BaseLayout col="col-sm-12">
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group mb-4">
                    <label className="mb-2">Full Name : </label>
                    <input type="text" name="fullName" className="form-control" placeholder="Full Name" value={values.fullName} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-4">
                    <label className="mb-2">Mobile Phone : </label>
                    <input type="tel" name="mobilePhone" className="form-control" placeholder="Mobile Phone" value={values.mobilePhone} onChange={handleInputChange} />
                </div>
                <div className="form-group mb-4">
                    <label className="mb-2">Email : </label>
                    <input type="mail" name="email" className="form-control" placeholder="Email" value={values.email} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-4">
                    <button type="submit" className="btn btn-primary" name="save">{buttonName}</button>
                </div>
            </form>
        </BaseLayout>
    )
}
