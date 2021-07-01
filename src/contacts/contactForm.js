import {useEffect, useState} from "react";

export const ContactForm = (props)=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phonePrimary,setPhonePrimary]=useState("");
    const [phoneSec,setPhoneSec]=useState("");
    let[errors,setErrors] = useState(null);
    let[isFormValid,setIsFormValid] = useState(true);


    function validateForm() {
        isFormValid = true;
        errors = {};
        console.log("test",name)
        if(name==="" || !(/^[a-zA-Z-_]+$/.test(name))){
            errors.nameError="Name is not valid"
            isFormValid=false;
        }
        if(email==="" || !(/^[0-9a-zA-Z@._]+$/.test(email))){
            errors.emailError="Email is not valid"
            isFormValid=false;
        }
        if(phonePrimary==="" ||phonePrimary.length!==10 ||!(/^[0-9]+$/.test(phonePrimary))){
            errors.phonePrimaryError="Phone Primary Error is not valid"
            isFormValid=false;
        }
        if(phoneSec!=="" && (phoneSec.length!==10 || !/^[0-9]+$/.test(phoneSec))){
            errors.phoneSecError="Phone Sec is not valid"
            isFormValid=false;
        }
        setErrors(errors);
        setIsFormValid(isFormValid);
        return isFormValid;
    }

    function submitForm(event) {
        event.preventDefault();
        if(validateForm()) {
            props.addContact({
                name, email, phonePrimary, phoneSec
            })
        }
        console.log(errors);
    }
    useEffect(()=>{
        console.log("edit mode", props.editMode);
        let {selContact} = props;
        if(props.editMode && selContact!=null){
            setName(selContact.name);
            setEmail(selContact.email);
            setPhonePrimary(selContact.phonePrimary);
            setPhoneSec(selContact.phoneSec);
        }
    },[props.editMode]);

    return (
        <div>
            <form>
                {!isFormValid ?(
                    <div style={{color:"red"}}>
                    <div>{errors.nameError}</div>
                    <div>{errors.emailError}</div>
                    <div>{errors.phonePrimaryError}</div>
                    <div>{errors.phoneSecError}</div>
                    </div>
                ):""}
                <div>
                    <label>Name</label>
                    <input className="form-control" type="text" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input className="form-control" type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Phone Primary</label>
                    <input className="form-control" type="text" value={phonePrimary} onChange={e=>setPhonePrimary(e.target.value)}/>
                </div>
                <div>
                    <label>Phone Secondary</label>
                    <input className="form-control" type="text" value={phoneSec} onChange={e=>setPhoneSec(e.target.value)}/>
                </div>
                {props.editMode?
                    <button className="mt-2 mb-2 btn btn-primary" onClick={(event)=>{
                        event.preventDefault();
                        props.updateContact({name,email,phonePrimary,phoneSec,id:props.selContact.id});
                    }}>Update</button> :
                    <button className="mt-2 mb-2 btn btn-primary" onClick={submitForm}>Add Contact</button>}
            </form>
        </div>
    )
}