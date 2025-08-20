import React, {useState} from "react";
import CommonButton from "../../components/common/Button/CommonButton"
import InputField from "../../components/common/Input/InputField";
import SelectField from "../../components/common/Input/SelectField";
import FileUploadField from "../../components/common/Input/FileUploadField";
import DatePickerField from "../../components/common/Input/DatePickerField";

const AddNewClient = () => {
    const [dob, setDob] = useState(null);

    const suffix = [
        { value: 'Jr', label: 'Jr' },
        { value: 'Sr', label: 'Sr' },
        { value: 'Yr', label: 'Yr' },
        { value: 'Mr', label: 'Mr' },
        { value: 'Ms', label: 'Ms' },
    ];
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
                                placeholder="Marguerite"
                                required

                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Middle Name"
                                name="middleName"
                                placeholder="Jaqueline"
                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Last Name"
                                name="lastName"
                                placeholder="Nicolas"
                                required

                            />
                        </div>
                        <div className="col-md-4">
                            <SelectField
                                label="Suffix"
                                name="suffix"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                required
                                placeholder="Marguerite45@gmail.com"

                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="+123 456 789"

                            />
                        </div>

                        <div className="col-md-4">
                            <DatePickerField
                                label="Date of Birth"
                                name="dob"
                                selectedDate={dob}
                                onChange={(date) => setDob(date)}
                                type="tel"
                                required
                                placeholder="Select your date of birth"
                            />
                        </div>
                        <div className="col-md-4">
                            <SelectField
                                label="State of Residence"
                                name="stateOfResidence"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="Tax Filing Status"
                                name="taxFilingStatus"
                                options={suffix}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <SelectField
                                label="Type of IRA"
                                name="typeOfIRA"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4 mt-5">
                            <p>Contributions are typically made with pre-tax dollars, and the Internal Revenue Code mandates that account holders begin taking RMDs by April 1 of the year following the year they reach age 73.</p>
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="IRA Custodian"
                                name="iraCustodian"
                                options={suffix}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ra">Any additional IRA(s) ?</label>
                            <div className="d-inline-flex align-items-center justify-content-between gap-2 mt-5">
                            <input type="checkbox" /> Yes
                            <input type="checkbox" /> NO
                            </div>
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="Type of IRA"
                                name="iraCustodian"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="IRA Custodian"
                                name="iraCustodian"
                                options={suffix}
                                required
                            />
                        </div>
                        
                        
                </div>
            </form>
        
                <div className="mt-5">
                    <h6>Spouse Information</h6>
                </div>
                <form className="pt-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <InputField
                                label="First Name"
                                name="firstName"
                                placeholder="Marguerite"
                                required

                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Middle Name"
                                name="middleName"
                                placeholder="Jaqueline"
                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Last Name"
                                name="lastName"
                                placeholder="Nicolas"
                                required

                            />
                        </div>
                        <div className="col-md-4">
                            <SelectField
                                label="Suffix"
                                name="suffix"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                required
                                placeholder="Marguerite45@gmail.com"

                            />
                        </div>

                        <div className="col-md-4">
                            <InputField
                                label="Phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="+123 456 789"

                            />
                        </div>

                        <div className="col-md-4">
                            <DatePickerField
                                label="Date of Birth"
                                name="dob"
                                selectedDate={dob}
                                onChange={(date) => setDob(date)}
                                type="tel"
                                required
                                placeholder="Select your date of birth"
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="ra">Does your spouse have additional IRA(s) ?</label>
                            <div className="d-inline-flex align-items-center justify-content-between gap-2 mt-5">
                                <input type="checkbox" /> Yes
                                <input type="checkbox" /> NO
                            </div>
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="Type of IRA"
                                name="iraCustodian"
                                options={suffix}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <SelectField
                                label="IRA Custodian"
                                name="iraCustodian"
                                options={suffix}
                                required
                            />
                        </div>

                        </div>
                        </form>

                <div className="d-flex justify-content-end mt-5 pt-5 gap-3">
                    <CommonButton
                        text="Close"
                        bgColor='#D6E7FF'
                        textColor
                        size="large"
                        shape="pill"
                        onClick={() => onCancel?.()}

                    />
                    <CommonButton
                        text="Create Client"
                        bgColor="linear-gradient(269.55deg, #003276 -0.41%, #005DDC 100.63%)"
                        textColor="white"
                        size="large"
                        shape="pill"

                    />
                </div>

        </div>
        </div>
        
    )
};

export default AddNewClient; // ✅ Default export
