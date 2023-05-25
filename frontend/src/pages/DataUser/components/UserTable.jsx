import CardMenu from "../../../components/card/CardMenu";
import Card from "../../../components/card";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
// import Progress from "../../../components/progress";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const UserTable = (props) => {
  const {dataUser, deleteUser, nextPage, prevPage, limit, page} = props;

  console.log(dataUser);

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Data User
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center">
            <IoIosArrowDropleft />
            {limit} / {page}
            <IoIosArrowDropright />
          </div>
          <CardMenu />
        </div>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        <table className="w-full">
          <thead>
              <tr>
                <th className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700">
                  <p className="text-xs tracking-wide text-gray-600">
                    No
                  </p>
                </th>
                <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                  <p className="text-xs tracking-wide text-gray-600">
                    Name
                  </p>
                </th>
                <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                  <p className="text-xs tracking-wide text-gray-600">
                    Status
                  </p>
                </th>
                <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                  <p className="text-xs tracking-wide text-gray-600">
                    Action
                  </p>
                </th>
              </tr>
          </thead>
          <tbody>
            {dataUser.map((user, index)=>(
              <tr key={index}>
                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      {index+1}
                    </p>
                </td>
                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      {user.name}
                    </p>
                </td>
                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                    <p className="text-sm font-bold text-navy-700 dark:text-white flex items-center gap-4">
                      <MdCheckCircle className="text-green-500" />{user.status.name}
                    </p>
                </td>
                <td className="pt-[14px] pb-[18px] text-xs flex gap-6">
                    {/* <Progress width="w-[108px]" value="75.5" /> */}
                    <div className="bg-navy-300 w-fit px-4 rounded-md text-gray-100 dark:text-white cursor-pointer hover:text-white hover:bg-navy-500">
                      view
                    </div>
                    <div 
                      className="bg-red-300 w-fit px-4 rounded-md text-gray-100  dark:text-white cursor-pointer hover:text-white hover:bg-red-500"
                      onClick={()=>deleteUser(user.uuid)}>
                      delete
                    </div>
                </td>
              </tr>
            ))}
              
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UserTable;
