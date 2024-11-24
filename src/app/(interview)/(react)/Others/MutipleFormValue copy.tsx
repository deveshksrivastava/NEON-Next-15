import React, { useState } from 'react';

const dataUser = [
  { id: 1, fname: 'raj' },
  { id: 2, fname: 'sumit' },
];

export default function ToDoAppSatish() {
  const [user, setUser] = useState(dataUser);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updateValue, setUpdateValue] = useState('');
  const [nextId, setNextId] = useState(dataUser.length + 1);

  const handleAdd = (myname:any) => {
    console.log('data', myname);

    setUser([...user, { id: nextId, fname: myname }]);
    setNextId(nextId + 1);
  };

  const handleDelete = (id:any) => {
    setUser(user.filter((item) => item.id !== id));
    // setNextId(nextId - 1);
  };

  const handleOpenModal = (id:any) => {
    console.log(id);
    setModalOpen(true);
    setSelectedUserId(id.id);
    setUpdateValue(id.fname);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUserId(null);
    setUpdateValue('');
  };

  const handleUpdate = () => {
    if (selectedUserId !== null) {
      const updatedList = user.map((item) =>
        item.id !== selectedUserId ? item : { ...item, fname: updateValue }
      );
      setUser(updatedList);
      handleCloseModal();
    }
  };

  return (
    <div>
      <h3>To DO APP</h3>
      <AddItem
        handleAddFnameMain={handleAdd}
        handleOpenModal={handleOpenModal}
      />
      <ShowList
        users={user}
        handleDelete={handleDelete}
        handleOpenModal={handleOpenModal}
      />
      {isModalOpen && (
        <UpdateModal
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          handleCloseModal={handleCloseModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}



const AddItem = (props:any) => {
    const { handleAddFnameMain, handleOpenModal } = props;
    const [myname, setMyName] = useState('');
  
    const handleAddFname = () => {
      handleAddFnameMain(myname);
      setMyName(''); // Reset input after adding
    };
  
    return (
      <div>
        <input
          type="text"
          value={myname}
          onChange={(e) => setMyName(e.target.value)}
        />
        <button type="button" onClick={handleAddFname}>
          Add Name
        </button>
        <button type="button" onClick={() => handleOpenModal(dataUser[0])}>
          Open Update Modal for User ID 1
        </button>
      </div>
    );
  };
  
  const ShowList = (props:any) => {
    const { users, handleDelete, handleOpenModal } = props;
  
    return (
      <div>
        <ul>
          {users &&
            users.map((item:any) => (
              <li key={item.id}>
                {item.id} - {item.fname}
                <button type="button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
                <button type="button" onClick={() => handleOpenModal(item)}>
                  Update
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  };


const UpdateModal = (props:any) => {
    const { updateValue, setUpdateValue, handleCloseModal, handleUpdate } = props;
  
    return (
      <div
        style={{
          backgroundColor: 'grey',
          width: '100px',
          height: '100px',
        }}
      >
        <input
          type="text"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    );
  };
  