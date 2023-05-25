import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import UserTable from "./components/UserTable";
import Footer from "../../components/footer/Footer";
import axios from 'axios';
import env from 'react-dotenv'

const DataUser = () => {
    const [open, setOpen] = useState(true);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    const countPage = (count) => {
        const total = count / limit;
        setPages(Math.ceil(total));
    }

    const getUsers = async() => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${limit}&${page}`);
        setUsers(response.data.rows);
        countPage(response.data.count);
    }

    useEffect(()=>{
        getUsers()
    },[]);

    const nextPage = () => {
        const count = page + 1;
        if(count <= pages){
            setPage(count);
        }
    }

    const prevPage = () => {
        const count = page - 1;
        if(count >= 1){
          setPage(count);
        }
      }

    const deleteUser = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            setMessage(error)
        }
        
    }
    return (
        <div className="flex h-full w-full">
            <Sidebar open={open} onClose={() => setOpen(false)} />
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
                    <div className="h-full">
                        <Navbar 
                            onOpenSidenav={() => setOpen(true)}
                            logoText={"Horizon UI Tailwind React"}
                            brandText="users"
                        />
                    </div>
                    <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                        <div>
                            {/* Complex Table , Task & Calendar */}
                            <UserTable
                                dataUser={users}
                                deleteUser={deleteUser}
                                nextPage={nextPage}
                                prevPage={prevPage}
                                limit={limit}
                                page={page}
                            />
                        </div>
                    </div>
                    <div className="p-3">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DataUser