const handleValidationError = (error, res) => {
  if (error.name === "ValidationError") {
    // Handling Mongoose validation errors
    const errors = Object.values(error.errors).map((err) => err.message);
    return res.status(400).json({ message: "Validation Error", errors });
  }
  res.status(500).json({ error });
};

export { handleValidationError };
