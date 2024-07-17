import SingleUser from "../components/SingleUser";
import PageLayout from "../layout/PageLayout";

const UserManagement = () => {
  return (
    <PageLayout title="User Management">
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
    </PageLayout>
  );
};

export default UserManagement;
