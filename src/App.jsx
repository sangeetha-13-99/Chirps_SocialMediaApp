import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js"
import { AuthService } from "./services/AuthService";
import { HomePage } from "./pages/Home/HomePage";
import { RootPage } from "./pages/Root/RootPage";
import { ExplorePage } from "./pages/Explore/ExplorePage";
import { PostPage } from "./pages/PostPage";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Auth/components/Login";
import { SignUp } from "./pages/Auth/components/SignUp";
import { Auth } from "./pages/Auth/Auth";
import "./App.css";
import { LikedPage } from "./pages/Liked/LikedPage";
import { BookMarksPage } from "./pages/BookMarks/BookMarksPage";


if (import.meta.env.DEV) {
  window.onerror = (event, source, lineno, colno, err) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');
    if (!ErrorOverlay) {
      return;
    }
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  };
}

function App() {

	const router=createBrowserRouter([
		// auth authserviceto root
		{path:'/',element:<AuthService><RootPage/></AuthService>,children:[
			{path:"/",element:<AuthService><HomePage/></AuthService>},
			{path:"/explore",element:<AuthService><ExplorePage/></AuthService>},
			{path:"/bookmark",element:<AuthService><BookMarksPage/></AuthService>},
			{path:"/liked",element:<AuthService><LikedPage/></AuthService>},
			{path:"/post/:postId",element:<AuthService><PostPage/></AuthService>},
			{path:"/profile/:profileId",element:<AuthService><Profile/></AuthService>},
		]},
		{path:'/auth',element:<Auth/>,children:[
			{path:"login",element:<Login/>},
			{path:"signup",element:<SignUp/>}
		]},
		{path:'/mockman',element:<Mockman/>}
	])
	return (
		<Fragment>
			<ToastContainer
            icon={false}
            position="top-right"
            autoClose={500}
            newestOnTop={true}
            limit={2}
            closeOnClick
            draggable
            theme="dark"
          />
			<RouterProvider router={router}/>
		</Fragment>
	);
}

export default App;
