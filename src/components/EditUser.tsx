import { FaTimes } from "react-icons/fa";
import LoginInput from "./inputs/LoginInput";

const EditUser = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <div className={`right-modal ${open ? "active" : ""} `}>
      <div className="flex sticky top-0 justify-between p-4">
        <div classNametext-xl>User Settings</div>
        <FaTimes className="" onClick={close} />
      </div>

      <div className="p-4">
        <div className="mt-4">
          <div className="text-xs">Name</div>
          <LoginInput
            name="name"
            value=""
            handleChange={() => {}}
            placeholder="Name"
          />
        </div>

        <div className="mt-4">
          <div className="text-xs">Email Address</div>
          <LoginInput
            name="email"
            value=""
            handleChange={() => {}}
            placeholder="Email Address"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <div>
              <div className="text-xs">Password</div>
              <div className="text-inputBorder text-xs">
                Generate a new password
              </div>
            </div>

            <div className="text-xs text-purpleColor">Reset Password</div>
          </div>
          <LoginInput
            name="email"
            value=""
            handleChange={() => {}}
            placeholder="Password"
          />
        </div>

        <div className="mt-7">
          <button className="pink-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
