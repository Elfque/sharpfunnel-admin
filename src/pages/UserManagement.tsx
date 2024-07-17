import { useState } from "react";
import EditUser from "../components/EditUser";
import SingleUser from "../components/SingleUser";
import PageLayout from "../layout/PageLayout";
import { CiSearch } from "react-icons/ci";

const UserManagement = () => {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <PageLayout title="User Management">
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
        <div className="col-span-5 sm:col-span-4 lg:col-span-3">Name</div>
        <div className="col-span-3 sm:inline hidden">Email</div>
        <div className="hidden lg:inline col-span-2">Status</div>
        <div className="hidden lg:inline col-span-2">Date Created</div>
        <div className="col-span-2 hidden lg:inline">Actions</div>
      </div>

      <div>
        <SingleUser />
        <SingleUser />
        <SingleUser />
      </div>

      <EditUser open={openEdit} close={() => setOpenEdit(false)} />
    </PageLayout>
  );
};

export default UserManagement;
