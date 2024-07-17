import Overlay from "../components/Overlay";

type modalType = {
  show: boolean;
  children: any;
};

const ModalLayout: React.FC<modalType> = ({ show, children }) => {
  return (
    <div>
      {show && <Overlay />}
      <div className={`modal duration-200 ${show ? "scale-1" : "scale-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
