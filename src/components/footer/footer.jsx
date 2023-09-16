const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center bg-secondary-color bg-opacity-90 text-center text-light-color fixed bottom-0 min-h-[4rem] w-[100vw]  "
      style={{ zIndex: 999 }}
    >
      <p className="p-5 text-lg font-medium">&copy; 2023 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
