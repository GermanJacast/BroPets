import * as React from "react"

const Instagram = (props) => (
  <svg
    className="socialMedia instagram"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    {...props}
  >
    <defs>
      <radialGradient id="a" cx={0.5} cy={0.6} r={0.8} fx={0.1} fy={1.25}>
        <stop className="one" offset="10%" stopColor="transparent" />
        <stop className="two" offset="20%" stopColor="transparent" />
        <stop className="three" offset="30%" stopColor="transparent" />
        <stop className="four" offset="40%" stopColor="transparent" />
        <stop className="five" offset="50%" stopColor="transparent" />
        <stop className="six" offset="60%" stopColor="transparent" />
        <stop className="seven" offset="70%" stopColor="transparent" />
        <stop className="eight" offset="80%" stopColor="transparent" />
        <stop className="nine" offset="90%" stopColor="transparent" />
        <stop className="ten" offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <g className="instagram_logo">
      <path
        className="instagram_logo"
        d="M480.724 250.138c0 127.025-102.975 230-230 230-127.026 0-230-102.975-230-230s102.974-230 230-230c127.025 0 230 102.975 230 230"
      />
    </g>
    <circle
    className="social-icon"
      cx={325.614}
      cy={175.339}
      r={16.429}
      style={{
        fill: "#fff",
      }}
    />
    <circle
    className="social-icon"
      cx={249.883}
      cy={250.918}
      r={59.767}
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 25,
      }}
    />
    <path
    className="social-icon"
      d="M377.145 187.547c0-35.001-28.416-63.416-63.416-63.416H186.898c-35.001 0-63.416 28.415-63.416 63.416v127.017c0 35 28.415 63.416 63.416 63.416h126.831c35 0 63.416-28.416 63.416-63.416V187.547Z"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 25,
      }}
    />
  </svg>
)

export default Instagram
