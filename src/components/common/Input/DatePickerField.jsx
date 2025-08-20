import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

const DatePickerField = ({
    label = "Date of Birth",
    name,
    onChange,
    required = false,
    error,
    disabled = false,
    placeholder,
}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="mb-3" style={{ position: "relative" }}>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div style={{ position: "relative" }}>
                <DatePicker
                    id={name}
                    name={name}
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={placeholder}
                    // maxDate={new Date()}
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // Disable weekends
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    required={required}
                    disabled={disabled}
        
                    className={`form-control custom-input ${error ? "is-invalid" : ""}`}
                    style={{
                        backgroundColor: "#ECF7FF",
                        borderRadius: "28px",
                        color: "#7795BE",
                        padding: "180px 24px",
                        border: "none",
                        width: "100%"
                    }}
                />
                {/* Calendar Icon */}
                <Calendar
                    size={25}
                    color="#7795BE"
                    style={{
                        position: "absolute",
                        right: "20px",
                        top: "30%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none"
                    }}
                />
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default DatePickerField;