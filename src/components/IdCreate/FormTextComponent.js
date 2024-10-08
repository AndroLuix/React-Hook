import React, { useId, useState } from 'react';
import CodeBlock from '../Tools/CodeBlock';
import { CODE } from './code';

const FormTextComponent = () => {
  const idName = useId();
  const idEmail = useId();
  const idConsent = useId();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    consent: false,
  });

  const [showCode, setCode] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ fullname: '', email: '', consent: false });
    setCode(true);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 d-flex flex-column align-items-center justify-content-center"
      style={{ maxWidth: '400px', margin: 'auto' }}
    >
      <div className="form-group mb-3 w-100">
        <label htmlFor={idName} className="form-label">Full Name</label>
        <input
          type="text"
          id={idName}
          name="fullname"
          className="form-control"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your full name *"
          required
        />
      </div>

      <div className="form-group mb-3 w-100">
        <label htmlFor={idEmail} className="form-label">Email</label>
        <input
          type="email"
          id={idEmail}
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email *"
          required
        />
      </div>

      <div className="form-check mb-3 w-100">
        <input
          type="checkbox"
          id={idConsent}
          name="consent"
          className="form-check-input"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label htmlFor={idConsent} className="form-check-label">
          I agree to the terms and conditions
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>

      {
        showCode ? <><CodeBlock code={CODE} /> <button 
        className='btn btn-black w-25 mx-auto my-2 shadow'
        onClick={()=> setCode(false)}
        >Close</button></> : ''
      }

    </form>
  );
};

export default FormTextComponent;
