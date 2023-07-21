import SmoothScrollLink from "../../common/SmoothScrollLink/SmoothScrollLink";

export default function Button({ text }) {
  return (
    <>
      <SmoothScrollLink href={"#apply"} className='btn'>
        {text}
      </SmoothScrollLink>
    </>
  );
}
