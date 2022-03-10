/* eslint-disable no-unused-vars */
import {
  useEffect, useRef, useState,
} from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import { updateNoteSuccess, updateActiveNote } from '../redux/noteSlice';

export default function NewNote() {
  const { activeNote: note } = useSelector((state) => state.notes);
  const [newNote, setNewNote] = useState(`${note[0].body}}`);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  function handleInput(e) {
    setNewNote(e.currentTarget.value);
  }

  function handleSave() {
    const head = newNote.split('\n');
    const title = head.filter((sentence) => sentence[0] === '#' && sentence[1] !== '#');
    const updatedNote = {
      id: note[0].id,
      title: title.length === 0 ? head[0] : title[0],
      body: newNote,
      createdAt: note.createdAt,
      updatedAt: new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    dispatch(updateNoteSuccess(updatedNote));
    dispatch(updateActiveNote(''));
  }

  useEffect(() => {
    setNewNote(note[0].body);
  }, [note]);

  return (
    <div className="w-full h-full text-slate-100 relative">
      <div className="p-4 h-[calc(30vh-1rem)]">
        <button
          type="button"
          className="absolute right-12 top-2 px-4 py-2 border border-slate-100 rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <textarea
          className="w-full h-full bg-slate-800 text-slate-200 focus:outline-hidden focus:border-0 focus-within:outline-none overflow-auto resize-none"
          placeholder="Use markdown syntax..."
          ref={textAreaRef}
          onChange={handleInput}
        />
      </div>
      <hr className=" border-slate-700" />
      <div className="h-[calc(69vh-1rem)] w-full overflow-y-auto p-4 mt-4">
        <ReactMarkdown
          className="prose prose-slate prose-headings:text-slate-100 prose-headings:mb-0 prose-headings:mt-0 prose-ul:m-0 text-slate-100 whitespace-pre-wrap prose-p:m-0 prose-pre:m-0 prose-li:list-none prose-li:m-0 prose-li:p-0 prose-li:h-8 prose-blockquote:text-slate-200"
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {newNote}
        </ReactMarkdown>
      </div>
    </div>
  );
}
