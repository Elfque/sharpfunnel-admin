import ModalLayout from "../layout/ModalLayout";

const DeleteWebsiteModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  return (
    <ModalLayout show={open}>
      <div className="p-4">
        <div className="text-sm mb-2">Delete Website</div>

        <div className="modal-body">
          <div className="text-md">
            Are you sure you want to delete this product?
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              className="text-sm font-semibold py-2 px-4 rounded-md border border-red-500 text-red-500 flex items-center gap-2 justify-center"
              // onClick={deleteProduct}
            >
              {/* {deleting && <ButtonLoader />} */}
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1082 4.69647H0.872932C0.609403 4.69647 0.402344 4.90353 0.402344 5.16706C0.402344 5.43059 0.609403 5.63765 0.872932 5.63765H1.34352V15.0494C1.34352 15.5671 1.76705 15.9906 2.2847 15.9906H11.6965C12.2141 15.9906 12.6376 15.5671 12.6376 15.0494V5.63765H13.1082C13.3718 5.63765 13.5788 5.43059 13.5788 5.16706C13.5788 4.90353 13.3718 4.69647 13.1082 4.69647ZM5.10823 13.1671C5.10823 13.6847 4.6847 14.1082 4.16705 14.1082C3.6494 14.1082 3.22587 13.6847 3.22587 13.1671V7.52C3.22587 7.00235 3.6494 6.57882 4.16705 6.57882C4.6847 6.57882 5.10823 7.00235 5.10823 7.52V13.1671ZM7.93176 13.1671C7.93176 13.6847 7.50823 14.1082 6.99058 14.1082C6.47293 14.1082 6.0494 13.6847 6.0494 13.1671V7.52C6.0494 7.00235 6.47293 6.57882 6.99058 6.57882C7.50823 6.57882 7.93176 7.00235 7.93176 7.52V13.1671ZM10.7553 13.1671C10.7553 13.6847 10.3318 14.1082 9.81411 14.1082C9.29646 14.1082 8.87293 13.6847 8.87293 13.1671V7.52C8.87293 7.00235 9.29646 6.57882 9.81411 6.57882C10.3318 6.57882 10.7553 7.00235 10.7553 7.52V13.1671ZM12.6376 1.87294H8.87293C8.87293 1.35529 8.4494 0.931763 7.93176 0.931763H6.0494C5.53176 0.931763 5.10823 1.35529 5.10823 1.87294H1.34352C0.825873 1.87294 0.402344 2.29647 0.402344 2.81412V3.75529H13.5788V2.81412C13.5788 2.29647 13.1553 1.87294 12.6376 1.87294Z"
                  fill="#FF5D4D"
                />
              </svg>
              Delete
            </button>

            <button
              className="text-sm font-semibold py-2 px-4 rounded-md border border-emailTextColor text-emailTextColor flex items-center gap-2 justify-center"
              onClick={close}
            >
              {/* {deleting && <ButtonLoader />} */}
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.41 4L7.7 1.71C7.89 1.53 8 1.28 8 1C8 0.45 7.55 0 7 0C6.72 0 6.47 0.11 6.29 0.29L4 2.59L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L2.59 4L0.3 6.29C0.11 6.47 0 6.72 0 7C0 7.55 0.45 8 1 8C1.28 8 1.53 7.89 1.71 7.71L4 5.41L6.29 7.7C6.47 7.89 6.72 8 7 8C7.55 8 8 7.55 8 7C8 6.72 7.89 6.47 7.71 6.29L5.41 4Z"
                  fill="#696F8C"
                />
              </svg>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default DeleteWebsiteModal;
