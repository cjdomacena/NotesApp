import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { createNoteSuccess, updateActiveNote } from '../redux/noteSlice';
import NoteCard from './NoteCard';

function Sidebar() {
  const { notes, loading } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    const uid = uuid();
    dispatch(
      createNoteSuccess({
        id: uid,
        title: '# Untitled Note',
        body: 'Something interesting...',
        createdAt: new Date().toLocaleDateString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        updatedAt: '',
      }),
    );
    dispatch(updateActiveNote(uid));
  };

  return (
    <div className="w-1/4 border-r border-r-gray-700 bg-gray-900 h-full">
      <div className="p-4 mt-4 text-zinc-100 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <button
          type="button"
          className="flex rounded text-slate-200 p-2  hover:bg-slate-400 transition-colors"
          onClick={handleAddNote}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Add Note
        </button>
      </div>
      <hr className=" border-slate-700" />
      <div>
        {!loading && notes.map((item) => <NoteCard key={item.id} note={item} role="button" />)}
      </div>
    </div>
  );
}

export default Sidebar;
