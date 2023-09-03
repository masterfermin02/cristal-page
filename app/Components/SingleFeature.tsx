import React from "react";

export default function SingleFeature({ label }) {
  return (
    <div className="single-features">
        <div className="features-icon">
        <img src="../assets/img/icon/check.svg" alt="" />
        </div>
        <div className="features-caption">
            <p>{label}</p>
        </div>
    </div>
  )
}
