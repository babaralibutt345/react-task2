// components/SelectField.jsx
import React from "react";
import './SelectField.css';

const SelectField = ({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
    error,
    disabled = false
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <select
                className={`form-select custom-input ${error ? "is-invalid" : ""}`}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                style={{ backgroundColor: '#ECF7FF', borderRadius: '28px', color: '#7795BE', padding: '18px 24px', border:'none' }}
                
            >
                <option value="">Select {label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default SelectField;
