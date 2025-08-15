import React from "react";
import { Form } from "react-bootstrap";
import './FileUploadField.css';
import { LuImagePlus } from "react-icons/lu";
import { FaUpload } from "react-icons/fa";

const FileUploadField = ({
    label,
    name,
    onChange,
    accept = "image/*",
    required = false,
    error,
    disabled = false,
}) => {
    return (
        <div className="mb-3">

            
            <Form.Group className="">
                <label htmlFor={name} className="form-label">{label}</label>
                <div style={{ backgroundColor: '#ECF7FF', padding: '22px', borderRadius: '28px' }}>
                <div className="upload-box text-center">
                        <div className="mb-2">
                            <LuImagePlus size={50} style={{ backgroundColor: '#D6E7FF', padding: '10px', borderRadius: '50%', color:'#383F7A' }} />
                        </div>
                        <small style={{ color:'#7795BE'}}>JPEG, PNG, TIFF BMP</small>
                    <Form.Control
                        type="file"
                        className={`form-file ${error ? "is-invalid" : ""}`}
                        id={name}
                        name={name}
                        onChange={onChange}
                        accept={accept}
                        required={required}
                        disabled={disabled}  
                        />
                </div>
                </div>
            </Form.Group>
            
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );

};

export default FileUploadField;