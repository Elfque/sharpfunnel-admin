import { useState } from "react";
import DeleteWebsiteModal from "../components/DeleteWebsiteModal";
import SingleEmail from "../components/SingleEmail";
import PageLayout from "../layout/PageLayout";
import { CiSearch } from "react-icons/ci";

const WebsiteManagement = () => {
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <PageLayout title="Website Management">
      <div className="flex items-end gap-4 mt-4">
        <div className="flex items-center justify-between gap-2 border border-inputBorder rounded-lg p-2 w-full max-w-sm">
          <input
            type="text"
            placeholder="Search by user email"
            className="bg-transparent border-0 outline-0 w-5/6 text-sm"
          />
          <CiSearch />
        </div>

        <div>
          <div className="text-sm">Status</div>
          <select
            name=""
            id=""
            className="text-inputBorder border-inputBorder border text-xs py-2 px-4 rounded"
          >
            <option value="">All</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 sm:grid-cols-10 lg:grid-cols-12 grid-title gap-2 py-4 px-5 text-sm bg-whiteBg mt-4 border border-inputBorder rounded-t-lg">
        <div className="col-span-5 sm:col-span-4 lg:col-span-3">
          Website name
        </div>
        <div className="col-span-3 sm:inline hidden">Email</div>
        <div className="hidden lg:inline col-span-2">Status</div>
        <div className="hidden lg:inline col-span-2">Date Created</div>
        <div className="col-span-2 text-center">Actions</div>
      </div>

      <div>
        <SingleEmail />
        <SingleEmail />
        <SingleEmail />
        <SingleEmail />
      </div>

      <DeleteWebsiteModal
        open={openDelete}
        close={() => setOpenDelete(false)}
      />
    </PageLayout>
  );
};

export default WebsiteManagement;
