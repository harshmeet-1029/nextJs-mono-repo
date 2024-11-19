import React from "react";

function Button({
  label,
  onClick,
  variant = "contained", // can be 'contained', 'outlined', or 'text'
  color = "primary", // can be 'primary', 'secondary', or 'default'
  size = "medium", // can be 'small', 'medium', or 'large'
  className,
}) {
  // Base style for the button
  const buttonStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding:
      size === "small"
        ? "6px 12px"
        : size === "large"
        ? "12px 24px"
        : "8px 16px",
    fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  // Define color schemes for different variants and colors
  const colorStyles = {
    primary: {
      backgroundColor: variant === "contained" ? "#3f51b5" : "transparent",
      color: variant === "contained" ? "white" : "#3f51b5",
      border: variant === "outlined" ? "2px solid #3f51b5" : "none",
    },
    secondary: {
      backgroundColor: variant === "contained" ? "#f50057" : "transparent",
      color: variant === "contained" ? "white" : "#f50057",
      border: variant === "outlined" ? "2px solid #f50057" : "none",
    },
    default: {
      backgroundColor: variant === "contained" ? "#e0e0e0" : "transparent",
      color: variant === "contained" ? "black" : "#000",
      border: variant === "outlined" ? "2px solid #e0e0e0" : "none",
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: variant === "contained" ? "#303f9f" : "transparent",
      color: variant === "contained" ? "white" : "#303f9f",
      border: variant === "outlined" ? "2px solid #303f9f" : "none",
    },
    secondary: {
      backgroundColor: variant === "contained" ? "#c51162" : "transparent",
      color: variant === "contained" ? "white" : "#c51162",
      border: variant === "outlined" ? "2px solid #c51162" : "none",
    },
    default: {
      backgroundColor: variant === "contained" ? "#bdbdbd" : "transparent",
      color: variant === "contained" ? "black" : "#757575",
      border: variant === "outlined" ? "2px solid #bdbdbd" : "none",
    },
  };

  // Combine styles
  const currentStyles = {
    ...buttonStyle,
    ...colorStyles[color],
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      className={className}
      style={{
        ...currentStyles,
        ...(isHovered ? hoverStyles[color] : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
}

export default Button;
