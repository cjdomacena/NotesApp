import { useSelector } from 'react-redux';
import NewNote from './NewNote';

function Main() {
  const { activeNote } = useSelector((state) => state.notes);

  if (activeNote === '') {
    return (
      <div className="w-3/4 h-full bg-slate-800">
        <div className="grid place-items-center h-full w-full">
          {' '}
          <p className="text-slate-600 text-center">No active note.</p>
          {' '}
        </div>
      </div>
    );
  }

  return (
    <div className="w-3/4 h-full bg-slate-800">
      <div className="bg-slate-800 pt-4">
        <div className="bg-slate-800">
          <NewNote />
        </div>
      </div>
    </div>
  );
}

export default Main;
