// src/pages/FinancialAdvisors/AddNew.jsx
import React, { useState } from "react";
import InputField from '../../components/common/Input/InputField';
import SelectField from '../../components/common/Input/SelectField';
import FileUploadField from '../../components/common/Input/FileUploadField';
import CommonButton from "../../components/common/Button/CommonButton";



const AddNewAdvisor = ({ onSubmit, initialData = {} }) => {
    const states = [
        { value: 'CA', label: 'California' },
        { value: 'NY', label: 'New York' },
        { value: 'TX', label: 'Texas' },
        { value: 'FL', label: 'Florida' },
        { value: 'IL', label: 'Illinois' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'OH', label: 'Ohio' },
        { value: 'GA', label: 'Georgia' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'MI', label: 'Michigan' }
    ];

    const designation = [
        {
            value:'CFA',
            label:'Certified Financial Planner (CFP)',
        },
        {
            value:'IA',
            label:'Investment Advisor',
        },
        {
            value:'sas',
            label:'saassasa',
        }
    ];

    const citiesByState = {
        CA: [
            { value: 'LA', label: 'Los Angeles' },
            { value: 'SF', label: 'San Francisco' },
            { value: 'SD', label: 'San Diego' },
            { value: 'SJ', label: 'San Jose' },
        ],
        NY: [
            { value: 'NYC', label: 'New York City' },
            { value: 'BUF', label: 'Buffalo' },
            { value: 'ALB', label: 'Albany' },
            { value: 'ROC', label: 'Rochester' },
        ],
        TX: [
            { value: 'HOU', label: 'Houston' },
            { value: 'DAL', label: 'Dallas' },
            { value: 'AUS', label: 'Austin' },
            { value: 'SAT', label: 'San Antonio' },
        ],
        FL: [
            { value: 'MIA', label: 'Miami' },
            { value: 'ORL', label: 'Orlando' },
            { value: 'TPA', label: 'Tampa' },
            { value: 'JAX', label: 'Jacksonville' },
        ],
        IL: [
            { value: 'CHI', label: 'Chicago' },
            { value: 'AUR', label: 'Aurora' },
            { value: 'ROC', label: 'Rockford' },
            { value: 'JOL', label: 'Joliet' },
        ],
        PA: [
            { value: 'PHL', label: 'Philadelphia' },
            { value: 'PIT', label: 'Pittsburgh' },
            { value: 'ALL', label: 'Allentown' },
            { value: 'ERI', label: 'Erie' },
        ],
        OH: [
            { value: 'COL', label: 'Columbus' },
            { value: 'CLE', label: 'Cleveland' },
            { value: 'CIN', label: 'Cincinnati' },
            { value: 'TOL', label: 'Toledo' },
        ],
        GA: [
            { value: 'ATL', label: 'Atlanta' },
            { value: 'AUG', label: 'Augusta' },
            { value: 'SAV', label: 'Savannah' },
            { value: 'ATH', label: 'Athens' },
        ],
        NC: [
            { value: 'CHA', label: 'Charlotte' },
            { value: 'RAL', label: 'Raleigh' },
            { value: 'GRE', label: 'Greensboro' },
            { value: 'DUR', label: 'Durham' },
        ],
        MI: [
            { value: 'DET', label: 'Detroit' },
            { value: 'GRR', label: 'Grand Rapids' },
            { value: 'WYN', label: 'Warren' },
            { value: 'ANN', label: 'Ann Arbor' },
        ],
    };

    const [formData, setFormData] = useState({
        firstName: initialData.firstName || "",
        middleName: initialData.middleName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        state: initialData.state || "",
        city: initialData.city || "",
        firmName: initialData.firmName || "",
        designation: initialData.designation || "",
        logo: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.middleName) newErrors.middleName = "Middle name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.state) newErrors.state = "Please select a state";
        if (!formData.city) newErrors.city = "Please select a city";
        if (!formData.firmName) newErrors.firmName = "Firm name is required";
        if (!formData.designation) newErrors.designation = "Designation is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            onSubmit(formData);
        }
    };

    const cities = formData.state ? citiesByState[formData.state] || [] : [];

    return (
        <div className="card p-5 mt-1 mb-4 shadow-sm border-0">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: '1px solid #D6E7FF' }}>
                <h6>Add New Financial Advisor</h6>
            </div>
            <form className="pt-4" onSubmit={handleSubmit}>
                <div className="row g-3">

                    <div className="col-md-4">
                        <InputField 
                            label="First Name"
                            name= "firstName"
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

                <div className="row g-3">

                    <div className="col-md-4">
                        <SelectField
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            options={states}
                            required
                            error={errors.state}
                            
                        
                        />
                    </div>

                    <div className="col-md-4">
                        <SelectField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            options={cities}
                            required
                            disabled={!formData.state}
                            error={errors.city}
                            
                        />
                    </div>

                    <div className="col-md-4">
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            error={errors.email}
                            placeholder="Marguerite45@gmail.com"

                        />
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-md-4">
                        <InputField
                            label="Firm Name"
                            name="firmName"
                            value={formData.firmName}
                            onChange={handleChange}
                            required
                            error={errors.firmName}
                            type="text"
                            placeholder="Vanguard Inc."

                        />
                    </div>

                    <div className="col-md-4">
                        <SelectField
                            label="Designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            options={designation}
                            required
                            error={errors.designation}


                        />
                    </div>

                    <div className="row">
                        <div className="com-md-8">
                           
                        </div>
                    </div>

                    
                    

                </div>
                <div className="row">
                    
                </div>
            </form>
            

        </div>
    );
};

export default AddNewAdvisor;  