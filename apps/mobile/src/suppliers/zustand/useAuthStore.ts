import {create} from 'zustand';
import axios from 'axios';

export enum SignupSections {
  FULL_SIGNUP = 0,
  ANONYMOUS_SIGNUP = 1,
}

type FullSignupDetails = {
  username: string;
  password: string;
  dateOfBirth: Date;
  name: string;
  email?: string;
  avatar: string;
  backgroundImage?: string;
  backgroundMusic?: string;
};

type AnonymousSignupDetails = {
  username: string;
  password: string;
};

export type BackgroundMusic = {
  id: string;
  name: string;
  copyright: string;
  image: string;
  songUrl: string;
  singer: string;
};

type AuthState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  navigationIndex: number;
  setNavigationIndex: (index: number) => void;
  currentSelectedSection: SignupSections;
  setCurrentSelectedSection: (section: SignupSections) => void;
  fullSignupDetail: FullSignupDetails;
  setFullSignupDetail: (detail: Partial<FullSignupDetails>) => void;
  anonymousSignupDetail: AnonymousSignupDetails;
  setAnonymousSignupDetail: (detail: Partial<AnonymousSignupDetails>) => void;
  currentBackgroundMusic: BackgroundMusic;
  setCurrentBackgroundMusic: (music: BackgroundMusic) => void;
  backgroundMusics: BackgroundMusic[];
  searchBackgroundMusic: (query: string) => void;
};

const useAuthStore = create<AuthState>(set => ({
  loading: false,
  setLoading: loading => {
    set({
      loading,
    });
  },
  navigationIndex: 0,
  setNavigationIndex: index => {
    set({
      navigationIndex: index,
    });
  },
  currentSelectedSection: SignupSections.FULL_SIGNUP,
  setCurrentSelectedSection: section => {
    set({
      currentSelectedSection: section,
    });
  },
  fullSignupDetail: {
    username: '',
    password: '',
    dateOfBirth: new Date(),
    name: '',
    avatar: '',
  },
  setFullSignupDetail: detail => {
    const previousFullSignupDetails = useAuthStore.getState().fullSignupDetail;
    set({
      fullSignupDetail: {
        ...previousFullSignupDetails,
        ...detail,
      },
    });
  },
  anonymousSignupDetail: {
    username: '',
    password: '',
  },
  setAnonymousSignupDetail: detail => {
    const previousAnonymousSignupDetails =
      useAuthStore.getState().anonymousSignupDetail;
    set({
      anonymousSignupDetail: {
        ...previousAnonymousSignupDetails,
        ...detail,
      },
    });
  },
  currentBackgroundMusic: {
    name: '',
    copyright: '',
    songUrl: '',
    image: '',
    singer: '',
    id: '',
  },
  setCurrentBackgroundMusic: music => {
    const previousFullSignupDetails = useAuthStore.getState().fullSignupDetail;
    set({
      currentBackgroundMusic: music,
      fullSignupDetail: {
        ...previousFullSignupDetails,
        backgroundMusic: music.id,
      },
    });
  },
  backgroundMusics: [],
  searchBackgroundMusic: async query => {
    try {
      set({loading: true});
      const {data} = await axios.get('https://saavn.dev/api/search/songs', {
        params: {
          query,
          page: 0,
          limit: 50,
        },
      });
      const backgroundMusics = data.data.results.map((song: any) => ({
        name: song.name,
        image: song.image[2].url,
        songUrl: song.downloadUrl[2].url,
        copyright: song.copyright,
        singer: song.artists.primary[0].name,
        id: song.id,
      }));
      console.log(backgroundMusics);
      set({backgroundMusics, loading: false});
    } catch (error) {}
  },
}));

export default useAuthStore;
