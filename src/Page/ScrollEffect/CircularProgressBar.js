import React from 'react';

const CircularProgressBar = ({page}) => {
  return (
    <svg
      version="1.1"
      id="transring"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 414 414"
      style={{ backgroundColor: 'transparent'}}
    >
      <path
        id="Transparent_Ring"
        className="transrg"
        style={{
          opacity: 0.4,
          fill: 'none',
          stroke: '#FFFFFF',
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"
      />
      <path
        id="Opaque_Ring"
        className="transrgwht"
        strokeDasharray="0,1000"
        style={{
          fill: 'none',
          stroke: 'rgb(0, 0, 255)',
          strokeWidth: 2,
          strokeMiterlimit: 10,
          strokeDasharray: `${page} , 1000`,
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"
      />
      <g id="Dots1" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S87,80,84,80z"
          />
        </g>
        <g>
          <path
            className="dotsstro1"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S87,80,84,80z"
          />
        </g>
      </g>
      <g id="Dots2" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill2"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
          />
        </g>
        <g>
          <path
            className="dotsstro2"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
          />
        </g>
      </g>
      <g id="Dots3" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill3"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M332,85c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S335,85,332,85z"
          />
        </g>
        <g>
          <path
            className="dotsstro3"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M332,85c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S335,85,332,85z"
          />
        </g>
      </g>
      <g id="Dots4" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill4"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M380,205c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S383,205,380,205z"
          />
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M380,205c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S383,205,380,205z"
          />
        </g>
      </g>
      <g id="Dots5" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill5"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M335,315c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S340,315,335,315z"
          />
        </g>
        <g>
          <path
            className="dotsstro5"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M335,315c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S340,315,335,315z"
          />
        </g>
      </g>
      <g id="Dots6" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill6"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M210,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S215,375,210,375z"
          />
        </g>
        <g>
          <path
            className="dotsstro6"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M210,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S215,375,210,375z"
          />
        </g>
      </g>
      <g id="Dots7" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill7"
            style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
            d="M88,324c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S92,324,88,324z"
          />
        </g>
        <g>
          <path
            className="dotsstro7"
            style={{
              opacity: 1,
              fill: 'none',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M88,324c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S92,324,88,324z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CircularProgressBar;
