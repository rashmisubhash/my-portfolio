const HeroBullet = () => (
  <span className="relative mr-2 text-xl md:text-2xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="#fde047"
        d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15"
      ></path>
    </svg>

    <svg
      className="absolute inset-0 isolate z-1 text-not-black"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="#2c3e50"
        d="M228.81 114.89L164.5 91.5l-23.39-64.31a13.95 13.95 0 0 0-26.22 0L91.5 91.5l-64.31 23.39a13.95 13.95 0 0 0 0 26.22L91.5 164.5l23.39 64.31a13.95 13.95 0 0 0 26.22 0l23.39-64.31l64.31-23.39a13.95 13.95 0 0 0 0-26.22m-4.1 15l-66.94 24.34a6 6 0 0 0-3.59 3.59l-24.34 66.94a2 2 0 0 1-3.68 0l-24.34-66.94a6 6 0 0 0-3.59-3.59l-66.94-24.39a2 2 0 0 1 0-3.68l66.94-24.34a6 6 0 0 0 3.59-3.59l24.34-66.94a2 2 0 0 1 3.68 0l24.34 66.94a6 6 0 0 0 3.59 3.59l66.94 24.34a2 2 0 0 1 0 3.68Z"
      ></path>
    </svg>
  </span>
);

export default HeroBullet;
