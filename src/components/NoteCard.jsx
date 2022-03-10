/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveNote } from '../redux/noteSlice';

function NoteCard({ note }) {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);

  function setActiveNote() {
    dispatch(updateActiveNote(note.id));
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`"w-full h-24 border-t border-t-slate-700 hover:bg-slate-700 cursor-pointer" ${
        activeNote[0]?.id === note?.id ? 'bg-slate-700' : 'bg-slate-900 '
      }`}
      onClick={setActiveNote}
    >
      <div className="p-4 text-slate-100 h-full flex flex-col justify-between">
        <h1 className="text-lg  font-bold">{note.title}</h1>
        <p className="text-xs">{note.updatedAt === '' ? note.createdAt : note.updatedAt}</p>
      </div>
    </div>
  );
}

export default NoteCard;
