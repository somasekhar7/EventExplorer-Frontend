import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

function EventForm() {
  const [formData, setFormData] = useState({
    userEmail: "",
    eventName: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    VenueName: "",
    capacity: "",
    price: "",
    city: "",
    state: "",
    contactNumber: "",
    venueType: "",
    description: "",
    eventEmailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Event Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>User Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Event Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Event Type:</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Event Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Event Time:</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Venue Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="VenueName"
                  value={formData.VenueName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Capacity:</label>
                <input
                  type="text"
                  className="form-control"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Price:</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>City:</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>State:</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Contact Number:</label>
                <input
                  type="text"
                  className="form-control"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Venue Type:</label>
                <input
                  type="text"
                  className="form-control"
                  name="venueType"
                  value={formData.venueType}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Event Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  name="eventEmailAddress"
                  value={formData.eventEmailAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
