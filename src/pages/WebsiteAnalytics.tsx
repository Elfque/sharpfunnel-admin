import SingleOverview from "../components/SingleOverviewCard";
import PageLayout from "../layout/PageLayout";

const WebsiteAnalytics = () => {
  return (
    <PageLayout title="Website Management">
      <div className="grid grid-cols-4 gap-6 mt-6">
        <SingleOverview
          text="Total Orders"
          data={30}
          type="orders"
          icon={
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.5 16.5H13.51L12.9325 14.75H22.75C23.4325 14.75 24.01 14.3475 24.3075 13.77H24.325L27.825 6.77H27.8075C27.9125 6.5425 28 6.28 28 6C28 5.0375 27.2125 4.25 26.25 4.25H9.4325L8.6625 1.94H8.645C8.4 1.2575 7.77 0.75 7 0.75H1.75C0.7875 0.75 0 1.5375 0 2.5C0 3.4625 0.7875 4.25 1.75 4.25H5.74L9.8175 16.5H7C5.075 16.5 3.5 18.075 3.5 20C3.5 21.925 5.075 23.5 7 23.5C8.925 23.5 10.5 21.925 10.5 20H21C21 21.925 22.575 23.5 24.5 23.5C26.425 23.5 28 21.925 28 20C28 18.075 26.425 16.5 24.5 16.5ZM10.5876 7.75H23.4151L21.6651 11.25H11.7601L10.5876 7.75Z"
                fill="#845ADF"
              />
            </svg>
          }
        />

        <SingleOverview
          text="Total Visits"
          data={40}
          type="visits"
          icon={
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0043 7.2547C13.0433 7.2547 12.257 8.04424 12.257 9.00924C12.257 9.97424 13.0433 10.7638 14.0043 10.7638C14.9653 10.7638 15.7516 9.97424 15.7516 9.00924C15.7516 8.04424 14.9653 7.2547 14.0043 7.2547ZM27.9825 8.9566C27.9825 8.93905 27.9825 8.93905 27.9825 8.92151V8.90396C27.9825 8.88642 27.9825 8.88642 27.9825 8.86887C27.9825 8.85132 27.9825 8.85132 27.9825 8.83378V8.83378C27.9476 8.58814 27.8427 8.3776 27.6855 8.20214C26.7944 7.0266 25.7285 5.99142 24.6452 5.04397C22.3214 2.99116 19.6655 1.27171 16.7301 0.587434C15.0178 0.166344 13.3229 0.148799 11.6106 0.482162C10.0555 0.797979 8.57036 1.42961 7.15507 2.21916C4.97098 3.46488 2.96162 5.16679 1.21435 7.07924C0.899844 7.44769 0.585335 7.7986 0.2883 8.1846C-0.0960998 8.69342 -0.0960998 9.30751 0.2883 9.81632C1.17941 10.9919 2.24524 12.027 3.32855 12.9745C5.65242 15.0273 8.30827 16.7468 11.2437 17.431C12.9385 17.8346 14.6509 17.8521 16.3632 17.5012C17.9183 17.1854 19.4034 16.5538 20.8187 15.7642C23.0028 14.5185 25.0122 12.8166 26.7594 10.9041C27.0739 10.5532 27.4059 10.1848 27.703 9.79878C27.8602 9.62332 27.9651 9.39523 28 9.16714V9.16714C28 9.1496 28 9.1496 28 9.13205C28 9.11451 28 9.11451 28 9.09696V9.07942C28 9.06187 28 9.06187 28 9.04432C28 9.02678 28 9.00923 28 8.99169C28 8.97414 27.9825 8.97414 27.9825 8.9566ZM14.0044 14.273C11.1039 14.273 8.7626 11.9219 8.7626 9.00935C8.7626 6.09681 11.1039 3.74573 14.0044 3.74573C16.9049 3.74573 19.2462 6.09681 19.2462 9.00935C19.2462 11.9219 16.9049 14.273 14.0044 14.273Z"
                fill="#23B7E5"
              />
            </svg>
          }
        />

        <SingleOverview
          text="Total Leads"
          data={300}
          type=""
          icon={
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.4825 0.732422H2.48248C1.51998 0.732422 0.732483 1.51992 0.732483 2.48242C0.732483 2.97242 0.924983 3.40992 1.23998 3.72492L9.48248 11.9674V23.4999C9.48248 24.4624 10.27 25.2499 11.2325 25.2499C11.7225 25.2499 12.16 25.0574 12.475 24.7424L15.975 21.2424C16.29 20.9274 16.4825 20.4899 16.4825 19.9999V11.9674L24.725 3.72492C25.04 3.40992 25.2325 2.97242 25.2325 2.48242C25.2325 1.51992 24.445 0.732422 23.4825 0.732422Z"
                fill="#26BF94"
              />
            </svg>
          }
        />
      </div>
    </PageLayout>
  );
};

export default WebsiteAnalytics;
