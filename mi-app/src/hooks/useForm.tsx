import { useState, ChangeEvent } from "react";

// export function useForm<T>(initState: T) {

export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form,
  };
};
