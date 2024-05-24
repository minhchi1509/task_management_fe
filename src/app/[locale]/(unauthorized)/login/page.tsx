'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next-nprogress-bar';

import Select from 'src/components/UI/Select';
import useColorMode from 'src/hooks/useColorMode';

const LoginPage = () => {
  const { push } = useRouter();
  const { setColorMode } = useColorMode();

  return (
    <div>
      <Box>
        <Select
          label="Chọn sinh viên"
          sx={{ width: 200 }}
          options={[
            { label: 'B20DCCN111', value: 'B20DCCN111' },
            { label: 'B20DCCN603', value: 'B20DCCN603' },
            {
              label: 'B20DCCN567',
              value: 'B20DCCN567'
            },
            { label: 'B20DCCN064', value: 'B20DCCN064' },
            { label: '---', value: '' }
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => push('/message')}
        >
          Đăng ký
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setColorMode('dark')}
        >
          Change to Dark theme
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setColorMode('light')}
        >
          Change to Light theme
        </Button>
        <TextField label="Fullname" />
      </Box>
      <Box sx={{ width: 560, height: 350, overflow: 'scroll' }}>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam officiis quia culpa, deserunt neque accusantium, laborum in
          quasi molestiae consequuntur officia nulla praesentium. Velit sed ad
          est optio tempore.
        </Typography>
      </Box>
    </div>
  );
};

export default LoginPage;
