import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ngouanativan@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+237 678134678 " Image={FiPhone} />
      <SingleInfo text="Douala, Cameroun" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
