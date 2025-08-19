import React , {useState} from "react";
import CommonButton from "../../components/common/Button/CommonButton"
import InputField from "../../components/common/Input/InputField";
import SelectField from "../../components/common/Input/SelectField";
import FileUploadField from "../../components/common/Input/FileUploadField";

const AddNewClient = () => {
    return (
        <div className="card p-5 mt-1 mb-4 shadow-sm border-0">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: '1px solid #D6E7FF' }}>
                <h6>Add New Client</h6>
            </div>
        <div>
            <h6>Personal Information</h6>
            <form className="pt-4">
                <div className="row g-3">
                        <div className="col-md-4">
                            <InputField
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                placeholder="Marguerite"
                                required

                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Middle Name"
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleChange}
                                required
                                error={errors.middleName}
                                placeholder="Jaqueline"
                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                placeholder="Nicolas"
                                required

                            />
                        </div>
                </div>
            </form>
        </div>
        </div>
        
    )
};

export default AddNewClient; // ✅ Default export
