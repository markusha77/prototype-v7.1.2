import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from './components/auth/SignInPage';
import CommunitiesPage from './components/community/CommunitiesPage';
import CommunityDetail from './components/community/CommunityDetail';
import CommunityEditPage from './components/community/CommunityEditPage';
import CommunityPage from './components/community/CommunityPage';
import OpenSpaceDetailed from './components/community/OpenSpaceDetailed';
import OpenSpacesPage from './components/community/OpenSpacesPage';
import ProjectDetail from './components/community/ProjectDetail';
import LandingPage from './components/landing/LandingPage';
import MainLayout from './components/layout/MainLayout';
import ProfileForm from './components/profile/ProfileForm';
import ProfilePage from './components/profile/ProfilePage';
import ProfilePreview from './components/profile/ProfilePreview';
import ProjectForm from './components/profile/ProjectForm';
import Welcome from './components/profile/Welcome';
import { OnboardingFlow } from './components/signin/OnboardingFlow';
import Tutorials from './components/tutorials/Tutorials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CommunityPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/community/:communityId" element={<CommunityDetail />} />
        <Route path="/community/:communityId/edit" element={<CommunityEditPage />} />
        <Route path="/community/project/:projectId" element={<ProjectDetail />} />
        <Route path="/open-spaces" element={<OpenSpacesPage />} />
        <Route path="/open-space/:spaceId" element={<OpenSpaceDetailed />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/preview" element={<ProfilePreview />} />
        <Route path="/profile/edit" element={<ProfileForm />} />
        <Route path="/projects/new" element={<ProjectForm />} />
        <Route
          path="/onboarding"
          element={<OnboardingFlow onComplete={() => {}} onCancel={() => {}} />}
        />
        <Route path="/builder" element={<Welcome />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Route>
    </Routes>
  );
}

export default App;
