import OptionLayout from "../layout/OptionLayout";

const SingleUser = () => {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-10 lg:grid-cols-12 grid-title gap-2 py-4 px-5 text-sm tables">
      <div className="col-span-5 sm:col-span-4 lg:col-span-3">Username</div>
      <div className="col-span-3 sm:inline hidden">exampleuser@user.com</div>
      <div className="hidden lg:inline col-span-2">
        <div className="bg-successGreen/20 text-successGreen text-[10px] rounded-full px-4 py-1 w-fit">
          Active
        </div>
      </div>
      <div className="hidden lg:inline col-span-2">Mar 23, 2024</div>
      <div className="col-span-2 hidden lg:inline">
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
            Preview
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
                d="M8 12H9C9.55 12 10 11.55 10 11V2C10 1.45 9.55 1 9 1H8C7.45 1 7 1.45 7 2V11C7 11.55 7.45 12 8 12ZM13 12H14C14.55 12 15 11.55 15 11V5C15 4.45 14.55 4 14 4H13C12.45 4 12 4.45 12 5V11C12 11.55 12.45 12 13 12ZM15 13H2C1.45 13 1 13.45 1 14C1 14.55 1.45 15 2 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13ZM3 12H4C4.55 12 5 11.55 5 11V7C5 6.45 4.55 6 4 6H3C2.45 6 2 6.45 2 7V11C2 11.55 2.45 12 3 12Z"
                fill="#696F8C"
              />
            </svg>
            Analysis
          </button>
        </OptionLayout>
      </div>
    </div>
  );
};

export default SingleUser;
