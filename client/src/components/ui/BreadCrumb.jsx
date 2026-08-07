import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function BreadCrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-1 text-[13px] text-text-secondary">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-white" : ""}>
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight size={14} className="text-text-muted" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default BreadCrumb;
