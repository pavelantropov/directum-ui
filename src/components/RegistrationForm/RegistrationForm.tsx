import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };
  const handleChangeJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePost = () => {
    alert(`Вы зарегистрированы на мероприятие. Ваши данные:\n\nФИО: ${fullName}\nМесто работы: ${job}\nE-mail: ${email}`);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Регистрация
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2.5 },
        }}
      >
        <TextField
          id="fullName-input"
          label="ФИО:"
          value={fullName}
          onChange={handleChangeFullName}
          variant="standard"
          placeholder="Иванов Иван Иванович"
          fullWidth
        />
        <TextField
          id="job-input"
          label="Место работы:"
          value={job}
          onChange={handleChangeJob}
          variant="standard"
          placeholder="DIRECTUM"
          fullWidth
        />
        <TextField
          id="email-input"
          label="E-mail:"
          value={email}
          onChange={handleChangeEmail}
          variant="standard"
          placeholder="ivanov_ii@directum.ru"
          fullWidth
        />
        <Button variant="contained" onClick={handlePost} size="large">
          Отправить
        </Button>
      </Box>
    </>
  );
}

export default RegistrationForm;
