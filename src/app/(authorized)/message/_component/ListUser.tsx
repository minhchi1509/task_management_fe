'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useRef } from 'react';

import { addUser, getUsers } from 'src/lib/services/auth.service';

const ListUsers = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  const postTaskMutation = useMutation({
    mutationFn: addUser,
    onMutate(variables) {
      console.log('Variables: ', variables);
    },
    onSuccess: (data) => {
      console.log('Success');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  return (
    <>
      <p>User list:</p>
      {data?.map((user: any) => <p key={user.id}>{user.firstName}</p>)}
      <p>Add user:</p>
      <input ref={firstNameRef} />
      <input ref={lastNameRef} />
      <button
        disabled={postTaskMutation.isPending}
        onClick={() =>
          postTaskMutation.mutate(
            {
              firstName: firstNameRef.current?.value as string,
              lastName: lastNameRef.current?.value as string
            },
            {
              onSuccess: (data) => {
                console.log('Data: ', data);
                queryClient.invalidateQueries({ queryKey: ['users'] });
              }
            }
          )
        }
      >
        Add new user
      </button>
    </>
  );
};

export default ListUsers;
