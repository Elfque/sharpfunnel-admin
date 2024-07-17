type overlay = {
  click?: () => void;
};

const Overlay: React.FC<overlay> = ({ click }) => {
  return (
    <div
      className="fixed left-0 top-0 inset-0 bg-slate-900/40 z-[25]"
      onClick={click}
    />
  );
};

export default Overlay;
