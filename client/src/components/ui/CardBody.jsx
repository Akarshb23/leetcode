import React from "react";

function CardBody({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default CardBody;
