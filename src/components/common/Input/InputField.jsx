import React from 'react';
import './InputField.css';

const InputField = ({
    label,
    type = "text",
    name, 
    value,
    onChange,
    placeholder,
    required = false,
    error, 
    disabled = false,
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className='form-label'>{label}</label>
            <input
            type={type}
                className={`form-control custom-input ${error ? "is-invalid" : ""}`}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
                style={{ backgroundColor: '#ECF7FF', borderRadius: '28px', color: '#7795BE', padding: '18px 24px', border: 'none', width:'100%' }}
            />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

export default InputField;