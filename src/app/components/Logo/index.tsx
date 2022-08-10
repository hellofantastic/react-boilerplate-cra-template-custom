interface LogoProps {
  fill?: string;
  title?: string;
  width?: number;
}
export const Logo = ({ fill, title, width }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 1"
      width={width ? width + 'px' : '30px'}
    >
      <title>{title ? title : 'Project Name '}</title>
      <g>
        <path d="m0,0v1h1V0" fill={fill ? fill : '#345c7e'} />
      </g>
    </svg>
  );
};
