import { chakra } from "@chakra-ui/react";
import { FaAngleRight,FaAngleLeft,FaEyeSlash,FaEye,FaFilter} from "react-icons/fa6";
import { MdMoreVert,MdClose,MdHome,MdOutlineHome,MdOutlineSearch,MdSearch,MdAccountCircle,MdOutlineAccountCircle,MdOutlineExplore,MdExplore,MdPeople,MdPeopleOutline,MdOutlineLogout,MdOutlineLocalFireDepartment,MdOutlineCalendarMonth,MdOutlineShare,MdOutlinePhotoCamera} from "react-icons/md";
import {FaPlusCircle,FaPlus,FaBookmark,FaRegBookmark,FaHeart,FaRegHeart,FaImages,FaRegComment,FaRegTrashAlt,FaRegEdit,FaUserPlus} from "react-icons/fa"

const RightIcon=chakra(FaAngleRight);
const LeftIcon=chakra(FaAngleLeft);
const ShowPasswordIcon=chakra(FaEye);
const HidePasswordIcon=chakra(FaEyeSlash);
const Expand=chakra(MdMoreVert);
const Close=chakra(MdClose);
const Home=chakra(MdOutlineHome);
const ActiveHome=chakra(MdHome);
const ActiveSearch=chakra(MdSearch);
const Search=chakra(MdOutlineSearch);
const ActiveAccount=chakra(MdAccountCircle);
const Account=chakra(MdOutlineAccountCircle);
const ActiveExplore=chakra(MdExplore);
const Explore=chakra(MdOutlineExplore);
const ActivePeople=chakra(MdPeople);
const People=chakra(MdPeopleOutline);
const Logout=chakra(MdOutlineLogout);
const Post=chakra(FaPlus);
const ActivePost=chakra(FaPlusCircle);
const BookMark=chakra(FaRegBookmark);
const ActiveBookMark=chakra(FaBookmark);
const ActiveHeart=chakra(FaHeart);
const Heart=chakra(FaRegHeart);
const Image=chakra(FaImages);
const FilterIcon=chakra(FaFilter);
const Trending=chakra(MdOutlineLocalFireDepartment);
const Calendar=chakra(MdOutlineCalendarMonth);
const Share=chakra(MdOutlineShare);
const Comment=chakra(FaRegComment);
const Delete=chakra(FaRegTrashAlt);
const Edit=chakra(FaRegEdit);
const Camera=chakra(MdOutlinePhotoCamera);
const FollowUser=chakra(FaUserPlus);
export {
    RightIcon,
    LeftIcon,
    ShowPasswordIcon,
    HidePasswordIcon,
    Expand,
    Close,
    Home,
    ActiveHome,
    Account,
    ActiveAccount,
    Explore,
    ActiveExplore,
    People,
    ActivePeople,
    Search,
    ActiveSearch,
    Logout,
    Post,
    ActivePost,
    BookMark,
    ActiveBookMark,
    Heart,
    ActiveHeart,
    Image,
    FilterIcon,
    Trending,
    Calendar,
    Share,
    Comment,
    Delete,
    Edit,
    Camera,
    FollowUser
}
