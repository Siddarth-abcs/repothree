import React from 'react'
import { useEffect,useState } from 'react';    
import { useSelector,useDispatch, shallowEqual } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from '../../components/DashboardComponent/Navbar/Navbar';
import SubBar from '../../components/DashboardComponent/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponent/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponent/CreateFolder/CreateFolder'
import { getFolders } from '../../redux/actionCreators/fileFolderActionCreator';
import FolderComponent from '../../components/DashboardComponent/FolderComponent/FolderComponent';



    function DashboardPage() {

      const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

      const { isLoggedIn, isLoading, userId } = useSelector(
        (state) => ({
          isLoggedIn: state.auth.isAuthenticated,
          isLoading: state.filefolders.isLoading,
          userId: state.auth.user.uid,
        }),
        shallowEqual
      );


      const navigate = useNavigate();
      const dispatch = useDispatch()

      useEffect(()=>{
        if (!isLoggedIn) {
          navigate("/")
        }
      }, []);

      // video 9 not change time 14:48 17:06 effect homecomponent
      useEffect(() => {
        if(isLoading && userId) {
          dispatch(getFolders(userId));
        }
      },[isLoading, userId, dispatch]);

      return (
        <>
        {isCreateFolderModalOpen && (
          <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
        )}
        <Navbar/>
        <SubBar 
        setIsCreateFolderModelOpen={setIsCreateFolderModalOpen}/>
        <Routes>
          <Route path="" element={<HomeComponent/>}/> 
          <Route path='folder/:folderId' element={<FolderComponent/>}/>
        </Routes>
        </>
      )
    }
    
    export default DashboardPage;
    
