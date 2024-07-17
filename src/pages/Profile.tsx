import { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import PageLayout from "../layout/PageLayout";

const Profile = () => {
  return (
    <PageLayout title="Profile">
      <div>
        <>
          <div className="">
            <div className="flex items-center gap-3 py-4 border-b border-inputBorder mb-4">
              <img
                src={
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <button className="flex items-center gap-2 text-sm">
                Change profile image{" "}
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
                    d="M3.24999 10.26L5.71999 12.73L12.41 6.03999L9.94999 3.55999L3.24999 10.26ZM0.98999 14.99L4.84999 13.6L2.38999 11.16L0.98999 14.99ZM13.24 0.98999C12.76 0.98999 12.32 1.18999 12 1.49999L10.56 2.93999L13.03 5.40999L14.47 3.96999C14.79 3.64999 14.98 3.21999 14.98 2.72999C14.99 1.77999 14.21 0.98999 13.24 0.98999Z"
                    fill="#8F95B2"
                  />
                </svg>
              </button>
            </div>

            <div className="line"></div>

            <div className="form-grid">
              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  // onChange={handleChange}
                  name="firstName"
                  // value={userData?.firstName}
                />
              </div>

              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  // onChange={handleChange}
                  // value={userData?.lastName}
                  name="lastName"
                />
              </div>

              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="inputs"
                  // onChange={handleChange}
                  name="email"
                  // value={userData?.email}
                />
              </div>

              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  Website
                </label>
                <input
                  type="text"
                  className="inputs"
                  // value={userData?.websites[0]}
                />
              </div>

              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  Subdomain
                </label>
                <input
                  type="text"
                  className="inputs"
                  // value={userData?.subdomain}
                  name="subdomain"
                  // onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label htmlFor="first_name" className="profile-edit-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="inputs"
                  // value={userData?.phone}
                  // onChange={handleChange}
                  name="phone"
                />
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div>
            <div className="profile-edit-label">Change Password</div>

            <div className="mt-6 form-grid p-5 bg-white rounded-xl border border-profile items-end">
              <div className="form-control">
                <label className="profile-edit-label">Current Password</label>
                <input
                  type="password"
                  className="inputs"
                  // onChange={handlePasswordChange}
                  // value={passwordData.current_password}
                  name="current_password"
                />
              </div>

              <div className="form-control">
                <label className="profile-edit-label">New Password</label>
                <input
                  type="password"
                  className="inputs"
                  // onChange={handlePasswordChange}
                  // value={passwordData.new_password}
                  name="new_password"
                />
              </div>

              <div className="form-control">
                <label className="profile-edit-label">
                  Re-enter New password
                </label>
                <input
                  type="password"
                  className="inputs"
                  // onChange={handlePasswordChange}
                  // value={passwordData.new_password1}
                  name="new_password1"
                />
              </div>

              <div className="flex justify-end">
                <button className="flex gap-2 text-white bg-sidebarBg px-5 py-2 items-center rounded-md text-sm">
                  <CiFileOn />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </PageLayout>
  );
};

export default Profile;
