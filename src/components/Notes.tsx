import React, { useState } from 'react';
import DraggableNoteModal from './DraggableNoteModal';

const Notes = () => {
  const [notesPages, setNotesPages] = useState([]);
  const [newPageTitle, setNewPageTitle] = useState('');
  const [activePage, setActivePage] = useState(null);

  // Add new page to the notes section
  const addNewPage = () => {
    const newPage = {
      title: newPageTitle || `New Page ${notesPages.length + 1}`,
      content: '',
    };
    setNotesPages([...notesPages, newPage]);
    setNewPageTitle('');
  };

  // Open a page for editing in the draggable modal
  const openPage = (page) => {
    setActivePage(page);
  };

  // Handle renaming the page
  const handleRenamePage = (newTitle) => {
    if (activePage) {
      activePage.title = newTitle;
      setNotesPages([...notesPages]); // Update the notes list with renamed page
    }
  };

  const handleCloseModal = () => {
    setActivePage(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-900">Notes</h3>
        <button
          className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all focus:outline-none"
          onClick={addNewPage}
        >
          <span className="text-lg">+ Add New Page</span>
        </button>
      </div>
      
      {/* Render Notes Pages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notesPages.map((page, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 p-6 rounded-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
            onDoubleClick={() => openPage(page)}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl text-gray-900">{page.title}</p>
              <span className="text-sm text-gray-600">✍️</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Click to edit or double click to open</p>
          </div>
        ))}
      </div>

      {/* Open Draggable Modal for Notes Page */}
      {activePage && (
        <DraggableNoteModal
          activePage={activePage}
          onRename={handleRenamePage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Notes;
