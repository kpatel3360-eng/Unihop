const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic Information
  name: { 
    type: String, 
    required: [true, 'Please add a name'] 
  },
  email: { 
    type: String, 
    required: [true, 'Please add an email'], 
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: { 
    type: String, 
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false // This hides the password by default when fetching user data
  },
  
  // Student Specifics
  enrollmentNo: { 
    type: String, 
    required: [true, 'Please add your University Enrollment Number'],
    unique: true 
  },
  phoneNumber: { 
    type: String, 
    required: [true, 'Please add a phone number'] 
  },

  // Role Management
  role: { 
    type: String, 
    enum: ['rider', 'driver', 'both'], 
    default: 'rider' 
  },

  // Vehicle Details (Optional: Only filled if they are a driver)
  vehicle: {
    model: { type: String },
    plateNumber: { type: String },
    color: { type: String },
    capacity: { type: Number, default: 1 }
  },

  // Ratings (For Trust)
  rating: {
    type: Number,
    default: 5
  }
}, { 
  timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('User', userSchema);