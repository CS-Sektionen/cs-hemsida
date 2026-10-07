import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Layout} from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Companies } from './pages/Companies';
import { Subgroups } from './pages/Subgroups';
import { Activities } from './pages/Activities';
import { SectionMeeting } from './pages/SectionMeeting';
import { NewStudents } from './pages/NewStudents';
import { Board } from './pages/Board';
import { Documents } from './pages/Documents';
import { Calendar } from './pages/Calendar';

function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/foretag" element={<Companies />} />
        <Route path="/aktiviteter" element={<Activities />} />
        <Route path="/sektionsmote" element={<SectionMeeting />} />
        <Route path="/nystudent" element={<NewStudents />} />
        <Route path="/styrelsen" element={<Board />} />
        <Route path="/dokument" element={<Documents />} />
        <Route path="/kalender" element={<Calendar />} />
        <Route path="/undergrupper" element={<Subgroups />} />
      </Route>
    </Routes>
  );
}

export default App;
