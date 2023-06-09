import * as React from "react"

const Twitter = (props) => (
  <svg
  className="socialMedia twitter"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.41421,
    }}
    {...props}
  >
    <path
      className="svgSocialMedia"
      d="M480.724 250.138c0 127.025-102.975 230-230 230-127.026 0-230-102.975-230-230s102.974-230 230-230c127.025 0 230 102.975 230 230"
    />
    <path
    className="social-icon"
      d="M150.215 160.239s33.49 46.914 97.895 49.677c.124.005-11.072-51.904 44.309-58.256 11.14-1.277 26.534 4.749 37.16 14.825 16.813-3.583 30.218-11.517 29.867-11.338-2.795 9.337-10.819 21.658-20.08 25.906 9.885-.302 21.177-4.592 26.447-7.099-3.897 8.659-15.972 18.395-23.295 24.512 4.287 96.403-99.339 184.11-208.516 120.355-2.831-1.653 31.408 8.891 70.174-19.761-31.939-1.831-43.581-29.234-44.16-33.059 8.184 1.159 18.476.63 20.793-.801-32.023-9.199-37.518-35.404-37.511-47.103 8.312 4.136 13.591 5.748 21.267 5.665-25.694-18.068-23.735-49.531-14.376-63.513"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

export default Twitter
