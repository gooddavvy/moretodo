import React, { useState } from "react";
import { Box, Typography, IconButton, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "@/app/page.module.css";
import Modal from "@/components/Modal";
import EmptyListMessage from "./EmptyListMessage";

export interface ListItem {
  task: string;
  dateAndTimeLastSaved: Date | number | string;
  completed: boolean;
}

export type List = ListItem[];

let TodoList: React.FC = () => {
  let [list, setList] = useState<List>([]);

  let [modalOpen, setModalOpen] = useState(false);
  let [modalTitle, setModalTitle] = useState("");
  let [modalContent, setModalContent] = useState("");
  let [modalCallback, setModalCallback] = useState<
    ((value?: string) => void) | null
  >(null);
  let [showInput, setShowInput] = useState(false);
  let [inputValue, setInputValue] = useState("");

  let handleOpenModal = (
    title: string,
    content: string,
    callback: (value?: string) => void,
    showInput = false,
    value = ""
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setModalCallback(() => callback);
    setShowInput(showInput);
    setInputValue(value);
    setModalOpen(true);
  };

  let handleCloseModal = () => {
    setModalOpen(false);
  };

  let addTodo = () => {
    handleOpenModal(
      "Add New Todo",
      "Please enter the new task:",
      (newTask) => {
        if (newTask) {
          setList([
            ...list,
            {
              task: newTask,
              dateAndTimeLastSaved: new Date(Date.now()),
              completed: false,
            },
          ]);
        }
      },
      true
    );
  };

  let editTodo = (index: number) => {
    handleOpenModal(
      "Edit Todo",
      "Edit your task:",
      (updatedTask) => {
        if (updatedTask) {
          let updatedList = [...list];
          updatedList[index] = {
            ...updatedList[index],
            task: updatedTask,
            dateAndTimeLastSaved: new Date(Date.now()),
          };
          setList(updatedList);
        }
      },
      true,
      list[index].task
    );
  };

  let deleteTodo = (index: number) => {
    handleOpenModal(
      "Delete Todo",
      "Are you sure you want to delete this task?",
      () => {
        let updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
      }
    );
  };

  let toggleComplete = (index: number) => {
    let updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  return (
    <>
      <h2>Todo List</h2>
      <Box component="div">
        {list.length !== 0 ? (
          list.map((item, index) => {
            return (
              <Box
                component="div"
                key={index}
                className={styles.card}
                sx={{
                  textDecoration: item.completed ? "line-through" : "none",
                  backgroundColor: item.completed ? "#4caf50" : "initial",
                }}
              >
                <h1 style={{ color: "white" }}>{item.task}</h1>
                <Typography style={{ color: "white" }}>
                  <b>Date&Time Last Saved: </b>
                  {item.dateAndTimeLastSaved.toLocaleString()}
                </Typography>
                <Box>
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => editTodo(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => deleteTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Checkbox
                    checked={item.completed}
                    onChange={() => toggleComplete(index)}
                    sx={{
                      color: "white", // Set the default color to white
                      "&.Mui-checked": {
                        color: "#4caf50", // Set the checked color to green
                      },
                    }}
                    inputProps={{ "aria-label": "complete" }}
                  />
                </Box>
              </Box>
            );
          })
        ) : (
          <EmptyListMessage />
        )}
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <IconButton aria-label="add" color="primary" onClick={addTodo}>
          <AddIcon />
        </IconButton>
      </Box>

      <Modal
        open={modalOpen}
        title={modalTitle}
        content={modalContent}
        value={inputValue}
        onClose={handleCloseModal}
        onConfirm={(value) => {
          if (modalCallback) modalCallback(value);
          handleCloseModal();
        }}
        showInput={showInput}
      />
    </>
  );
};

export default TodoList;
