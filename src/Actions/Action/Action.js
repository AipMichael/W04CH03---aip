const Action = ({ className, text }) => {
  return (
    <>
      <a href="google.com" className={className}>
        {text}
      </a>
    </>
  );
};

export default Action;
