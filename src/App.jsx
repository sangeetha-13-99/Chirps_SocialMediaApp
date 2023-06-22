import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css";
import { AuthService } from "./services/AuthService";
import { HomePage } from "./pages/HomePage";
import { RootPage } from "./pages/RootPage";
import { ExplorePage } from "./pages/ExplorePage";
import { BookMarks } from "./pages/BookMarks";
import { PostPage } from "./pages/PostPage";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Fragment } from "react";
import { Auth } from "./pages/Auth";



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
		{path:'/',element:<AuthService><RootPage/></AuthService>,children:[
			{path:"/home",element:<AuthService><HomePage/></AuthService>},
			{path:"/explore",element:<AuthService><ExplorePage/></AuthService>},
			{path:"/bookmarks",element:<AuthService><BookMarks/></AuthService>},
			{path:"/post/:postId",element:<AuthService><PostPage/></AuthService>},
			{path:"/profile/:profileId",element:<AuthService><Profile/></AuthService>},
		]},
		{path:'/auth',element:<Auth/>,children:[
			{path:"login",element:<Login/>},
			{path:"signup",element:<SignUp/>}
		]}
	])
	return (
		<Fragment>
			<ChakraProvider>
				<RouterProvider router={router}/>
			</ChakraProvider>
		</Fragment>
	);
}

export default App;
