import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function BootstrapApp() {

  return (
  <Stack direction="horizontal" gap={7  }>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
  );
}

export default BootstrapApp;
