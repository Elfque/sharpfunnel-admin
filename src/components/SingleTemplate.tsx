import OptionLayout from "../layout/OptionLayout";

const SingleTemplate = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1720733786851-33d4b66ade06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-40 object-cover w-full"
      />
      <div className="flex justify-between items-center bg-whiteBg p-2">
        <div className="text-xs">
          <div className="">Domain Name</div>
          <div className="text-inputBorder text-[10px]">
            Edited: May 15, 2024, 3:20 AM
          </div>
        </div>

        <div>
          <OptionLayout>
            <button className="text-emailTextColor optionButton">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2847 14.1081H2.81412V5.63752H7.29412L9.17647 3.75517H1.87294C1.35529 3.75517 0.931763 4.1787 0.931763 4.69635V15.0493C0.931763 15.5669 1.35529 15.9905 1.87294 15.9905H12.2259C12.7435 15.9905 13.1671 15.5669 13.1671 15.0493V7.75517L11.2847 9.63752V14.1081ZM15.0494 0.931641H10.3435C9.82588 0.931641 9.40235 1.35517 9.40235 1.87282C9.40235 2.39046 9.82588 2.81399 10.3435 2.81399H12.7812L7.80235 7.79282C7.62353 7.97164 7.52 8.20693 7.52 8.46105C7.52 8.9787 7.94353 9.40223 8.46117 9.40223C8.7247 9.40223 8.96 9.2987 9.12941 9.12929L14.1082 4.15046V6.58811C14.1082 7.10576 14.5318 7.52929 15.0494 7.52929C15.5671 7.52929 15.9906 7.10576 15.9906 6.58811V1.88223C15.9906 1.35517 15.5671 0.931641 15.0494 0.931641Z"
                  fill="#696F8C"
                />
              </svg>
              Delete
            </button>

            <button
              className="text-emailTextColor optionButton"
              // onClick={() => {
              //   setSelected(data);
              //   setEditing(true);
              // }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.24999 10.2602L5.71999 12.7302L12.41 6.04023L9.94999 3.56023L3.24999 10.2602ZM0.98999 14.9902L4.84999 13.6002L2.38999 11.1602L0.98999 14.9902ZM13.24 0.990234C12.76 0.990234 12.32 1.19023 12 1.50023L10.56 2.94023L13.03 5.41023L14.47 3.97023C14.79 3.65023 14.98 3.22023 14.98 2.73023C14.99 1.78023 14.21 0.990234 13.24 0.990234Z"
                  fill="#696F8C"
                />
              </svg>
              Edit
            </button>
          </OptionLayout>
        </div>
      </div>
    </div>
  );
};

export default SingleTemplate;
